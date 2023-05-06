function solution(price, money, count) {
    const tmp = price * count * (count + 1) / 2 - money;
    return tmp > 0 ? tmp : 0;
}

/* 가우스 : 1~n까지의 합을 n(n+1)/2로 계산 */

let solution = (p, m, c) => Math.max(p * c * ++c / 2 - m, 0); //++c로 인해 c + 1과 같은 값으로 계산된다. 즉, 위의 함수와 동일해짐.
/* 삼항연산자도 사용하지 않는 더 간단한 식 */