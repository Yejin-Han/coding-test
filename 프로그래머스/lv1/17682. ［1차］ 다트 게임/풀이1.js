function solution(dartResult) {
    const bonusMap = [``, `S`, `D`, `T`];
    const optionMap = {
        '*': 2,
        '#': -1
    };

    /**
     * 보너스 점수 계산 Single(S), Double(D), Triple(T)
     * @param bonusMap
     * @returns {function(*, *=)}
     */
    const bonusCheck = (bonusMap) =>{
        return (data, str) => {
            const isBonus = bonusMap.indexOf(str); //현재 문자열이 bonusMap 배열에 존재하는지 확인
            if(isBonus > 0) {
                const index = data.index, currentNum = data.currentNum;
                data.points[index] = Math.pow(Number(currentNum), isBonus);
                data.explanation[index] = `${currentNum}^${isBonus}`;
            }

            return data;
        }
    };

    /**
     * 옵션 점수 계산
     * 스타상(*) 당첨 시 해당 점수와 바로 전에 얻은 점수를 각 2배로 만든다.
     * 아차상(#) 당첨 시 해당 점수는 마이너스된다.
     * @param optionMap
     * @returns {function(*, *)}
     */
    const optionCheck = (optionMap) => {
        return (data, str) => {
            const index = data.index, prev = index - 1, option = optionMap[str];
            switch (str) {
                case '*':
                    data.points[index] = data.points[index] * option;
                    data.explanation[index] = `${data.explanation[index]}*${option}`;
                    if(prev > -1) {
                        data.points[prev] = data.points[prev] * option;
                        data.explanation[prev] = `${data.explanation[prev]}*${option}`;
                    }
                    break;

                case '#':
                    data.points[index] = data.points[index] * option;
                    data.explanation[index] = `${data.explanation[index]}*(${option})`;
                    break;
            }

            return data;
        }
    };

    /**
     * 현재 점수 체크
     * @param data
     * @param str
     */
    const currentNumCheck = (data, str) => {
        const num = Number(str);
        if(!isNaN(num)) {
            if(data.points[data.index]) {
                data.index++;
                data.currentNum = ``;
            }

            data.currentNum += str;
        }
    };

    /**
     * 점수 총합을 구하기 위해.
     * @param data
     * @param index
     * @param array
     */
    const lastIndexCheck = (data, index, array) => {
        if(index >= array.length -1) {
            data.answer = data.points.reduce((answer, num)=>{
                return answer + num;
            }, 0);
        }
    };

    /**
     * String reduce 함수
     * @param bonusMap
     * @param optionMap
     * @returns {function(*=, *=, *=, *=)}
     */
    const reduce = (bonusMap, optionMap) => {
        const bc = bonusCheck(bonusMap);
        const oc = optionCheck(optionMap);

        return (data, str, index, array) => {
            //숫자 체크
            currentNumCheck(data, str);
            //보너스 체크
            bc(data, str);
            //옵션 체크
            oc(data, str);
            //마지막 체크
            lastIndexCheck(data, index, array);

            return data;
        };
    };

    const getAnswer = reduce(bonusMap, optionMap);
    const data = {
            currentNum: ``,
            index: 0,
            points: [],
            explanation: [],
            answer: 0,
        };

    dartResult.split("").reduce(getAnswer, data);
    return data.answer;
}

/* 이렇게 구조를 짜는거구나 참고할 수 있었던 코드. 하지만 나에겐 괜히 복잡하다 */