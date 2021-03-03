import { default as axios } from 'axios'

export async function getMoviesFrom(query) {
    let data = (await axios.get(`http://www.omdbapi.com/?s=${query}&apikey=48d1aa&type=movie&page=1`)).data
    return data.Response === "True" ? data.Search : []
}