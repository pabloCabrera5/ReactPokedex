import React from 'react';
import Pokemons from 'components/pokemons/pokemons';
import './styles.css'
export default function Favorites() {

    const favoritesPokemons = JSON.parse(localStorage.getItem('favorites')) || [];

    return (
        favoritesPokemons.length > 0
        ? <div className='favorites'>
            <h3>This is the list of your favorites pokemons</h3>
            <Pokemons pokemons={favoritesPokemons} />
        </div>
        : <div className='noFavorites'>
            <h3> Sorry, you don't have any favorite pokemon yet!</h3>
            <p> Go to the pokemons section and add somes!</p>
            </div>
    )
    
}