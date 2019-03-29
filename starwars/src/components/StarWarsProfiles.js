import React from 'react';

const StarWarsProfiles = (props) => {
    return (
    <div className="characters">
        <p>{props.profile.name}</p>
    </div>
    );
    
}

export default StarWarsProfiles;