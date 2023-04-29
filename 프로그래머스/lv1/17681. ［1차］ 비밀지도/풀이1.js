function solution(n, arr1, arr2) {
    return arr1.map((v, i) => addZero(n, (v | arr2[i]).toString(2)).replace(/1|0/g, a => +a ? '#' : ' '));
}

const addZero = (n, s) => {
    return '0'.repeat(n - s.length) + s;
}

/* 비트연산자 bitwise OR | */
/*
replace의 삼항연산자의 조건(a => +a)의 의미
1. a를 받아 +a로, 즉, 문자를 숫자화한다.
2. a가 1 <=> true 이므로 #
3. a가 0 <=> false 이므로 ' '
*/



// addZero함수를 만들지 않고 padStart를 활용한 경우
const solution=(n,a,b)=>a.map((a,i)=>(a|b[i]).toString(2).padStart(n,0).replace(/0/g,' ').replace(/1/g,'#'));

/*
pad함수(from ES8) : 문자열의 길이가 maxLength보다 작으면 앞/뒤를 fillString으로 채워준다.
 - String.prototype.padStart(maxLength, ?fillString);
 - String.prototype.padEnd(maxLength, ?fillString);
*/