export function getLastDay() {
  const now = new Date();
  const currentYear = now.getFullYear();
  const currentMonth = now.getMonth() + 1;

  const date = new Date(currentYear, currentMonth, 0);
  const lastDate = date.getDate();

  return lastDate;
}
