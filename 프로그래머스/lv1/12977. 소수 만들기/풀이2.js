function solution(nums) {
    const combis = getCombination(nums, 3);
    const elementSum = getElmentSum(combis);
    const prime = getPrimeNumList(Math.max(...elementSum));
  
    return elementSum.filter(el => prime[el] !== 0).length; 
}
  
function getCombination(arr, len = arr.length) {
    if (len === 1) return arr.map(el => [el]);
  
    const combis = [];
  
    arr.forEach((curr, idx) => {
      const smallerCombis = getCombination(arr.slice(idx + 1), len - 1);
  
      smallerCombis.forEach((smallerCombi) => {
        combis.push([curr, ...smallerCombi]);
      });
  
    });
  
    return combis;
}
  
function getElmentSum(comb) {
    return comb.map(el => el.reduce((a,b)=>a+b));
}
  
function getPrimeNumList(num) {
    const prime = [];
  
    for(let i = 2; i <= num; i += 1) {
      prime.push(i);
    }
  
    for(let i = 2; i <= Math.sqrt(num); i += 1) {
      if(prime[i] === 0) continue;
  
      for(let j = i + i; j <= num; j += i) {
        prime[j] = 0;
      }
    }
  
    return prime;
}
  