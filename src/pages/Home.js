import React, { useState, useEffect } from 'react';
import Thumbnail from '../components/Home/Thumbnail';
import data from '../data.json';

const Home = () => {
    const [thumbnails, setThumbnails] = useState([...data]);

    useEffect(() => {
        
        console.log(thumbnails)
    }, [])

    return (
        <div className="home">
            {thumbnails.map((thumbnail, i) => (
                <Thumbnail key={i} thumbnail={thumbnail} />
            ))}
        </div>
    )
}

export default Home