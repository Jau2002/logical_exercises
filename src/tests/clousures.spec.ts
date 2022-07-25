import { counter } from '../closures_recursion/closures';

describe('counter', () => {
	it('should return a function', () => {
		expect(typeof counter).toBe('function');
	});
	it('should increment the number when the function is invoked', () => {
		const countFunc: any = counter();
		expect(countFunc()).toBe(1);
		expect(countFunc()).toBe(2);
	});
	it('should have two different accumulators if two counters are create', () => {
		const countOne: any = counter();
		const countTwo: any = counter();
		expect(countOne()).toBe(1);
		expect(countOne()).toBe(2);
		expect(countOne()).toBe(3);
		expect(countTwo()).toBe(1);
	});
});
