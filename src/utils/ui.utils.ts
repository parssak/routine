export const getDate = () => {
  const date = new Date();
  const day = date.toLocaleString("en-US", { weekday: "long" });
  const month = date.toLocaleString("en-US", { month: "long" });
  const year = date.getFullYear();
  return `${day}, ${month} ${date.getDate()}, ${year}`;
};

export const getGreeting = () => { 
  const date = new Date();
  const hour = date.getHours();
  if (hour < 12) {
    return "Good morning";
  } else if (hour < 18) {
    return "Good afternoon";
  } else {
    return "Good evening";
  }
}
