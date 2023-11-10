class Solution {
    public String solution(String letter) {
        String[] morse = {".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."};
        String[] contents = letter.split(" ");
        
        StringBuilder sb = new StringBuilder();
        for(String con : contents) {
            for(int i = 0; i < morse.length; i++) {
                if(con.equals(morse[i])) {
                    sb.append(Character.toString(i + 'a')); // ASCII 코드 이용
                }
            }
        }
        
        return String.valueOf(sb);
    }
}