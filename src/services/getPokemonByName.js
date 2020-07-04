import { API_URI } from './config';


export default async function getPokemonByName({ name = 'mew' } = {}) {
    try {
        let resp = await fetch(`${API_URI}/pokemon/${name}`);
        if(!resp.ok) throw new Error('Pokemon by name not found')
        resp = await resp.json();
        return resp;
    } catch (err) {
        console.log(' Error getting pokemon by Name', err)
        throw new Error(err)
    }
}