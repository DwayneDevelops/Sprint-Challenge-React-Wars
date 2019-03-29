import React from 'react';
import StarWarsProfiles from './StarWarsProfiles'

const StarWarsCards = props => {
    return (
        <div classname='cards'>
            {props.starwarsChars.map(item => {
                return (
                    <StarWarsProfiles key={item.id} profile={item} />
                )}
            )}
        </div>
    );

}

export default StarWarsCards;