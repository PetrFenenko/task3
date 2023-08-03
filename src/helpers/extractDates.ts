export const extractDates = (inputString: string): string[] => {
  const datePattern = /\b(\d{1,2})\/(\d{1,2})\/(\d{4})\b/g;
  const datesArray: string[] = [];

  let match: RegExpExecArray | null;
  while ((match = datePattern.exec(inputString))) {
    const day = match[1];
    const month = match[2];
    const year = match[3];
    const date = `${day}/${month}/${year}`;
    datesArray.push(date);
  }

  return datesArray;
};
