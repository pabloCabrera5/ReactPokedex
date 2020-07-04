import React, { useCallback } from 'react'
import './styles.css';
import PokemonCard from 'components/pokemonCard/pokemonCard';
import SearchForm from 'components/searchFrom/searchForm';
import Title from 'components/title/title'
import { useLocation, useHistory } from 'react-router-dom'; //when we search a pokemons will be nice to navigate to the detail directly 
import Carousel from 'components/carousel/carousel';
import { CAROUSEL_IMAGES, TOTAL_IMAGES_CAROUSEL, MEWS } from 'services/config';

export default function Home() {

    const history = useHistory();

    // we use useCallback here to not declare at each render this function who's passed to the form component
    const handleSubmit = useCallback(({ keyword }) => {
        //let pokemon = await getPokemonByName({ name: keyword });
        history.push(`/detail/${keyword}`)
        /*let { height, weight } = pokemon
        setPokemon(pokemon)
        console.log(pokemon, height, weight)*/
    }, [history]);

    return (
        <div className='home'>

            <Title title='POKEMONS' />
            <p>
                The concept of the Pokémon universe, in both the video games and the general fictional world of Pokémon, stems from the hobby of insect collecting, a popular pastime.
                Players are designated as Pokémon Trainers and have three general goals: to complete the regional Pokédex by collecting all of the available Pokémon species found in the fictional region where a game takes place,
                to complete the national Pokédex by transferring Pokémon from other regions, and to train a team of powerful Pokémon from those they have caught to compete against teams owned by other Trainers so they may eventually win the Pokémon League and become the regional Champion.
            </p>

            <SearchForm onSubmit={handleSubmit} />
            <Carousel images={CAROUSEL_IMAGES} totalImages={TOTAL_IMAGES_CAROUSEL} />

            <div className='mewmewtwo'>
                {/*https://www.thegamer.com/powerful-15-facts-that-make-mew-scary-af/*/}
                {MEWS.map(ele =>
                    <PokemonCard key={ele.id} {...ele} />
                )}
            </div>
        </div>
    )
}
