const translate = (str) => {
  let newStr = "";
  str = str.toLowerCase();

  if (str[0].match(/[aeiou]/gi)) {
    newStr = str + "way";
    return newStr;
  } else if (str.match(/[aeiou]/gi)) {
    let strArray = Array.from(str);
    const index = (strArray) => {
      return strArray.findIndex((letter) => {
        return letter.match(/[aeiou]/gi);
      });
    };
    // str.substr(index(strArray)) and str.substr(index(strArray), str.length) are the same
    newStr =
      str.substr(index(strArray)) + str.substr(0, index(strArray)) + "ay";
    return newStr;
  } else {
    return str + "ay";
  }
};

///// below done in class ////////
// const translate = (word) => {
//   word = word.toLowerCase();
//   const vowels = ["a", "e", "i", "o", "u"];
//   if (vowels.includes(word[0])) {
//     return word + "way";
//   } else {
//     const index = word.split("").findIndex((letter) => {
//       return vowels.includes(letter);
//     });
//     const last = word.substr(index);
//     const first = word.substr(0, index);
//     return last + first + "ay";
//   }
// };

module.exports = translate;
