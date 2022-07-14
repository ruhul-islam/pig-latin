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

    for (let i = 0; i < index(strArray); i++) {
      newStr =
        str.substr(index(strArray), str.length) +
        str.substr(0, index(strArray)) +
        "ay";
      return newStr;
    }
  } else {
    return str + "ay";
  }
};

module.exports = translate;
