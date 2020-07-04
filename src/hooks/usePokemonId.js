import { useState, useEffect } from 'react';
import getPokemonById from 'services/getPokemonById';


export default function usePokemonById({ id } = {}) {

    const [isLoading, setLoading] = useState(false);
    const [isError, setError] = useState(false);
    const [pokemon, setPokemon] = useState();
    const [idd, setId] = useState();

    useEffect(() => {
        
        if (!id && !idd) return;
        const fetchData = async () => {
            try {
                setError(false)
                setLoading(true)
                let resp = await getPokemonById({ id: idd });
                setPokemon(resp);
                setLoading(false)
            } catch (err) {
                setError(true)
                setLoading(false)
                console.log('Error getting the pokemon by ID', err)
            }
        }
        fetchData();
    }, [idd, id])

    return { isLoading, isError, pokemon, setId }
}