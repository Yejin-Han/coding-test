function solution(n)
{
    let answer = 0;
    let strNum = String(n);
    for(let i = 0; i < strNum.length; i++) {
        answer += Number(strNum[i]);
    }
    return answer;
}