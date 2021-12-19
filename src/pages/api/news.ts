import playwright from "playwright";

const URL = "https://news.google.com/topstories?hl=en-CA&gl=CA&ceid=CA:en";

export default async (req, res) => {
  const browser = await playwright.chromium.launch();
  const page = await browser.newPage();
  await page.goto(URL);

  const result = await page.evaluate(() => {
    const elements = document.querySelectorAll("div.NiLAwe");
    return Array.from(elements).map((element: HTMLDivElement) => {
      const anchorTag = element.querySelector("a.DY5T1d") as HTMLAnchorElement;
      const title = anchorTag.innerHTML;
      const href = anchorTag.href;
      const imageElement = element.querySelector("img.tvs3Id") as
        | HTMLImageElement
        | undefined;
      const imageSrc = imageElement?.src ?? "";
      return {
        title,
        href,
        imageSrc,
      };
    });
  });
  res.statusCode = 200;
  res.json({ result });
  await browser.close();
};
