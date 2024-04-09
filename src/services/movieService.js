const key = import.meta.env.VITE_TMDB_KEY
const baseUrl = "https://api.themoviedb.org/3"

const endpoints = {
	popular: `${baseUrl}/movie/popular?api_key=${key}`,
	topRated: `${baseUrl}/movie/top_rated?api_key=${key}`,
	upcoming: `${baseUrl}/movie/upcoming?api_key=${key}`,
	comedy: `${baseUrl}/movie/comedy?api_key=${key}&language=en-US&query=comedy&page=1`,
	trending: `${baseUrl}/movie/trending?api_key=${key}&language=en-US&page=2`

}
export function createImgUrl(size, filename){
	return `https://image.tmdb.org/t/p/${size}/${filename}`
}


export default endpoints