import React, {useState, useEffect} from "react"
import axios from "axios"
import MovieItem from "./MovieItem.jsx"


const MovieRow = ({title, url}) => {
	const [movies, setMovies] = useState([])
	useEffect(() => {
		// const response = await axios.get(url)
		// setMovies(response.data.results)
		axios.get(url).then(response => setMovies(response.data.results))
	}, [url])
	return (
		<>
		<h2 className="font-nsans-bold md:text-xl p-4 capitalize">{title}</h2>
		<div className="relative flex items-center">
			<div id={`slider`}
				className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide">
				{	
					movies.map(movie => 
						<MovieItem key={movie.id} movie={movie} />
				)}
			</div>
		</div>
		</>
	)
}

export default MovieRow