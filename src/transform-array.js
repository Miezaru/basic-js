// const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.from(arr)) {
    throw new TypeError();
  }

  let newArr = arr.slice(0);
  let pos = 0;

  while (pos < newArr.length) {
    let item = newArr[pos];

    if (item === "--discard-next") {
      newArr.splice(pos + 1, 1);
    } else if (item === "--discard-prev" && pos > 0) {
      newArr.splice(pos - 1, 1);
    } else if (item === "--double-next") {
      newArr.splice(pos, 0, newArr[pos + 1]);
      pos++;
    } else if (item === "--double-prev") {
      newArr.splice(pos, 0, newArr[pos - 1]);
      pos++;
    }

    pos++;
  }

  return newArr.filter((item) => {
    return (
      item != undefined &&
      item != "--discard-next" &&
      item != "--discard-prev" &&
      item != "--double-next" &&
      item != "--double-prev"
    );
  });
};
