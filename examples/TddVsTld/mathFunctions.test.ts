import { add, mul } from './mathFunctions';

describe('Math functions test', () => {
	it('Check add function', () => {
		expect(add(1, 2)).toBe(3);
	});
	it('Check multiply functionality', () => {
		expect(mul(2, 3)).toBe(6);
	});
});
