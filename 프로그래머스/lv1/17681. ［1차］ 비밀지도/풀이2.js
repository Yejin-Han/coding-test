function solution(n, arr1, arr2) {
    let num1, num2, s;
    let answer = [];
    //manually turning decimals to binaries cos i can!
    for (let i=0; i<n; i++){
        num1 = arr1[i];
        num2 = arr2[i];
        s = '';
        for (let j=0; j<n; j++){
            s = (num1%2 + num2%2) ? '#'+s : ' '+s;
            num1 = Math.floor(num1/2);
            num2 = Math.floor(num2/2);
        }
        answer.push(s);
    }    
    return answer;
}

/* 이진수로 변환하는 과정까지 직접 한 경우 */