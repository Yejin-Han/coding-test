class Solution {
    public String solution(int age) {
        String answer = "";
        String age962 = "abcdefghij";
        String[] ageArr = Integer.toString(age).split("");
        
        for(int i = 0; i < ageArr.length; i++) {
            answer += age962.charAt(Integer.parseInt(ageArr[i]));
        }
        return answer;
    }
}