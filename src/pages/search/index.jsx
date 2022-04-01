import React, { useEffect, useState } from "react";
import Gif from "../../components/gif";
import SearchBar from "../../components/searchbar";

const Search = () => {
	const [gifs, setGifs] = useState([]);
	const [text, setText] = useState("");

	// useEffect(() => {}, []);

	const handleInput = (e) => {
		setText(e.target.value);
	};

	const getGifs = async (e) => {
		e.preventDefault();

		const gifsData = await fetch(
			`http://api.giphy.com/v1/gifs/search?q=${text}&api_key=${process.env.REACT_APP_GIPHY_KEY}&limit=12`
		).then((response) => response.json());
		setGifs(gifsData.data);
	};
	return (
		<>
			{/* <form onSubmit={getGifs}>
				<input onChange={handleInput} />
				<button type="submit">Search</button>
			</form> */}

			<SearchBar getGifs={getGifs} handleInput={handleInput} />

			{gifs !== [] &&
				gifs.map((g) => (
					<Gif key={g.id} url={g.images.fixed_width.url} title={g.title} />
				))}
		</>
	);
};

export default Search;
