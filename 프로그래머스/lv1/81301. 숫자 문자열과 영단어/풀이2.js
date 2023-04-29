const digit2word = ['zero','one','two','three','four','five','six','seven', 'eight','nine']
function solution(s) {
    return Number(digit2word.reduce((ans, word, digit) => ans.replace(new RegExp(word, 'g'), digit), s));
}