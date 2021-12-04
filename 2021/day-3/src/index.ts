import { readFile } from "fs/promises";

(async () => {
	const input = await readFile("./data/input.txt", "utf-8");
	const splitInput = input.split("\n");

	// Part One:
	// bitList is an array of array two elements being 0 and 1 respectively
	let bitList = [
		// 0, 1
		[0, 0],
		[0, 0],
		[0, 0],
		[0, 0],
		[0, 0],
		[0, 0],
		[0, 0],
		[0, 0],
		[0, 0],
		[0, 0],
		[0, 0],
		[0, 0],
	];

	for (let i = 0; i < splitInput.length; i++) {
		const bits = splitInput[i];

		for (let b = 0; b < bits.length; b++) {
			const bit = parseInt(bits[b]);
			bitList[b][bit] += 1;
		}
	}

	// Each element is going to be either 0 or 1 depending on what was the most common in that line
	let mostForGammaRate: number[] = [];
	let leastForEpsilonRate: number[] = [];

	for (let i = 0; i < bitList.length; i++) {
		const [zero_, one_] = bitList[i];

		if (zero_ > one_) {
			mostForGammaRate[i] = 0;
		} else {
			mostForGammaRate[i] = 1;
		}
	}

	for (let i = 0; i < bitList.length; i++) {
		const [zero_, one_] = bitList[i];

		if (zero_ > one_) {
			leastForEpsilonRate[i] = 1;
		} else {
			leastForEpsilonRate[i] = 0;
		}
	}

	let gammaRate = parseInt(mostForGammaRate.join(""), 2);
	let epsilonRate = parseInt(leastForEpsilonRate.join(""), 2);

	console.log(`Part One: ${gammaRate * epsilonRate}`);
})();
