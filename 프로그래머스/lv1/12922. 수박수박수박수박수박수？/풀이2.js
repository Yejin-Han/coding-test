function solution(n) {
  return "수박".repeat(n / 2) + (n % 2 === 1 ? "수" : "");
}

/* repeat 함수의 조건은 양의 정수, 0이면 공백 출력, 소수를 넣으면 소수점 이하는 버림 */
