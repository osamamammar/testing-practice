import arrayAnalysis from "../code/arrayAnalysis";

test("test case 1 ", () => {
  expect(arrayAnalysis([1, 2, 3, 4, 5])).toEqual({
    average: 3,
    min: 1,
    max: 5,
    length: 5,
  });
});

test("test case 2 ", () => {
  expect(arrayAnalysis([3, 4, 5, 6, 7])).toEqual({
    average: 5,
    min: 3,
    max: 7,
    length: 5,
  });
});

test("test case 3 ", () => {
  expect(arrayAnalysis([6, 7, 34, 2, 1])).toEqual({
    average: 10,
    min: 1,
    max: 34,
    length: 5,
  });
});

test("test case 4 ", () => {
  expect(arrayAnalysis([0, 1, 3, 7, 8])).toEqual({
    average: 3.8,
    min: 0,
    max: 8,
    length: 5,
  });
});
