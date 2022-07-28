import counter from '../closures_recursion/closures';
import accountant from '../types';

describe('counter', (): any => {
	it('should return a function', (): any => {
		expect(typeof counter).toBe('function');
	});
	it('should increment the number when the function is invoked', (): any => {
		const countFunc: accountant = counter();
		expect(countFunc()).toBe(1);
		expect(countFunc()).toBe(2);
	});
	it('should have two different accumulators if two counters are create', (): any => {
		const countOne: accountant = counter();
		const countTwo: accountant = counter();
		expect(countOne()).toBe(1);
		expect(countOne()).toBe(2);
		expect(countOne()).toBe(3);
		expect(countTwo()).toBe(1);
	});
});
