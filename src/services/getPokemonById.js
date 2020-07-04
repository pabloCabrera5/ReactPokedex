import { API_URI } from './config';


export default async function getPokemonById({ id = 1 } = {}) {
    try {
        let resp = await fetch(`${API_URI}/pokemon/${id}`);
        resp = await resp.json();
        return resp;
    } catch (err) {
        console.log(' Error getting pokemon by ID ', err)
    }
}