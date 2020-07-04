import React, { useState } from 'react';
import './searchForm.css'

function SearchForm({ onSubmit, btnText = 'Search', placeholder = 'Search a pokemon...' }) {

    const [keyword, setKeyword] = useState();

    const handleInputChange = (e) => {
        setKeyword(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setKeyword('');
        onSubmit({ keyword });
    }
    return (
        <form onSubmit={handleSubmit}>
            <button id='buttonFormSearch'>{btnText}</button>
            <input
                name='name'
                id='name'
                type='text'
                placeholder={placeholder}
                onChange={handleInputChange}
                value={keyword} />
        </form>
    )
}

// we use react memo, to tell react to only render this component if the props he received ( onsubmit ) change
export default React.memo(SearchForm);