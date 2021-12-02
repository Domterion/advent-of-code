import { readFile } from "fs/promises";

(async () => {
	const input = await readFile("./data/input.txt", "utf-8");
	const splitInput: number[] = input.split("\n").map((value) => {
		return parseInt(value);
	});

	// Part One:
	let lastNumber: number | null = null;
	let count = 0;

	splitInput.forEach((value) => {
		if (lastNumber != null) {
			if (value > lastNumber) {
				count++;
			}
		}
		lastNumber = value;
	});

	console.log(`Part One: ${count}`);

	// Part Two:
	let lastNumber_: number | null = null;
	let count_ = 0;

	for(let i = 0; i < splitInput.length - 2; i++) {
		const currentNumber = splitInput[i] + splitInput[i + 1] + splitInput[i + 2];

		if (lastNumber_ != null) {
			if (currentNumber > lastNumber_) {
				count_++;
			}
		}

		lastNumber_ = currentNumber;
		continue;
	}

	console.log(`Part Two: ${count_}`);

})();
