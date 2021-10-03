export const evalValidation = (data) => {
	const danger = [
		"manzana",
		"coliflor",
		"bombilla",
		"derecha",
		"izquierda",
		"rojo",
		"azul",
	];
	let info = "";
	let error = false;
	if (data.nickname.trim() === "" || data.message.trim() === "") {
		error = true;
		info = "Los datos no pueden estar vacios";
	}
	if (data.nickname.length < 6) {
		error = true;
		info = "El nickname minimo debe tener 6 letras";
	}
	const stringMessage = data.message.toLowerCase();
	danger.map((value) => {
		if (stringMessage.search(value) >= 0) {
			error = true;
			info = `No puedes utiliza la palabra ${value}`;
		}
		return stringMessage.search(value);
	});

	return {
		error,
		info,
	};
};
