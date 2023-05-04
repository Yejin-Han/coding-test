function solution(N, stages) {
    let nonClearedCnt = 0;
    let reachedCnt = 0;
    let failureRate = 0;
    let data = [];
    let answer = [];
    
    for(let i = 1; i <= N; i++) { 
        for(let j = 0; j < stages.length; j++) {
            if(i === stages[j]) {
                nonClearedCnt++;
            }
            if(i <= stages[j]) {
                reachedCnt++;
            }
        }
        failureRate = nonClearedCnt / reachedCnt;
        data.push({stage: i, failureRate: failureRate});
        nonClearedCnt = 0;
        reachedCnt = 0;
    }
    
    data.sort((a, b) => b.failureRate - a.failureRate);
    data.map((key) => answer.push(key.stage));
    
    return answer;
}