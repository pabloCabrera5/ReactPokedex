import { useState, useEffect } from 'react';
import getPokemonById from 'services/getPokemonById';
import usePokemons from './usePokemons';
import getSinglePokemon from 'services/getSinglePokemon';


export default function useSinglePokemon({ key } = {}) {

    const [isLoading, setLoading] = useState(false);
    const [isError, setError] = useState(false);
    const { pokemons } = usePokemons();

    const pokemonCached = pokemons.find(poke => poke.id === key || poke.name === key);
    const [pokemon, setPokemon] = useState(pokemonCached)
    const [keyy, setKey] = useState();

    useEffect(() => {
        if (!pokemon) {
            const fetchData = async () => {
                try {
                    setError(false)
                    setLoading(true)
                    let resp = await getSinglePokemon({ key: keyy });
                    setPokemon(resp);
                    setLoading(false)
                } catch (err) {
                    setError(true)
                    setLoading(false)
                    console.log('Error getting the pokemon by ID', err)
                }
            }
            fetchData();
        }
    }, [key]) //pokemon ?

    return { isLoading, isError, pokemon, setKey }
}