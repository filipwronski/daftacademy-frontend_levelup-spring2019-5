const fib = (num) => {
    if (num < 0) {
        throw Error('Number of results should not be lower than 0')
    }
    else if (typeof num !== 'number') {
        throw Error('Number of results should be number')
    }
    else if (!Number.isInteger(num)) {
        throw Error('Number of results should not be float')
    }
    else if (num >= Number.MAX_SAFE_INTEGER) {
        throw Error('Number of results should not be higher or equal than max safe integer')
    }
    let current = 1, previous = 0, temp, results = [];
    while (num > 0) {
        results.push(current)
        temp = current;
        current = current + previous;
        previous = temp;
        num--;
    }
  
    return results;
}

export default fib; 