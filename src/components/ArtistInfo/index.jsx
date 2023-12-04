import React, { useState } from 'react'
import { musicDb } from '../../data/data'


export const ArtistInfo = () => {
    const [data, setData] = useState(musicDb)
    return (
        <>
    <p>{musicDb[0].artistName}</p>
    <p>{musicDb[0].artistMusicType}</p>
    <p>{musicDb[0].albumIntro}</p>
        </>
    )
}

{/* <img src={musicDb[0].albumCoverArt}></img> */}
