function solution(dartResult) {
    let score = 0;
    let answer = [];
    
    for(let i = 0; i < dartResult.length; i++) {
        if(dartResult[i]*1 >= 0 && dartResult[i]*1 <= 9) {
            if(dartResult[i]*1 == 1 && dartResult[i+1]*1 == 0) {
                score = 10;
                i++;
            } else {
                score = dartResult[i]*1;
            }
        } else if(dartResult[i] == "S") {
            answer.push(score);
        } else if(dartResult[i] == "D") {
            answer.push(score**2);
        } else if(dartResult[i] == "T") {
            answer.push(score**3);
        } else if(dartResult[i] == "#") {
            answer[answer.length - 1] *= (-1);
        } else if(dartResult[i] == "*") {
            answer[answer.length - 1] *= 2;
            answer[answer.length - 2] *= 2;
        }
    }
    
    return answer.reduce((a, b) => a + b);
}