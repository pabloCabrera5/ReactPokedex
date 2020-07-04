import { useEffect, useState } from 'react';
import getPokemons from 'services/getPokemons';
import getPokemonsAlola from 'services/getPokemonsAlola';

export default function usePokemons({ limit = 20, offset = 0, page = 0 } = {}) {

    const [isLoading, setLoading] = useState(false);
    const [isLoadingNextPage, setLoadingNextPage ] = useState(false);
    const [isError, setError] = useState(false);
    
    const [offsett, setOffset] = useState()
    const [pagee, setPage] = useState(0)
    const [pokemons, setPokemons] = useState([]);

    const [type, setType] = useState('pokemons')

    // for the first call , or when we want to make a new first call for the alola, mega, etc
    useEffect(() => {
        if(type === 'mega') limit = 30;
        const fetchData = async () => {
            try {
                setError(false)
                setLoading(true)
                let pokes;
                if(type === 'alola'){
                    pokes = await getPokemonsAlola({ limit, page: pagee, offset: offsett })
                } else {
                    pokes = await getPokemons({ limit, page: pagee, offset: offsett })
                }
                setPokemons((pokes));
                setLoading(false)
            } catch (err) {
                setError(true);
                setLoading(false)
                console.log('Error getting all the pokemons', err)
            }
        }
        fetchData();
        // atthe beginning we store the next page to call in the sessionstorage as the api return us the next api call with offset and limit
        // so this is to delete the storage when refresh the page to start the offset from 0
        window.addEventListener('beforeunload', () => sessionStorage.clear());
        return () => {
            sessionStorage.clear();
        }
    }, [setPokemons, offsett]) // maybe should add limit, offset, page


    // this effect is for when we change the page ( we want to charge more pokemons)
    // we expose the method setPage outside so they can change the innervalue of the page and then this effect will be triggered
    useEffect(() => {
        // for not to fire the first initialization 
        if(pagee === 0 || type === 'legends') return 
        
        // for the pokemons mega, dont want to show more than only the mega pokemons
        if(type === 'mega') limit = 30;
        if(type === 'mega' && (offsett + (limit * pagee)) > 896) {
            return
        }
        
        const fetchDataByPage = async () => {
            try {
                setError(false)
                setLoadingNextPage(true)
                let pokes;
                // alola pokemons need a special treat
                if(type === 'alola'){
                    pokes = await getPokemonsAlola({ limit, page: pagee, offset: offsett })
                } else {
                    pokes = await getPokemons({ limit, page: pagee, offset: offsett })
                }
                setPokemons(prevPokemons => prevPokemons.concat(pokes));
                setLoadingNextPage(false)
            } catch (err) {
                setError(true);
                setLoadingNextPage(false)
                console.log('Error getting all the pokemons', err)
            }
        }
        fetchDataByPage();
    }, [pagee])

    /*useEffect(() => {
        console.log(pagee, ' OFFSET: USEPOKEMONS')
        // for not to fire the first initialization 
        if(offset === 0) return 
        const fetchDataByPage = async () => {
            try {
                setError(false)
                setLoadingNextPage(true)
                let resp = await getPokemons({ page: pagee })
                setPokemons(prevPokemons => prevPokemons.concat(resp));
                setLoadingNextPage(false)
            } catch (err) {
                setError(true);
                setLoadingNextPage(false)
                console.log('Error getting all the pokemons', err)
            }
        }
        fetchDataByPage();
    }, [offset])*/

    return { isLoading, isLoadingNextPage, isError, pokemons, setPokemons, setPage, setOffset, setType }
}