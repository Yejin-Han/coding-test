function solution(dartResult) {
    const bonus = { 'S': 1, 'D': 2, 'T': 3 },
          options = { '*': 2, '#': -1, undefined: 1 };

    let darts = dartResult.match(/\d\d?.?\D/g);

    for (let i = 0; i < darts.length; i++) {
        let split = darts[i].match(/(^\d{1,})(S|D|T)(\*|#)?/),
            score = Math.pow(split[1], bonus[split[2]]) * options[split[3]];

        if (split[3] === '*' && darts[i - 1]) darts[i - 1] *= options['*'];

        darts[i] = score;
    }

    return darts.reduce((a, b) => a + b);
}

/* 정규표현식과 개체를 활용한 풀이 */

/*
- match는 정규표현식에 매칭되는 항목들을 배열로 반환
- 여기서 쓰인 정규표현
\d : 숫자에 해당하는 문자  \d\d: 숫자 2개 연속으로 나타남
\D : 숫자 이외의 문자
? : 앞에 있는 문자나 그룹이 0번 또는 1번 나타남을 나타냄
. : 어떤 문자 하나를 의미
^ : 특정 문자열로 시작  <-> $ : 특정 문자열로 끝
{Min,} : 최소 Min개 이상

\d\d?: 1~2개의 연속된 숫자에 해당하는 문자

**
/\d\d?.?\D/   // 1~2개의 연속된 숫자 다음에 어떤 문자 하나가 있고, 그 다음에 숫자 이외의 문자가 나오는 경우
/(^\d{1,})(S|D|T)(\*|#)?/   // 세 개의 그룹(1. 1자리 이상의 숫자로 시작 / S or D or T의 보너스 그룹 / * or #의 옵션 그룹 but ?가 붙으므로 없어도 있어도 됨)
*/