const generateYearRange = (startYear: number = 1900, endYear: number = new Date().getFullYear()): string[] => {
  if (startYear > endYear) {
    throw new Error('Start year cannot be greater than end year');
  }
  const years: string[] = [];
  for (let year = endYear; year >= startYear; year--) {
    years.push(year.toString());
  }
  return years;
};

export default generateYearRange;
