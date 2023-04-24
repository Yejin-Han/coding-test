const solution = (phone_number) => {
    const numLen = phone_number.length - 4;
    const starsNum = phone_number.slice(0, numLen);
    return phone_number.replace(starsNum, "*".repeat(numLen));
};