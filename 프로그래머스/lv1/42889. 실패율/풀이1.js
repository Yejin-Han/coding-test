function solution(N, stages) {
    let result = [];
    for(let i=1; i<=N; i++){
        let reach = stages.filter((x) => x >= i).length;
        let curr = stages.filter((x) => x === i).length;
        result.push([i, curr/reach]); //이차원 배열로 삽입
    }
    result.sort((a,b) => b[1] - a[1]);
    return result.map((x) => x[0]);
}

/*
가장 solve 시간이 짧은 풀이 -> for 안에 filter 이므로 결과적으로 시간 복잡도가 낮아지지는 않는 듯 하다.
Array.filter(callbackfn) : 배열 요소의 값을 순회하면서 함수 조건에 맞는 값만 걸러냄.
*/