function solution(numbers) {
    const temp = []

    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            temp.push(numbers[i] + numbers[j])
        }
    }

    const answer = [...new Set(temp)]

    return answer.sort((a, b) => a - b)
}

/*
set 객체 : 수학적 집합을 구현하기위한 자료구조
- 동일한 값을 중복하여 포함할수 없다. * 여기선 중복 제거에 사용함!
- 요소 순서에 의미가 없다.
- 인덱스로 요소에 접근할 수 없다.
*/