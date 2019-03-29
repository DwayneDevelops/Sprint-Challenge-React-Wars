import React from 'react';
import './StarWars.css'

const StarWarsProfiles = (props) => {
    return (
    <div className="characters">
        <p>{props.profile.name}, <strong>born in:</strong> {props.profile.birth_year}</p>

    </div>
    );
    
}

export default StarWarsProfiles;