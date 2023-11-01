class Solution {
    public String solution(String my_string) {
        String answer = my_string;
        String[] vowels = {"a", "e", "i", "o", "u"};
        for(String s : vowels) {
            answer = answer.replaceAll(s, "");
        }
        return answer;
    }
}