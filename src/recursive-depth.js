const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr, count = 1, result = [1]) {
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        result.push(++count);
        this.calculateDepth(arr[i], count, result);
        --count;
      }
    }
    return Math.max(...result);
  }
};
