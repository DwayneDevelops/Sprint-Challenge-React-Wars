import React from 'react';
import StarWars from './StarWars'

const StarWarsCards = props => {
    return (
        <div classname='cards'>
            {props.starwarsChars.map()}
        </div>
    );

}

export default StarWarsCards;