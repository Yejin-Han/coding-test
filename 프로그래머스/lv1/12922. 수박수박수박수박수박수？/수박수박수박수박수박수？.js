function solution(n) {
    let str = "";
    for(let i = 1; i <= n; i++) {
        !(i % 2) ? str += "박" : str += "수";
    }
    
    return str;
}