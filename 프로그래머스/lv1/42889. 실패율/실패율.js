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
    data.map((key) => answer.push(key.stage)); //굳이 answer에 push해서 담을 필요 없이 그냥 => key.stage 했으면 아마 됐을 것이다
    
    return answer;
}

/*
이중 for문을 돌아서 그런지 성능이 썩 구림.. 350ms 넘는 케이스가 몇 개 존재
배열 안에 객체로 push하는 시도를 해 봄.
*/