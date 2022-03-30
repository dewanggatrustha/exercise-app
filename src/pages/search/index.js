import React, { Component } from "react";
import Gif from "../../components/gif";

class Search extends Component {
	state = {
		gifs: [],
		text: "",
	};

	handleInput = (e) => {
		this.setState({ text: e.target.value });
	};

	getGifs = async (e) => {
		e.preventDefault();

		const gifs = await fetch(
			`http://api.giphy.com/v1/gifs/search?q=${this.state.text}&api_key=${process.env.REACT_APP_GIPHY_KEY}&limit=12`
		).then((response) => response.json());
		this.setState({ gifs: gifs.data });
		console.log(gifs);
	};
	render() {
		return (
			<div>
				<form onSubmit={this.getGifs}>
					<input onChange={this.handleInput} />
					<button type="submit">Search</button>
				</form>
				{this.state.gifs.map((g) => (
					<Gif key={g.id} url={g.images.fixed_width.url} title={g.title} />
				))}
			</div>
		);
	}
}

export { Search };
