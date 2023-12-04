import React, { useState } from 'react'
import { musicDb } from '../../data/data'


export const ArtistInfo = () => {
    const [data, setData] = useState(musicDb)
    return (
        <>
    <h1>{musicDb[0].artistName}</h1>
    <p>{musicDb[0].artistMusicType}</p>
    <p>{musicDb[0].albumIntro}</p>
        </>
    )
}
