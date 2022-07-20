import { binarioDecimal, decimalBinario } from '../number_systems/converter';

describe('binary to decimal', () => {
	it('should return 2', () => {
		expect(binarioDecimal('10')).toBe(2);
	});
	it('should return 7', () => {
		expect(binarioDecimal('111')).toBe(7);
	});
});

describe('decimal to binary', () => {
	it('should return "100"', () => {
		expect(decimalBinario(4)).toBe('100');
	});
	it('should return "111"', () => {
		expect(decimalBinario(7)).toBe('111');
	});
});
