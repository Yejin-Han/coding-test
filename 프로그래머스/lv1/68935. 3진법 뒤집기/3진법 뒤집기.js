function solution(n) {
    return parseInt(n.toString(3).split('').reverse().join(''), 3);
}

/* split 대신 deep copy 가능
parseInt([...n.toString(3)].reverse().join(""), 3) */