const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let repeatTimes = options.repeatTimes || 1;

  let separator = options.separator;
  if (separator === false || separator === null) {
    separator = String(separator);
  } else if (separator === undefined || separator === "") {
    separator = "+";
  }

  let addition = options.addition;
  if (addition === false || addition === null) {
    addition = String(addition);
  } else if (addition === undefined || addition === "") {
    addition = "";
  }

  let additionRepeatTimes = options.additionRepeatTimes || 1;

  let additionSeparator = options.additionSeparator;
  if (additionSeparator === false || additionSeparator === null) {
    additionSeparator = String(additionSeparator);
  } else if (additionSeparator === undefined || additionSeparator === "") {
    additionSeparator = "";
  }

  if (typeof str !== "string" || typeof addition !== "string") {
    str += "";
    addition += "";
  }
  let finalStr = `${str}${
    additionRepeatTimes > 1
      ? (addition + additionSeparator).repeat(additionRepeatTimes - 1) +
        addition
      : addition.repeat(additionRepeatTimes)
  }${separator}`.repeat(repeatTimes);
  finalStr = finalStr.slice(0, finalStr.length - separator.length);
  return finalStr;
};
