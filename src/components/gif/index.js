import React from "react";

const Gif = ({ url, title }) => {
	return (
		<>
			<img src={url} alt={title} />
			<p>{title}</p>
		</>
	);
};

export default Gif;
