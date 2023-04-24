const solution = (sides) => {
    const max = Math.max(...sides);
    return sides.reduce((a,b)=>(a+b))-max>max ? 1 : 2;
}