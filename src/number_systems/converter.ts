function binarioDecimal(str: any): number {
	let decimal: number = 0;
	for (let i: number = 0; i < str.length; i++) {
		decimal += str[i] * 2 ** (str.length - 1 - i);
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
