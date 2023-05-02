const isPrime = sum => {
    for(let i = 2; i < sum; i++) {
        if(sum % i === 0) return false;
    }
    return true;
}

const solution = nums => {
    let answer = [];
    const numSize = nums.length;
    for(let i = 0; i < numSize; i++) {
        for(let j = i + 1; j < numSize; j++) {
            for(let k = j + 1; k < numSize; k++) {
                const sum = nums[i] + nums[j] + nums[k];
                if(isPrime(sum)) answer.push(sum);
            }
        }
    }
    
    return answer.length;
}