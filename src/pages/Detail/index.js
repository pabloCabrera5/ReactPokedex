import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import getPokemonById from 'services/getPokemonById';
import Pokemon from 'components/pokemon/pokemon';
import Spinner from 'components/Spinner';
import getPokemonByName from 'services/getPokemonByName';
import './styles.css'
import PokemonDetail from 'components/pokemonDetail/pokemonDetail';


export default function Detail() {
    // we get the details of the pokemon previously store in the storage if any to get the images from the alola pokes (are not retunr in a normal api call like the other pokes)
    const pokeDetailCached = JSON.parse(localStorage.getItem('pokeDetail')) || '';
    const [pokemon, setPokemon] = useState();

    // the id or name we receive in the url
    const { poke } = useParams();
    const [error, setError] = useState(false)

    useEffect(() => {

        if (typeof (poke) != 'number') {
            getPokemonByName({ name: poke }).then(poke => {
                if (pokeDetailCached) poke.sprites = pokeDetailCached['sprites'];
                setPokemon(poke)
            }).catch(e => setError(true))
        }
        else {
            getPokemonById({ id: poke }).then(poke => {
                poke.sprites = pokeDetailCached['sprites'];
                setPokemon(poke)
            })
        }

        return () => localStorage.removeItem('pokeDetail')
    }, [poke])

    if(error) return <h2>Sorry, pokemon not found</h2>

    // we receive the id or name of the pokemon to show
    return (
        <div className='detail'>
            {pokemon ?
                <PokemonDetail pokemon={pokemon} />
                : null}

            {pokemon ?
                <Pokemon id={pokemon.id} name={pokemon.name} sprites={pokemon.sprites} types={pokemon.types} />
                : <Spinner />
            }
        </div>
    )
}