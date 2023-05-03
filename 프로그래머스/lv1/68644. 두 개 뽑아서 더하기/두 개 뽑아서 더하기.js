function solution(numbers) {
    const numSize = numbers.length;
    let sumArr = [];
    for(let i = 0; i < numSize; i++) {
        for(let j = i + 1; j < numSize; j++) {
            const sum = numbers[i] + numbers[j];
            if(sumArr.indexOf(sum) === -1) sumArr.push(sum); 
        }
    }
    
    return sumArr.sort((a,b) => a - b);
}
/*
중복 제거/방지 방법

1. sumArr.indexOf(sum) === -1
2. !sumArr.includes(sum)
3. if(i===j) continue; //애초에 같은 인덱스는 sum을 계산하지 않고 넘기면서 배열 자체에 넣지 않는 방

*/