export function dateParcer(date) {
  const parcedDate = new Date(date);
  const localTimeFull = parcedDate.toLocaleString();
  const dateOnly = parcedDate.toLocaleDateString();
  const timeOnly = parcedDate.toLocaleTimeString();
  const seconds = parcedDate.getSeconds();
  return { localTimeFull, dateOnly, timeOnly, seconds };
}

