import {
	useContext,
	createContext,
	useReducer,
	useEffect,
	useState,
} from "react";
import axios from "axios";
import GetFilters from "../Components/Products/ProductComponents/GetFilters.js";
import {
	getSortBy,
	getRange,
	getRating,
	filterCategory,
	Compose,
} from "../Components/Products/ProductComponents/FilterCompose.js";

const FilterContext = createContext(null);

const FilterProvider = ({ children }) => {
	const [products, setProducts] = useState([]);
	const [state, dispatch] = useReducer(GetFilters, {
		sortBy: "",
		isAction: false,
		isClassic: false,
		isFiction: false,
		isRomance: false,
		isShortStory: false,
		priceRange: 5000,
		rateBy: "",
	});

	useEffect(() => {
		(async () => {
			try {
				const response = await axios.get("/api/products");
				setProducts(response.data.products);
			} catch (error) {
				console.log("error occured..");
			}
		})();
	}, []);

	const filteredProducts = Compose(
		state,
		filterCategory,
		getSortBy,
		getRange,
		getRating
	)([...products]);

	return (
		<FilterContext.Provider value={{ state, filteredProducts, dispatch }}>
			{children}
		</FilterContext.Provider>
	);
};
const useFilter = () => useContext(FilterContext);
export { FilterProvider, useFilter };
