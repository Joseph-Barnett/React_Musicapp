import React, { useState } from 'react'
import { musicDb } from '../../data/data'
import { ArtistLikeButton } from '../ArtistLikeButton'

export const ArtistDiscovery = () => {
    const [data, setData] = useState(musicDb)

    return (
            <>
        <p>{musicDb[0].artistAlbums[0].albumName}</p>
        <p>{musicDb[0].artistAlbums[0].albumReleaseDate}</p>
        <img src={musicDb[0].artistAlbums[0].albumCoverArt}></img>
        <ul>
            {
                musicDb[0].artistAlbums[0].artistSongs.map(song => (
                        <>
                    <li key={song}>
                        <strong 
                        role="heading"
                        aria-label="artistName">{song}
                        </strong>
                    </li>
                    <ArtistLikeButton />
                        </>
                ))
            }
        </ul>
            </>
    )
}
