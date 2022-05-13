import { useState } from 'react'

import Tabs from './Tabs'
import Tracks from './Tracks'

import { 
	getTracks, 
	getGenres,
	filterTracksByGenre 
} from '../lib/api'


const TracksByGenre = ({ tracks, genres }) => {
	const[activeGenre, setActiveGenre] = useState("Rock");

    return <div>
        <h2>Top Songs By Genre</h2>
        <Tabs 
            items={genres} 
            activeItem={activeGenre}
            clickHandler={setActiveGenre}
        />
        <Tracks items={filterTracksByGenre(tracks, activeGenre)} />
    
    </div>
}
    
export default TracksByGenre;