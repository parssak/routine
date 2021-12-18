export const getDate = () => {
  const date = new Date();
  const day = date.toLocaleString("en-US", { weekday: "long" });
  const month = date.toLocaleString("en-US", { month: "long" });
  const year = date.getFullYear();
  return `${day}, ${month} ${date.getDate()}, ${year}`;
};
