const GetFilters = (state, action) => {
	switch (action.type) {
		case "SORT":
			return {
				...state,
				sortBy: action.payload,
			};

		case "ACTION":
			return {
				...state,
				isAction: action.payload,
			};

		case "CLASSIC":
			return {
				...state,
				isClassic: action.payload,
			};
		case "FICTION":
			return {
				...state,
				isFiction: action.payload,
			};
		case "ROMANCE":
			return {
				...state,
				isRomance: action.payload,
			};
		case "SHORT-STORY":
			return {
				...state,
				isShortStory: action.payload,
			};
		case "RANGE":
			return {
				...state,
				priceRange: action.payload,
			};
		case "RATING":
			return {
				...state,
				rateBy: action.payload,
			};

		case "CLEAR-FILTER":
			return {
				...state,
				sortBy: "",
				isAction: false,
				isClassic: false,
				isFiction: false,
				isRomance: false,
				isShortStory: false,
				priceRange: 5000,
				rateBy: "",
			};

		default:
			return state;
	}
};

export default GetFilters;
