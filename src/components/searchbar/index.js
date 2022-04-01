import React from "react";

const SearchBar = ({ getGifs, handleInput }) => {
	return (
		<div>
			<form onSubmit={getGifs}>
				<input onChange={handleInput} />
				<button type="submit">Search</button>
			</form>
		</div>
	);
};

export default SearchBar;
