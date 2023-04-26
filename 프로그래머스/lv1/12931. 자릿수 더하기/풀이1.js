function solution(n) {
  return (n + "").split("").reduce((acc, curr) => acc + parseInt(curr), 0);
}

/*
- n + "" : 피연산자 중 어느 하나가 문자열이면 문자열이 아닌 피연산자도 문자열로 타입 변환됨. -> n + ""은 결과적으로 문자열 n을 반환
- string.split("") : (조건부 없음) string을 모든 문자열로 각각 분리하여 배열로 반환
- reduce initial value에 0 : 0을 넣어서 acc 초기값을 정수화(문자열 + 정수의 문자열화 방지)
  <=> acc + parseInt(curr), 0 -> parseInt(acc) + parseInt(curr)
*/
