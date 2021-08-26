import React from 'react';

const Thumbnail = ({ thumbnail: { name, artist, images } }) => {
    return ( 
        <div className="thumbnail">
            <h1 className="thumbnail__title">{name}</h1>
            <h2 className="thumbnail__artist">{artist.name}</h2>
        </div>
    )
}

export default Thumbnail