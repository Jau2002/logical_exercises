import { binarioDecimal, decimalBinario } from '../number_systems/converter';

xdescribe('binary to decimal', () => {
	const [resultOne, resultTwo] = [2, 7];
	const [actualOne, actualTwo] = ['10', '111'];
	it('should return 2', () => {
		expect(binarioDecimal(actualOne)).toBe(resultOne);
	});
	it('should return 7', () => {
		expect(binarioDecimal(actualTwo)).toBe(resultTwo);
	});
});

xdescribe('decimal to binary', () => {
	const [actualOne, actualTwo] = [4, 7];
	const [resultOne, resultTwo] = ['100', '111'];
	it('should return "100"', () => {
		expect(decimalBinario(actualOne)).toBe(resultOne);
	});
	it('should return "111"', () => {
		expect(decimalBinario(actualTwo)).toBe(resultTwo);
	});
});
