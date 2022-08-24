const capitalize = (str, onlyFirst = true) => {
	return onlyFirst
		? str.charAt(0).toUpperCase() + str.slice(1)
		: str.toUpperCase();
};

export default capitalize;
