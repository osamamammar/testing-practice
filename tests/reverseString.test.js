import reverseString from "../code/reverseString";

test("REVERSE STRING TEST 1", () => {
  expect(reverseString("hello world!")).toBe("!dlrow olleh");
});

test("REVERSE STRING TEST 2", () => {
  expect(reverseString("hello")).toBe("olleh");
});

test("REVERSE STRING TEST 3", () => {
  expect(reverseString("Welcome to the future")).toBe("erutuf eht ot emocleW");
});
