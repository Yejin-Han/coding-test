function solution(s) {
    let numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    var answer = s;

    for(let i=0; i< numbers.length; i++) {
        let arr = answer.split(numbers[i]);
        answer = arr.join(i);
    }

    return Number(answer);
}

/* join : 배열의 원소를 문자열로 합치기 */
/* 먼저 numbers[i]를 구분자로 answer을 split한 후 둘을 문자열로 합치면서 그 사이에 i를 넣는다. */