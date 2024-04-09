import React from "react"
import Banner from "../components/Banner.jsx"
import endpoints from "../services/movieService.js"
import MovieRow from "../components/MovieRow.jsx"

const Home = () => {
	return (
		<>
			<Banner />
			<MovieRow title="upcoming" url={endpoints.upcoming} />
			<MovieRow title="top rated" url={endpoints.topRated} />
			<MovieRow title="popular" url={endpoints.popular} />
		</>
	)
}

export default Home