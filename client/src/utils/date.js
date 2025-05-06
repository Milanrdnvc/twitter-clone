export const timeAgo = (date) => {
  const rtf = new Intl.RelativeTimeFormat("en", { numeric: "auto" });
  const deltaSeconds = Math.floor((new Date() - new Date(date)) / 1000);

  const ranges = {
    year: 3600 * 24 * 365,
    month: 3600 * 24 * 30,
    week: 3600 * 24 * 7,
    day: 3600 * 24,
    hour: 3600,
    minute: 60,
  };

  for (const [unit, secondsInUnit] of Object.entries(ranges)) {
    if (deltaSeconds >= secondsInUnit) {
      const value = Math.floor(deltaSeconds / secondsInUnit);
      return rtf.format(-value, unit);
    }
  }

  return "just now";
};
