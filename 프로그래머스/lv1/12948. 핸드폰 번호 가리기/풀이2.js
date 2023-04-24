const solution = (phone_number) => {
  return "*".repeat(phone_number.length - 4) + phone_number.slice(-4);
};

/*
slice : 배열 조건 얕은 복제 함수

arr.slice(begin, end); //index begin ~ end 전까지 복제, begin-end 모두 optional
arr.slice(negative); //배열의 끝에서부터의 길이

*/
