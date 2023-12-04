import React, {useState} from 'react' 
import { ArtistInfo } from '../../components/ArtistInfo'
import { musicDb } from '../../data/data'
import { ArtistDiscovery } from '../../components/ArtistDiscovery';
import { ArtistForm } from '../../components/ArtistForm';
import './home.css' 


export function Home() {
    const [data, setData] = useState(musicDb);

    return (
        <>
        <ArtistInfo  musicDb={data}/>
        <ArtistDiscovery musicDb={data}/>
        <ArtistForm musicDb={data}/>
        </>
    )
}
