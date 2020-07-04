import React from 'react';
import './pokemonDetail.css';

export default React.memo(function PokemonDetail({ pokemon }) {

    return (
        <div className='pokemonDetail' >
            <div className='heiweiexp' >
                <i>Height:</i> <p>{pokemon.height}</p>
                <i>Weight:</i> <p>{pokemon.weight}</p>
                <i id='baseexp'>Base Experience:</i> <p>{pokemon['base_experience']}</p>
            </div>
            <div className='abilities'>
                <i>Abilities:</i> <p>{pokemon.abilities.map(ability => `| ${ability.ability.name} |`)} </p>
            </div>
            <div className='stats'>
                <i>Stats:</i> {pokemon.stats.map(stat => <p key={stat.stat.name}><i>{stat.stat.name}</i> : {stat.base_stat} </p>)}
            </div>
        </div>
    )

})