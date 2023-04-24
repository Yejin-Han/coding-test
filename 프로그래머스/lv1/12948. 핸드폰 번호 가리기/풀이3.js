const solution = (phone_number) => {
  let result = "";
  for (let i = 0; i < phone_number.length; i++) {
    result += i < phone_number.length - 4 ? "*" : phone_number.charAt(i);
  }
  return result;
};

/* charAt(i) : i index에 위치하는 단일문자 반환 */
