import java.util.*;

class Solution {
    public String solution(String my_string, int m, int c) {
        String answer = "";
        List<String> strArr = new ArrayList<>();
        
        for(int i = 0; i < my_string.length(); i += m) {
            strArr.add(my_string.substring(i, i + m));
        }
        
        for(int j = 0; j < strArr.size(); j++) {
            answer += strArr.get(j).substring(c - 1, c);
        }
        
        return answer;
    }
}