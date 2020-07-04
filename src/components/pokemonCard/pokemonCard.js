import React from 'react';
import './pokemonCard.css'

export default function PokemonCard({ className, id, title, src, content }) {

    return (
        <div className={className || 'pokemonCard'}>
            {className === 'mewvsmewtwo' ?
                <>
                    <h3>{title}</h3>
                    <img id={id || 'imgCard'} alt={id || 'imgCard'} src={src} />
                    <p>
                        {content}
                    </p>
                </>
                :
                <>
                    <img id={id || 'imgCard'} alt={id || 'imgCard'} src={src} />
                    <div>
                        <h3>{title}</h3>
                        <p>
                            {content}
                        </p>
                    </div>
                </>
            }
        </div>
    )

}