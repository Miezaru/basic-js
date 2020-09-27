const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (!date) return "Unable to determine the time of year!";
  const isDate = (dt) => {
    switch (typeof dt) {
      case "number":
        return true;
      case "string":
        return !isNaN(Date.parse(dt));
      case "object":
        if (dt instanceof Date) {
          return !isNaN(dt.getTime());
        }
      default:
        return false;
    }
  };
  if (isDate(date)) {
    let mNum = date.getMonth() + 1;
    if (mNum === 12 || mNum === 1 || mNum === 2) {
      return "winter";
    } else if (mNum === 3 || mNum === 4 || mNum === 5) {
      return "spring";
    } else if (mNum === 6 || mNum === 7 || mNum === 8) {
      return "summer";
    } else return "autumn";
  }
  return false;
};
