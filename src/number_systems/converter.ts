function binarioDecimal(str: string): number {
	let decimal: number = 0;
	const bits: number = Number(str.length);
	for (let i: number = 0; i < str.length; i++) {
		const digits: number = Number(str[i]);
		decimal += digits * 2 ** (bits - 1 - i);
	}
	return decimal;
}

function decimalBinario(num: number): string {
	let binary: string = '';
	while (num >= 1) {
		binary = (num % 2) + binary;
		num = Math.floor(num / 2);
	}
	return binary;
}

export { binarioDecimal, decimalBinario };
