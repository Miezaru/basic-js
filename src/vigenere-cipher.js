const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  // encrypt(str, key) {
  //   let alphabet = [
  //     "A", //0
  //     "B", //1
  //     "C", //2
  //     "D", //3
  //     "E", //4
  //     "F", //5
  //     "G", //6
  //     "H", //7
  //     "I", //8
  //     "J", //9
  //     "K", //10
  //     "L", //11
  //     "M", //12
  //     "N", //13
  //     "O", //14
  //     "P", //15
  //     "Q", //16
  //     "R", //17
  //     "S", //18
  //     "T", //19
  //     "U", //20
  //     "V", //21
  //     "W", //22
  //     "X", //23
  //     "Y", //24
  //     "Z", //25
  //   ];
  //   let letter;
  //   let cipherArray = [];
  //   str = String(str.toUpperCase());
  //   key = String(key.toUpperCase()).split("");
  //   let keyJ = key;
  //   let j = 0;
  //   for (let i = 0; i < str.length; i++) {
  //     if (str[i].charCodeAt(0) >= 65 && str[i].charCodeAt(0) <= 90) {
  //       letter = (alphabet.indexOf(str[i]) + alphabet.indexOf(key[j])) % 26;
  //       j++;

  //       cipherArray.push(String(letter));

  //       if (j == key.length) {
  //         j = 0;
  //       }
  //     } else {
  //       cipherArray.push(String(str[i]));
  //       key.splice(j, 0, " ");
  //       j++;
  //     }
  //   }
  //   for (let i = 0; i < cipherArray.length; i++) {
  //     if (alphabet[cipherArray[i]]) {
  //       cipherArray[i] = alphabet[cipherArray[i]];
  //     } else continue;
  //   }

  //   return cipherArray.join("");
  // }

  encrypt(message, key) {
    const alphabet = [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
    ];
    message = message.toUpperCase();
    let messageCodes = [];
    let keys = key.toUpperCase();
    let j = 0;
    if (!this.algoDirection) message = message.split("").reverse();
    for (let i = 0; i < message.length; i++) {
      if (alphabet.includes(message[i])) {
        let index =
          (alphabet.indexOf(message[i]) + alphabet.indexOf(keys[j])) % 26;
        let tmp = alphabet[index];
        messageCodes.push(tmp);
        j++;
        if (j == keys.length) j = 0;
      } else messageCodes.push(message[i]);
    }
    return messageCodes.join("");
  }

  decrypt(message, key) {
    const alphabet = [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
    ];
    message = message.toUpperCase();
    let messageCodes = [];
    let keys = key.toUpperCase();
    let j = 0;
    if (!this.algoDirection) message = message.split("").reverse();

    for (let i = 0; i < message.length; i++) {
      if (alphabet.includes(message[i])) {
        let index =
          (alphabet.indexOf(message[i]) - alphabet.indexOf(keys[j]) + 26) % 26;
        let tmp = alphabet[index];
        messageCodes.push(tmp);
        j++;
        if (j == keys.length) j = 0;
      } else messageCodes.push(message[i]);
    }
    return messageCodes.join("");
  }

  constructor(algoDirect = true) {
    this.algoDirection = algoDirect;
    return this.algoDirection;
  }
}

module.exports = VigenereCipheringMachine;
