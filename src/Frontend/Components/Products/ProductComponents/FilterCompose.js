const Compose =
	(state, ...functions) =>
	data => {
		return functions.reduce((acc, curr) => curr(state, acc), data);
	};

const getSortBy = (state, data) => {
	switch (state.sortBy) {
		case "LOW-TO-HIGH":
			return data.sort((a, b) => Number(a.price) - Number(b.price));

		case "HIGH-TO-LOW":
			return data.sort((a, b) => Number(b.price) - Number(a.price));

		default:
			return data;
	}
};

const filterCategory = (state, data) => {
	let filterArray = [];
	if (state.isClassic) {
		let classicFilter = data.filter(item => item.categoryName === "classic");
		filterArray = [...filterArray, ...classicFilter];
	}
	if (state.isAction) {
		let actionFilter = data.filter(item => item.categoryName === "action");
		filterArray = [...filterArray, ...actionFilter];
	}
	if (state.isFiction) {
		let fictionFilter = data.filter(item => item.categoryName === "fiction");
		filterArray = [...filterArray, ...fictionFilter];
	}
	if (state.isRomance) {
		let romanceFilter = data.filter(item => item.categoryName === "romance");
		filterArray = [...filterArray, ...romanceFilter];
	}
	if (state.isShortStory) {
		let shortStoryFilter = data.filter(
			item => item.categoryName === "short-story"
		);
		filterArray = [...filterArray, ...shortStoryFilter];
	}

	return filterArray.length ? filterArray : data;
};

const getRange = (state, data) =>
	data.filter(item => Number(item.price) <= state.priceRange);

const getRating = (state, data) => {
	switch (state.rateBy) {
		case "1-STAR":
			return data.filter(item => Number(item.rating) >= 1);
		case "2-STARS":
			return data.filter(item => Number(item.rating) >= 2);
		case "3-STARS":
			return data.filter(item => Number(item.rating) >= 3);
		case "4-STARS":
			return data.filter(item => Number(item.rating) >= 4);
		default:
			return data;
	}
};

export { getSortBy, getRange, getRating, Compose, filterCategory };
