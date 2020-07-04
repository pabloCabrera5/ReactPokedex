// Component to show the differents types of pokemons to search ( lateral menu )
import React from 'react';

//react memo for avoid unnecesary renders when we load more pokemons ( scrolling down )
export default React.memo(function PokemonsTypes(types) {

    const onClick = (e) => {
        types.onClick(e.target.value);
    }

    return (
        types.buttons.map(btn => (
            <button key={btn.id} id={btn.id} value={btn.value} onClick={onClick}>{btn.text}</button>
        ))
    )
})