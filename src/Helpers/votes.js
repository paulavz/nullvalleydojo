export const getVoteCount = (obj, string) => {
	return obj.map((value) => value.vote).filter((val) => val !== string)
		.length;
};

export const getTotal = (pos, neg) => {
	const countPos = pos * 2;
	return countPos - neg;
};

export const calculateWinner = (namea, a, nameb, b) => {
	if ((a < 0 && b < 0) || a === b) {
		return {
			result: 0,
			message: "Empate",
		};
	} else if (a > b) {
		return {
			result: 1,
			message: `Ha Ganado ${namea} con un total de ${a} puntos`,
		};
	} else {
		return {
			result: 2,
			message: `Ha Ganado ${nameb} con un total de ${b} puntos`,
		};
	}
};
