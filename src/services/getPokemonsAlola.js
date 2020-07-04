import { API_URI } from './config';
// https://stackoverflow.com/questions/30823653/is-node-js-native-promise-all-processing-in-parallel-or-sequentially

export default async function getPokemonsAlola({ limit = 20, offset = 0, page = 0 } = {}) {
    try {
        // set the data in the session storage to avoid a call if we already have the data
        
        let sessionUrl = sessionStorage.getItem('nextUrl');
        let URL = sessionUrl || `${API_URI}/pokemon?limit=${limit}&offset=${limit * page}`;
        URL = `${API_URI}/pokemon?limit=${limit}&offset=${(offset + (limit * page)) || (limit * page)}`
        let resp = await fetch(URL);
        resp = await resp.json();
        
        sessionStorage.setItem('nextUrl', resp.next)
        let pokemons = []
        // we only have the name and a url of the specific pokemon, so we have to made a call for every pokemon
        let pokemonsSingleCall = resp.results.map(async poke => {
            let resp = await fetch(poke.url);
            resp = await resp.json();
            let { base_experience, height, id, name, weight, abilities, types, stats, forms } = resp;
            // in the version of alola, the images are not in the sprites of the first call so i need to go get them in another url
            let nextSprites = forms[0].url;
            resp = await fetch(nextSprites);
            resp = await resp.json();
            let {sprites} = resp
            let obj = { base_experience, height, id, name, weight, abilities, sprites, types, stats }
            return obj
            //pokemons.push(obj) 
        })
        // this approach let us do the requests in pararell 
        pokemons = await Promise.all(pokemonsSingleCall);
        
        // in this way the request are made one behind the other and we dont care and dont need to have an order
        /*for (let poke of resp.results) {
            let resp = await fetch(poke.url);
            resp = await resp.json()
            let { base_experience, height, id, name, weight, abilities, sprites, types, stats } = resp;
            let obj = { base_experience, height, id, name, weight, abilities, sprites, types, stats }
            pokemons.push(obj)
        }*/

        return pokemons;
    } catch (err) {
        console.log(err, ' Error getting pokemons API')
        throw new Error(err, ' Error calling API')
    }
}
