import capitalize from "../code/capitalize";

test("CAPITALIZE TEST 1", () => {
  expect(capitalize("hello world!")).toBe("Hello world!");
});

test("CAPITALIZE TEST 2", () => {
  expect(capitalize("hello")).toBe("Hello");
});

test("CAPITALIZE TEST 3", () => {
  expect(capitalize("world")).toBe("World");
});

test("CAPITALIZE TEST 4", () => {
  expect(capitalize("hellohellohello")).toBe("Hellohellohello");
});
