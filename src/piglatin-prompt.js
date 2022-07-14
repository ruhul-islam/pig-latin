// use the promptly NPM package to prompt the user for a word or phrase. Call your function to translate it, then log the result.

const promptly = require("promptly");
const translate = require("../src/translate");

(async () => {
  const str = await translate.prompt("Word or Phrase: ");
  //   console.log(str);
})();

module.exports = translate;
