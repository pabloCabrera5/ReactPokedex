import React from 'react';

import './pokemons.css'
import Pokemon from '../pokemon/pokemon';

export default function Pokemons({ pokemons }) {

    return (

        <div className='pokemonList'>
            {
                pokemons.length > 0 && pokemons.map(poke => {
                    return <Pokemon key={poke.id} id={poke.id} name={poke.name} sprites={poke.sprites} types={poke.types} />
                })
            }
        </div>
    )
}