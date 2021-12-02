import { readFile } from "fs/promises";

(async () => {
	const input = await readFile("./data/input.txt", "utf-8");
	const splitInput = input.split("\n").map((value) => {
		const line = value.split(" ");

		/*
		Commands: 

		Part One:
		forward X increases the horizontal position by X units.
		down X increases the depth by X units.
		up X decreases the depth by X units.

		Part Two:
		down X increases your aim by X units.
		up X decreases your aim by X units.
		forward X does two things:
		It increases your horizontal position by X units.
		It increases your depth by your aim multiplied by X.
		*/
		const command = line[0];
		const amount = parseInt(line[1]);

		return [command, amount];
	});

	// Part One:
	const pos = {
		horizontalPosition: 0,
		depth: 0,
	};

	for (let i = 0; i < splitInput.length; i++) {
		const command = splitInput[i][0];
		const amount = splitInput[i][1] as number;

		switch (command) {
			case "forward":
				pos.horizontalPosition += amount;
				continue;
			case "down":
				pos.depth += amount;
				continue;
			case "up":
				pos.depth -= amount;
				continue;
		}
	}

	console.log(`Part One: ${pos.horizontalPosition * pos.depth}`);

	// Part Two:
	const pos_ = {
		horizontalPosition: 0,
		depth: 0,
		aim: 0,
	};

	for (let i = 0; i < splitInput.length; i++) {
		const command = splitInput[i][0];
		const amount = splitInput[i][1] as number;

		switch (command) {
			case "forward":
				pos_.horizontalPosition += amount;
				pos_.depth += pos_.aim * amount;
				continue;
			case "down":
				pos_.aim += amount;
				continue;
			case "up":
				pos_.aim -= amount;
				continue;
		}
	}

	console.log(`Part Two: ${pos_.horizontalPosition * pos_.depth}`);
})();
