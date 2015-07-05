import Operations from '../app/Operations.js';

describe('Operations tests', () => {
    let operations;
    beforeEach(() => {
        operations = new Operations(5, 6);
    });

    it('Should add numbers', () => {
        expect(operations.add()).toBe(11);
    });

    it('Should subtract numbers', () => {
        expect(operations.subtract()).toBe(-1);
    });

    it('Should multiply numbers', () => {
        expect(operations.multiply()).toBe(36);
    });

    it('Should divide numbers', () => {
        expect(operations.divide()).toBe(0.8333333333333334);
    })
});