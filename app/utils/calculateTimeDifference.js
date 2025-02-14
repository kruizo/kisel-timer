export const calculateTimeDifference = (startDate) => {
  const now = new Date();
  const diff = new Date(now - startDate);

  const years = diff.getUTCFullYear() - 1970;
  const months = diff.getUTCMonth();
  const days = diff.getUTCDate() - 1;
  const hours = diff.getUTCHours();
  const minutes = diff.getUTCMinutes();
  const seconds = diff.getUTCSeconds();

  const totalDays = Math.floor((now - startDate) / (1000 * 60 * 60 * 24));
  const totalMonths = years * 12 + months;
  const totalYears = years;

  return {
    years,
    months,
    days,
    hours,
    minutes,
    seconds,
    totalDays,
    totalMonths,
    totalYears,
  };
};
