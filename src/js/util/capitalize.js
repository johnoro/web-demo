const capitalize = (str, onlyFirst = true) =>
	onlyFirst ? str.charAt(0).toUpperCase() + str.slice(1) : str.toUpperCase();

export default capitalize;
