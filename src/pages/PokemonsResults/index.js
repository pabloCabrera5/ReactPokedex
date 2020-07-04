
import React, { useState, useEffect, useRef, useCallback } from 'react';
import Pokemons from 'components/pokemons/pokemons';
import getPokemons from '../../services/getPokemons';
import './styles.css'

import Spinner from 'components/Spinner';
import useNearScreen from 'hooks/useNearScreen';
import usePokemons from 'hooks/usePokemons';
import throttle from "just-throttle";
import SearchForm from 'components/searchFrom/searchForm';
import { Link, useHistory } from 'react-router-dom';
import PokemonsTypes from 'components/pokemonsTypes/pokemonsTypes';
import { BUTTONS_TYPES_POKEMONS, LEGENDARIESID} from 'services/config'
import getPokemonById from 'services/getPokemonById';
import usePokemonById from 'hooks/usePokemonId';



export default function PokemonsResults() {

    const [isLoadingNextPage, setLoadingNextPage] = useState(false);

    const { isLoading, isLoadingNextPage: nextPage, isError, pokemons, setPokemons, setPage, setOffset, setType } = usePokemons();
    const { pokemon, setId } = usePokemonById();
    
    const page = useRef(0);
    const observator = useRef();
    
    const { isNearScreen } = useNearScreen({ externalRef: observator })

    // usecallback to no declare the function in each render, and throttle to control the number of call to the api
    const throttleInfinityScroll = useCallback(throttle((page) =>
        // its better if we change the state of the usePokemon hook so he will fire his effect and send us back the new pokemons
        setPage(prevPage => prevPage + 1), //getPokemons({ page }).then(pokes => setPokemons(pokemons.concat(pokes))),
        1000,
        true
    ), [])

    // effect for the infiny scroll, when we are near the end of the page we request for more pokemons
    useEffect(() => {
        if (isNearScreen) {

            //setLoadingNextPage(true); // now do it in the usepokemon hook
            page.current += 1; // no more needed
            throttleInfinityScroll(page.current)//.then(setLoadingNextPage(false))
        }
    }, [isNearScreen, throttleInfinityScroll])


    const history = useHistory();

    // we use useCallback here to not declare at each render this function who's passed to the form component
    const handleSubmit = useCallback(({ keyword }) => {
        history.push(`/detail/${keyword}`)
    }, [history]);

    //usecallback for avoid unnecesary renders when we load more pokemons ( scrolling down )
    // and not redeclare this function who will incur or renders of the childs
    const goTo = useCallback(async (value) => {
        if (value === 'mega') {
            
            setType('mega')
            setPage(0)
            setOffset(807)
        }
        if (value === 'alola') {
            
            setType('alola')
            setPage(0)
            setOffset(897)
        }
        if (value === 'pokemons') {
            
            setType('pokemons')
            setPage(0)
            setOffset(0)
        }
        if (value === 'legends') {
            setPokemons([]);
            setType('legends')     
            for(let legendary of LEGENDARIESID) {
                await setId(legendary)
            }
        }
        //getPokemons({ offset: 808 }).then(pokes => setPokemons((pokes)))
    }, [setType, setPage, setOffset, setPokemons])

    // for the legends we reset the pokemons so we need add them while they are requests
    // they are call by id , one by one so we need to concatenate
    useEffect(() => {
        if(!pokemon) return;
        if(pokemon) setPokemons(prevPokes => prevPokes.concat(pokemon))
    },[pokemon, setPokemons])



    if (isLoading) return <div className='pokemonResults' ><Spinner /> </div>
    if (isError) return null;

    return (
        <div className='pokemonsResults'>
            <SearchForm onSubmit={handleSubmit} />

            <div className='pokemons' >
                <div className='types'>
                    <div className='buttonGroup'>

                        <PokemonsTypes buttons={BUTTONS_TYPES_POKEMONS} onClick={goTo} />
                        <button id='btnlegendaries'><Link to='/legendaries'>Legendaries</Link></button>

                    </div>
                </div>
                <Pokemons pokemons={pokemons}></Pokemons>
            </div>
            {nextPage ? <Spinner /> : null}

            {/*<button >Next Page</button>*/}
            <div id='observator' ref={observator}>
            </div>
        </div>
    )
}
