import React, {useState, useEffect} from "react"
import {createImgUrl} from "../services/movieService.js"
import {FaHeart, FaRegHeart} from "react-icons/fa"

const MovieItem = ({movie}) => {

	const [like, setLike] = useState(false)

	return <div className="relative w-[160px] sm:w-[200px]
		md:w-[240px] lg:w-[280px] inline-block rounded-ig overflow-hidden
		cursor-pointer m-2">
		<img src={createImgUrl('w500', movie.backdrop_path)} alt={movie.title} />

		<div className="absolute top-0 w-full h-full bg-black/80 opacity-0 hover:opacity-100">
			<p className="whitespace-normal text-xs md:text-sm flex justify-center items-center
				h-full font-nsans-bold">
				{movie.title}
			</p>
			<p>
				{like ? <FaHeart size={20} className="absolute top-2 left-2 text-gray-300" /> : <FaRegHeart size={20} className="absolute top-2 left-2 text-gray-300" />}
			</p>
		</div>

	</div>
}

export default MovieItem