export const formatDate = (
  date: Date | string | null,
  isYear?: boolean,
): string => {
  if (!date) return '-';

  const d = typeof date === 'string' ? new Date(date) : date;

  if (isNaN(d.getTime())) return '-'; //

  if (isYear) {
    return d.getFullYear().toString();
  }

  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};
