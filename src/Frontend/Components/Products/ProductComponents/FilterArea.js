import React from "react";
import { useFilter } from "../../../Context/FilterContext.js";

const FilterArea = () => {
	const { state, dispatch } = useFilter();

	return (
		<div className="drawer ">
			<div className="filter-area row-flex-wrap">
				<h1 className="std-font-two hd-m-font prime-color ">Filters</h1>

				<button
					className="link prime-link1 login-color"
					onClick={() => {
						dispatch({ type: "CLEAR-FILTER" });
					}}
				>
					Clear
				</button>
			</div>

			<div className="column-flex-start drawer-elements margin-left-l">
				<span className="margin-1"></span>
				<h1 className=" std-font-two hd-m-font prime-color margin-bottom-m ">
					Sort By
				</h1>

				<label className="para-m-font margin-bottom-s">
					<input
						type="radio"
						name="SORT"
						value="LOW-TO-HIGH"
						checked={state.sortBy !== "LOW-TO-HIGH" ? false : true}
						onChange={e =>
							dispatch({ type: e.target.name, payload: e.target.value })
						}
					/>{" "}
					Price - Low to High
				</label>
				<label className="para-m-font margin-bottom-s">
					<input
						type="radio"
						name="SORT"
						value="HIGH-TO-LOW"
						checked={state.sortBy !== "HIGH-TO-LOW" ? false : true}
						onChange={e =>
							dispatch({ type: e.target.name, payload: e.target.value })
						}
					/>{" "}
					Price - High to Low
				</label>

				<span className="margin-1"></span>
				<h1 className=" std-font-two hd-m-font prime-color margin-bottom-m ">
					Category
				</h1>

				<label className="para-m-font margin-bottom-s">
					<input
						type="checkbox"
						name="ACTION"
						checked={state.isAction ? true : false}
						value="action"
						onChange={e => {
							dispatch({ type: "ACTION", payload: e.target.checked });
						}}
					/>{" "}
					Action and Adventure
				</label>

				<label className="para-m-font margin-bottom-s">
					<input
						type="checkbox"
						name="CLASSIC"
						checked={state.isClassic ? true : false}
						value="classic"
						onChange={e => {
							dispatch({ type: e.target.name, payload: e.target.checked });
						}}
					/>{" "}
					Classics
				</label>
				<label className="para-m-font margin-bottom-s">
					<input
						type="checkbox"
						name="FICTION"
						checked={state.isFiction ? true : false}
						value="fiction"
						onClick={e => {
							dispatch({ type: e.target.name, payload: e.target.checked });
						}}
					/>{" "}
					Literary Fiction
				</label>
				<label className="para-m-font margin-bottom-s">
					<input
						type="checkbox"
						name="ROMANCE"
						checked={state.isRomance ? true : false}
						value="romance"
						onClick={e => {
							dispatch({ type: e.target.name, payload: e.target.checked });
						}}
					/>{" "}
					Romance
				</label>
				<label className="para-m-font">
					<input
						type="checkbox"
						name="SHORT-STORY"
						checked={state.isShortStory ? true : false}
						value="short-story"
						onClick={e => {
							dispatch({ type: e.target.name, payload: e.target.checked });
						}}
					/>{" "}
					Short Stories
				</label>

				<span className="margin-1"></span>
				<h1 className=" std-font-two hd-m-font prime-color margin-bottom-m ">
					Price{" "}
				</h1>

				<input
					className="range"
					type="range"
					min={0}
					step={1000}
					max={5000}
					value={state.priceRange}
					list="milestones"
					onChange={e => dispatch({ type: "RANGE", payload: e.target.value })}
				/>
				<datalist id="milestones">
					<option value="0" label="0">
						0
					</option>
					<option value="1000" label="1000"></option>
					<option value="2000" label="2000"></option>
					<option value="3000" label="3000"></option>
					<option value="4000" label="4000"></option>
					<option value="5000" label="5000"></option>
				</datalist>
				<p className="para-m-font margin-bottom-s">{state.priceRange}</p>
				<span className="margin-1"></span>
				<h1 className=" std-font-two hd-m-font prime-color margin-bottom-m ">
					Ratings{" "}
				</h1>
				<label className="para-m-font margin-bottom-s">
					<input
						type="radio"
						name="RATING"
						value="4-STARS"
						checked={state.rateBy !== "4-STARS" ? false : true}
						onChange={e =>
							dispatch({ type: e.target.name, payload: e.target.value })
						}
					/>{" "}
					4 Stars & above
				</label>
				<label className="para-m-font margin-bottom-s">
					<input
						type="radio"
						name="RATING"
						value="3-STARS"
						checked={state.rateBy !== "3-STARS" ? false : true}
						onChange={e =>
							dispatch({ type: e.target.name, payload: e.target.value })
						}
					/>{" "}
					3 Stars & above
				</label>
				<label className="para-m-font margin-bottom-s">
					<input
						type="radio"
						name="RATING"
						value="2-STARS"
						checked={state.rateBy !== "2-STARS" ? false : true}
						onChange={e =>
							dispatch({ type: e.target.name, payload: e.target.value })
						}
					/>{" "}
					2 Stars & above
				</label>
				<label className="para-m-font margin-bottom-s">
					<input
						type="radio"
						name="RATING"
						value="1-STAR"
						checked={state.rateBy !== "1-STAR" ? false : true}
						onChange={e =>
							dispatch({ type: e.target.name, payload: e.target.value })
						}
					/>{" "}
					1 Star & above
				</label>
				<span className="margin-1"></span>
			</div>
		</div>
	);
};

export default FilterArea;
