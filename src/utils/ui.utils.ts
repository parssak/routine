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

export const convertDateToAMPM = (date: Date) => {
  const hour = date.getHours();
  const minute = date.getMinutes();
  const ampm = hour >= 12 ? "pm" : "am";
  const hour12 = hour % 12;
  return `${hour12}:${minute} ${ampm}`;
}
