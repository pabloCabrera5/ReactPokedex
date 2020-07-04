import { useState, useEffect } from 'react';
import getPokemonByName from 'services/getPokemonByName';


export default function usePokemonByName({ name } = {}) {

    const [isLoading, setLoading] = useState(false);
    const [isError, setError] = useState(false);
    const [pokemon, setPokemon] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setError(false)
                setLoading(true)
                let resp = await getPokemonByName({ name });
                setPokemon(resp);
                setLoading(false)
            } catch (err) {
                setError(true);
                setLoading(false);
                console.log('Error getting the pokemon by ID', err);
            }
        }
        fetchData();
    }, [name])

    return {isLoading, isError, pokemon}
}