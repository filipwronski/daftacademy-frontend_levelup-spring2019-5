import fib from '../index.js';


describe('The fib', () => {
    it('should return result with type of array', () => {
        const result = fib(6);
        expect(Array.isArray(result)).toBe(true);
    });

    it('should return array with expected number of results', () => {
        expect(fib(0).length).toBe(0);
    });

    it('should return expected result', () => {
        expect(fib(7)).toEqual([1,1,2,3,5,8,13]);
    });

    it('should throw error when num is lower than 0', () => {
        expect(() => {
            fib(-1);
        }).toThrow(/^Number of results should not be lower than 0$/)
    });

    it('should throw error when num is not a number', () => {
        expect(() => {
            fib('test');
        }).toThrow(/^Number of results should be number$/)
    });

    it('should throw error when num is float', () => {
        expect(() => {
            fib(0.2);
        }).toThrow(/^Number of results should not be float$/)
    });

    it('should throw error when num is higher than maximum safe integer', () => {
        expect(() => {
            fib(Number.MAX_SAFE_INTEGER);
        }).toThrow(/^Number of results should not be higher or equal than max safe integer$/)
    });
});