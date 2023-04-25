function solution(arr) {
  return arr.reduce((a, b) => a + b) / arr.length;
}

/* arr.reduce((acc, cur, idx) => { return callback; }, initialValue); */
