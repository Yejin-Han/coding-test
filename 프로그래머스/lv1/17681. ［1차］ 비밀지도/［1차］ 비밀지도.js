function solution(n, arr1, arr2) {
    let arr = [];
    let answer = [];
    
    for(let i = 0; i < n; i++) {
        let temp = '';
        arr[i] = (arr1[i] | arr2[i]).toString(2);
        arr[i] = '0'.repeat(n - arr[i].length) + arr[i];
        for(let j = 0; j < n; j++) {
            if(arr[i].charAt(j) == 1) temp += '#';
            else temp += ' ';
        }
        answer[i] = temp;
    }
    
    return answer;
}