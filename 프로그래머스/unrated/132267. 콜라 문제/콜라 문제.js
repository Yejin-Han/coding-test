function solution(a, b, n) {
    if(n < a) {
        return 0;
    }
    else {
        let answer = Math.floor(n / a) * b;
        
        return answer + solution(a, b, n % a + answer)
    }
}