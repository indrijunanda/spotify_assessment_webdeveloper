import React from 'react'
import Body from '../Body'
import "./Player.css"

function Player({ spotify }) {
    
    return (
        <div className="player">
            <div className="player-body">
                <Body spotify={spotify} />
            </div>
        </div>
    )
}

export default Player
