export const formatLongDate = (locale = "id-ID", date) => {
  const options = {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  };

  return new Intl.DateTimeFormat(locale, options).format(new Date(date));
};