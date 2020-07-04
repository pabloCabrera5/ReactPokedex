import React from 'react';
import './styles.css'
import PokemonCard from 'components/pokemonCard/pokemonCard';
import { Link, useParams } from 'react-router-dom';
import PokemonsTable from 'components/pokemonsTable/pokemonsTable';

// https://bulbapedia.bulbagarden.net/wiki/Legendary_Pok%C3%A9mon

export default function Legendaries({ match }) {

    return (
        <div className='legendaries'>
            <img id='imglegendaries' alt='legendaries' src='images/legendaries/legendaries.png' />
            <p>
                Legendary Pokémon (Japanese: 伝説のポケモン) are a group of incredibly rare and often very powerful Pokémon, generally featured prominently in the legends and myths of the Pokémon world.

                Special Pokémon is a subcategory of the Legendary Pokémon that are restricted or banned from certain official tournaments, battle facilities, and link battle formats. Most Special Pokémon are Legendary game mascots.

                Mythical Pokémon are a related but separate group of Pokémon, which are usually event-exclusive. Apart from Japanese or Korean media, Mythical Pokémon were considered to be Legendary Pokémon prior to Generation V.

                No explicit criteria defines what makes a Pokémon a Legendary Pokémon. Instead, the only way to identify a Pokémon as belonging to this group is through statements from official media, such as the games or anime.
            </p>

            <PokemonCard className='articuno' src='images/legendaries/articuno.jpg' title='Articuno' content='Articuno is a legendary ice / flying type Pokémon introduced in the first generation.' />
            <PokemonCard className='moltres' src='images/legendaries/moltres.jpg' title='Moltres' content='Moltres is a legendary bird Pokémon that has the ability to control fire. They say that if he is injured, he dives into the magma liquid to recover' />

            <PokemonsTable match={match} {...TABLECONTENT} />

        </div>
    )
}


const GENERATIONS = [
    {
        gen: 'Generation I',
        //poke: 'Articuno • Zapdos • Moltres • Mewtwo • Mew',
        pokes: ['Articuno', 'Zapdos', 'Moltres', 'Mewtwo', 'Mew']
    },
    {
        gen: 'Generation II',
        pokes: ['Raikou', 'Entei', 'Suicune', 'Lugia', 'Ho-Oh']
    },
    {
        gen: 'Generation III',
        pokes: ['Regirock', 'Regice', 'Registeel', 'Latias',
            'Latios', 'Kyogre', 'Groudon', 'Rayquaza']
    },
    {
        gen: 'Generation IV',
        pokes: ['Uxie', 'Mesprit', 'Azelf', 'Dialga', 'Palkia',
            'Heatran', 'Regigigas', 'Giratina', 'Cresselia']
    },
    {
        gen: 'Generation V',
        pokes: ['Cobalion', 'Terrakion', 'Virizion', 'Tornadus', 'Thundurus',
            'Reshiram', 'Zekrom', 'Landorus', 'Kyurem']
    },
    {
        gen: 'Generation VI',
        pokes: ['Xerneas', 'Yveltal', 'Zygarde']
    },
    {
        gen: 'Generation VII',
        pokes: ['Silvally', 'Tapu Koko', 'Tapu Lele', 'Tapu Bulu', 'Tapu Fini',
            'Cosmog', 'Cosmoem', 'Solgaleo', 'Lunala', 'Necrozma']
    },
    {
        gen: 'Generation VIII',
        pokes: ['Zacian', 'Zamazenta', 'Eternatus',
            'Kubfu', 'Urshifu', 'Regieleki', 'Regidrago', 'Calyrex']
    },
]
const TABLECONTENT = {
    caption: 'All Legendaries Pokemons',
    title: 'Legendary Pokemons',
    content: GENERATIONS
}