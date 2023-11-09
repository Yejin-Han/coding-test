class Solution {
    public boolean solution(int x) {
        boolean answer = true;
        String[] numArr = String.valueOf(x).split("");
        int sum = 0;
        for(String num : numArr) {
            sum += Integer.valueOf(num);
        }
        if(x % sum == 0) { 
            answer = true;
        } else {
            answer = false;
        }
        return answer;
    }
}