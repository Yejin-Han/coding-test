function solution(arr) {
    let sum = 0;
    arr.forEach(el => {
        sum += el;
    });
    return sum / arr.length;
}