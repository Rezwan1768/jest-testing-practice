export function analyzeArray(arr) {
    let average = 0;
    let min = null;
    let max = null;
    for(let num of arr) {
        if(num < min || min === null) min = num;
        if(num > max || max === null) max = num;
        average += num;
    }
    if(arr.length !== 0) average = Math.trunc(average / arr.length);


    return{average, min, max, length: arr.length,}
}

console.log(analyzeArray([1, 5]).average);