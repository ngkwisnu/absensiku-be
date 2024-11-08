const currentDate = new Date();

const getLocalTime = () => {
  const localTime = new Date(
    currentDate.getTime() - currentDate.getTimezoneOffset() * 60000
  ).toISOString();
  return localTime;
};

export { getLocalTime };
