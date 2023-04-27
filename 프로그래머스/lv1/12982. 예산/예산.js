function solution(d, budget) {
    let result = 0;
    
    d.sort((a, b) => a - b);
    for(let i = 0; i < d.length; i++) {
        if(budget - d[i] < 0) {
            result = i;
            break;
        } else {
            budget -= d[i];
        }
        result = i + 1;
    }
    
    return result;
}