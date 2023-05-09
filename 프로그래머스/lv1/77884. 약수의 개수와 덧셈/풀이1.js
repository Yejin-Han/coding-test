function solution(left, right) {
    var answer = 0;
    for (let i = left; i <= right; i++) {
        if (Number.isInteger(Math.sqrt(i))) { 
            answer -= i;
        } else {
            answer += i;
        }
    }
    return answer;
}

/*
"제곱근이 정수면 약수의 개수가 홀수다"
- 소인수 a의 n제곱 꼴로 나타내어지는 수의 약수의 개수는 (제곱 횟수+1)이고, 약수는 1, a, a2, ..., an이다.
((짝수+1)×(짝수+1)×...×(짝수+1) = (홀수)×(홀수)×...×(홀수) = (홀수))
*/