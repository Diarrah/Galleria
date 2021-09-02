import React, { useEffect } from 'react';

const Painting = ({ match, thumbnails }) => {

    let painting;
        painting = thumbnails.find(portrait => portrait.name.replace(/\s+/g, '-').toLowerCase() === match.params.painting)

    useEffect(() => {
        //console.log(match)
        //console.log(thumbnails)

        let painting;
        painting = thumbnails.find(thing => thing.name.replace(/\s+/g, '-').toLowerCase() === match.params.painting)

        console.log(painting)

    }, [])

    return (
        <div className="painting">
            <div className="painting__container--main">
                <div className="painting__container--main-portrait">
                    <img src={require(`../assets/${painting.images.hero.large}`).default} alt={`${painting.artist.name}'s ${painting.name}`} />
                    <button type="button">View Image</button>
                </div>
                <div className="painting__container--main-textbox">
                    <h1>{painting.name}</h1>
                    <h3>{painting.artist.name}</h3>
                </div>
                <img className="painting__container--main-artist" 
                    src={require(`../assets/${painting.artist.image}`).default} 
                    alt={painting.artist.name}
                />
            </div>

            <div className="painting__container--description">
                <h2 className="description--year">{painting.year}</h2>
                <p className="description--information">{painting.description}</p>
                <a className="description--link" href={painting.source} target="_blank" rel="noreferrer noopener">
                    Go to source
                </a>
            </div>
            
        </div>
    )
}

export default Painting