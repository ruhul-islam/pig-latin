const translate = require("../src/translate");

describe("translate function", () => {
  test("words that start with the vowel a", () => {
    let result = translate("apple");
    expect(result).toBe("appleway");
  });
  test("words that start with the vowel e", () => {
    let result = translate("egg");
    expect(result).toBe("eggway");
  });
  test("words that start with the vowel i", () => {
    let result = translate("Idol");
    expect(result).toBe("idolway");
  });
  test("words that start with the vowel o", () => {
    let result = translate("orGan");
    expect(result).toBe("organway");
  });
  test("words that start with the vowel u", () => {
    let result = translate("ultra");
    expect(result).toBe("ultraway");
  });
  test("words that start with the vowel capital U", () => {
    let result = translate("Ultra");
    expect(result).toBe("ultraway");
  });
  test("words that start with one consonant", () => {
    let result = translate("hello");
    expect(result).toBe("ellohay");
  });
  test("words that start with one consonant", () => {
    let result = translate("world");
    expect(result).toBe("orldway");
  });
  test("words that start with one consonant", () => {
    let result = translate("TUlip");
    expect(result).toBe("uliptay");
  });
  test("words that start with two consonants", () => {
    let result = translate("Blood");
    expect(result).toBe("oodblay");
  });
  test("words that start with two consonants", () => {
    let result = translate("TRUCK");
    expect(result).toBe("ucktray");
  });
  test("words that start with three consonants", () => {
    let result = translate("screw");
    expect(result).toBe("ewscray");
  });
  test("words that start with four consonants", () => {
    let result = translate("Phthalocyanine");
    expect(result).toBe("alocyaninephthay");
  });
  test("words that start with no vowels", () => {
    let result = translate("myth");
    expect(result).toBe("mythay");
  });
  test("words that start with no vowels", () => {
    let result = translate("cyst");
    expect(result).toBe("cystay");
  });
});
