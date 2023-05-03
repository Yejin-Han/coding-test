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