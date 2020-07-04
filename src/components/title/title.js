import React from 'react';
import './title.css';

export default React.memo(({ title }) => {
    return <h1>{title}</h1>
})