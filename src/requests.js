const APIKEY = "734fcf1f523050276fb047ab6cc62e43"

export const requests = {
    trending: `/trending/all/week?api_key=${APIKEY}`,
    netflixOriginals: `/discover/tv?api_key=${APIKEY}&with_networks=213`,
    topRated: `/movie/top_rated?api_key=${APIKEY}&language=es-AR`,
    action: `/discover/movie?api_key=${APIKEY}&with_genres=28`,
    comedy: `/discover/movie?api_key=${APIKEY}&with_genres=35`,
    horror: `/discover/movie?api_key=${APIKEY}&with_genres=27`,
    romance: `/discover/movie?api_key=${APIKEY}&with_genres=10749`,
    documentaries: `/discover/movie?api_key=${APIKEY}&with_genres=99`,
}
