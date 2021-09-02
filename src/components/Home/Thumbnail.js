import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Thumbnail = ({ viewport, thumbnail: { name, artist, images } }) => {

    return ( 
        <Link to={`/gallery/${name.replace(/\s+/g, '-').toLowerCase()}`}>
            <div className="thumbnail">
                <h1 className="thumbnail__title">{name}</h1>
                <h2 className="thumbnail__artist">{artist.name}</h2>
            </div>
        </Link>
    )
}

export default Thumbnail