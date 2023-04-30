function solution(a, b, n) {
    let answer = 0;
    while (n >= a) {
        answer += parseInt(n / a) * b;
        n = parseInt(n / a) * b + n % a;
    }
    return answer;
}

/* 재귀함수로 return 조건 주는 대신 while 조건을 걸어서 진행 */