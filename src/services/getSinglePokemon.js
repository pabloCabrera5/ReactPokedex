import { API_URI } from './config';


export default async function getSinglePokemon({ key = 1 } = {}) {
    try {
        let resp = await fetch(`${API_URI}/pokemon/${key}`);
        resp = await resp.json();
        return resp;
    } catch (err) {
        console.log(' Error getting pokemon by ID ', err)
    }
}