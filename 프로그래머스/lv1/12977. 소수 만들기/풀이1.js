function primecheck(n){
    for(var i=2;i<=Math.sqrt(n);i++){
        if(n%i == 0){
            return false;
        }
    }
    return true;    
}
function solution(nums){
    var cnt = 0;
    for(var i=0;i<nums.length-2;i++){
        for(var j=i+1;j<nums.length-1;j++){
            for(var w=j+1;w<nums.length;w++){
                    //console.log(nums[i]+"/"+nums[j]+"/"+nums[w]);

                    if(primecheck(nums[i]+nums[j]+nums[w])){
                        //console.log(nums[i]+nums[j]+nums[w]);
                        cnt++;
                    }
            }
        }
    }
    return cnt;
}

/*
소수 판별 알고리즘 중 제곱근을 이용하는 방법 -> 약수의 대칭성을 이용한 응용방법임!
합성수 n을 약수의 곱으로 표현하면 a * b 와 같이 표현할 수 있다.
두 약수의 관계가 a ≥ b 이면, a ≥ √n 이고, b ≤ √n 이다.
그러면 √n 까지만 확인하면 b가 약수로서 걸리고, 소수인지 확인할 수 있게 된다.

==> 계산 complexity가 O(n) -> O(√n)으로 줄어듦.

+) 애초에 경우의 수만 구하면 되지 그 값을 구할 필요는 없으므로 cnt 변수만 생성.
*/