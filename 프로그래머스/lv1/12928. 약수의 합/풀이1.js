function solution(n) {
  let answer = 0;
  let i;
  for (i = 1; i <= Math.sqrt(n); i++) {
    if (!(n % i)) {
      answer += i + n / i;
    }
  }
  i--;
  return i === n / i ? answer - i : answer;
}

/* 계산량을 줄이기 위해 n까지 다 안하고, 아래 짝을 찾으면 위아래를 같이 더함. 예를 들어 12면, 3을 찾았을 때 3+4를 해주는 방식으로. */
