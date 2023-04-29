function solution(s) {
    const numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let answer = s;
    
    for(let i = 0; i < numbers.length; i++) {
        answer = answer.replace(new RegExp(numbers[i], 'g'), i);
    }
    
    console.log(answer);
    return Number(answer);
}