function solution(n) {
    const answer = [];
    while(n !== 0) {
        answer.unshift(n % 3);
        n = Math.floor(n/3);
    }
    return answer.reduce((acc,v,i) => acc + (v * (3**i)),0);   
}

/* 3진법 변환에 toString 활용x, 3**i == Math.pow(3, i) */