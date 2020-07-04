import React, { useState } from 'react';
import './pokemon.css';
import { Link } from 'react-router-dom';
import { POKEMONS_TYPES } from 'services/config';


const useFavorite = ({ id, name, sprites, types }) => {

    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const isFav = favorites.some(pokeFavo => pokeFavo.id === id);
    const [isFavorite, setFavorite] = useState(isFav);


    const favorite = (e) => {
        e.preventDefault();
        favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        if (isFavorite) {
            favorites = favorites.filter(fav => fav.id !== id)
            setFavorite(false);
        } else {
            favorites.push({ id, name, sprites, types })
            setFavorite(true)
        }
        localStorage.setItem('favorites', JSON.stringify(favorites));

    }

    return { isFavorite, setFavorite, favorite }

}

function Pokemon({ id, name, sprites, types }) {

    const { isFavorite, favorite } = useFavorite({ id, name, sprites, types });

    const checkfavorite = (e) => {
        favorite(e);
    }
    const storePokeDetail = () => {
        localStorage.setItem('pokeDetail', JSON.stringify({ id, name, sprites, types }))
    }
    return (
        <div key={id} className='card'>
            <span className='favorite' onClick={checkfavorite}>
                {
                    isFavorite
                        ? <i className="fa fa-heart"></i>
                        : <i className="fa fa-heart-o"></i>
                }
            </span>
            <Link to={`/detail/${id}`} onClick={storePokeDetail}>
                <p className='card-name' key={name}>{name}</p>
                <span className="card-id">#{id}</span>

                <img loading='lazy' className='card-image' alt={name} src={sprites['front_default'] || '/images/whois.png'} />
                {
                    types && types.map(type => <button className={type.type.name} style={{ backgroundColor: POKEMONS_TYPES[type.type.name].color }} key={type.slot} >{type.type.name}</button>)
                }
            </Link>
        </div>
    )
}

// we use react memo to avoid rerender all the pokemons card when we do the infinity scroll and recevie new pokemons
export default React.memo(Pokemon);