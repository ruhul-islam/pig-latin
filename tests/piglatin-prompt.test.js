const str = require("../src/piglatin-prompt");
const translate = require("../src/translate");

describe("translate function", () => {
  test("user input", () => {
    let result = translate(str);

    // expect(result).toBe("appleway");
    console.log(result);
  });
});
