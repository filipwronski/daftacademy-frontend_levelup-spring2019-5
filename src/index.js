function fib(num, current = 1, previous = 0){
    let temp;
    let results = [];
    while (num >= 0) {
        results.push(current)
        temp = current;
        current = current + previous;
        previous = temp;
        num--;
    }
  
    return results;
}

console.log(fib(10));