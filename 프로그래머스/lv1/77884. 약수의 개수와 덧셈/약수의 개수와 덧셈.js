function solution(left, right) {
    let count = 0;
    let sum = 0;
    
    for(let i = left; i <= right; i++) {
        for(let j = 1; j <= i; j++) {
            if(i % j === 0) count++;
        }
        !(count % 2) ? sum += i : sum -= i;
        console.log(sum);
        count = 0; // count 선언과 0 초기화를 첫 for문 안에서 시작할 때 했으면 더 깔끔했을 것.
    }
    
    return sum;
}