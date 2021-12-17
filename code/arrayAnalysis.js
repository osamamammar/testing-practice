const arrayAnalysis = (arr) => {
  return {
    average: arr.reduce((acc, value) => acc + value, 0) / arr.length,
    min: Math.min(...arr),
    max: Math.max(...arr),
    length: arr.length,
  };
};

export default arrayAnalysis;
