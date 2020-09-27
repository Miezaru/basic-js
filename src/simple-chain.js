const CustomError = require("../extensions/custom-error");

const chainMaker = {
  result: [],
  lastResult: [],
  getLength() {
    return this.result.length;
  },
  addLink(value = " ") {
    this.result.push(`${value}`);
    return this;
  },
  removeLink(position) {
    if (
      !position ||
      !Number.isInteger(position) ||
      position > this.result.length ||
      position < 0
    ) {
      this.result = [];
      throw Error("error");
    }
    this.result.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.result.reverse();
    return this;
  },
  finishChain() {
    this.lastResult = this.result.slice();
    this.result = [];
    let resultStr = "";
    for (let i = 0; i < this.lastResult.length; i++) {
      if (i === 0) {
        resultStr += `( ${this.lastResult[i]} )`;
      } else {
        resultStr += `~~( ${this.lastResult[i]} )`;
      }
    }
    return resultStr;
  },
};

module.exports = chainMaker;
