import React from 'react'
import YouTube from 'react-youtube'
import './CSS/youtubebox.css'
const YoutubeBox = () => {
    return (
        <div className='ytparent'>
            <div className='ytinner'>
            <YouTube videoId='XEXjdb0FBT0' className='yt'/>
            {/* <YouTube videoId='twZNsoDkJvc' className='yt'/>
            <YouTube videoId='Tdr9GkZVwSQ' className='yt'/>
            <YouTube videoId='oizJNWW58uw' className='yt'/> */}
            </div>
        </div>
    )
}

export default YoutubeBox;