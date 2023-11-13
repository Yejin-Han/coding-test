class Solution {
    public int solution(String my_string) {
        int answer = 0;
        String[] strArr = my_string.split("[a-zA-Z]");
        for(String s : strArr) {
            answer += (!s.equals("")) ? Integer.parseInt(s) : 0;
        }
        return answer;
    }
}