import React from "react";

import Gif from "../../components/gif";
import dataGif from "../../data/dataGif";

const Home = () => {
	return (
		<div>
			<div className="gifs__content">
				{dataGif.map((data) => (
					<React.Fragment key={data.id}>
						{data.rating === "g" && (
							<Gif url={data.url} title={data.title} />
						)}
					</React.Fragment>
				))}
			</div>
		</div>
	);
};

export default Home;
