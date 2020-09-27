const { fake } = require("sinon");
const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  if (
    typeof sampleActivity === "string" &&
    Math.sign(parseFloat(sampleActivity)) === 1 &&
    parseFloat(sampleActivity) < 15
  ) {
    let per = 0.693 / HALF_LIFE_PERIOD;
    let log = Math.log(MODERN_ACTIVITY / parseFloat(sampleActivity));
    let current = Math.ceil(log / per);
    return current;
  }
  return false;
};
