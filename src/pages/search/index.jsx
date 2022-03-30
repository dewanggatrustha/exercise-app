import React, { useEffect, useState } from "react";
import Gif from "../../components/gif";

const Search = () => {
	const [gifs, setGifs] = useState([]);
	const [text, setText] = useState("");

	useEffect(() => {}, []);

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
			<form onSubmit={(e) => getGifs(e)}>
				<input onChange={(e) => handleInput(e)} />
				<button type="submit">Search</button>
			</form>

			{gifs !== [] &&
				gifs.map((g) => (
					<Gif key={g.id} url={g.images.fixed_width.url} title={g.title} />
				))}
		</>
	);
};

export { Search };
