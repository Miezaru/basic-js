const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (Array.isArray(members)) {
    members = members.filter((member) => typeof member === "string");
    let teamName = [];
    for (let i = 0; i < members.length; i++) {
      teamName.push(members[i].trim()[0].toUpperCase());
    }
    return teamName.sort().join("");
  }
  return false;
};
