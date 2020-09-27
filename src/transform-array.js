// const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (Array.isArray(arr)) {
    if (arr.length == 0) {
      return arr;
    }
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] == "--double-next") {
        if (i == arr.length - 1) {
          arr.splice(i, 1);
        } else {
          arr.splice(i, 1, arr[i + 1]);
          i++;
        }
      }

      if (arr[i] == "--double-prev") {
        if (i == 0) {
          arr.splice(i, 1);
          i--;
        } else {
          arr.splice(i - 1, 2, arr[i - 1], arr[i - 1]);
        }
      }
    }

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] == "--discard-next") {
        if (i == arr.length - 1) {
          arr.splice(i, 1);
        } else {
          arr.splice(i, 2);
          i--;
        }
      }

      if (arr[i] == "--discard-prev") {
        if (i == 0) {
          arr.splice(i, 1);
          i--;
        } else {
          arr.splice(i - 1, 2);
          i = i - 2;
        }
      }
    }
    return arr;
  } else throw Error("arr не является массивом");
};
