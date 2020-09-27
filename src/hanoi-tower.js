const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let operationsCount = 2 ** disksNumber - 1;
  let operationInSec = turnsSpeed / 3600;
  let operationsSeconds = Math.floor(operationsCount / operationInSec);
  let results = {
    turns: operationsCount,
    seconds: operationsSeconds,
  };
  return results;
};
