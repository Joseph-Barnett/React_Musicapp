import React, {useState} from 'react' 
import { ArtistInfo } from '../../components/ArtistInfo'
import { musicDb } from '../../data/data'
import { ArtistDiscovery } from '../../components/ArtistDiscovery';
import { ArtistForm } from '../../components/ArtistForm';
import { BackButton } from '../../components/BackButton'
import '../home/home.css' 


export function Artists() {
    const [data, setData] = useState(musicDb);

    return (
        <>
        <h1>THIS IS ARTISTS PAGE</h1>
        <BackButton />
        <ArtistInfo musicDb={data}/>
        <ArtistDiscovery musicDb={data}/>
        <ArtistForm musicDb={data}/>
        </>
    )
}
