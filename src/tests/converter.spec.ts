import { binarioDecimal, decimalBinario } from '../number_systems/converter';

describe('binary to decimal', (): any => {
	const [resultOne, resultTwo] = [2, 7];
	const [actualOne, actualTwo] = ['10', '111'];
	it('should return 2', (): any => {
		expect(binarioDecimal(actualOne)).toBe(resultOne);
	});
	it('should return 7', (): any => {
		expect(binarioDecimal(actualTwo)).toBe(resultTwo);
	});
});

describe('decimal to binary', (): any => {
	const [actualOne, actualTwo] = [4, 7];
	const [resultOne, resultTwo] = ['100', '111'];
	it('should return "100"', (): any => {
		expect(decimalBinario(actualOne)).toBe(resultOne);
	});
	it('should return "111"', (): any => {
		expect(decimalBinario(actualTwo)).toBe(resultTwo);
	});
});
