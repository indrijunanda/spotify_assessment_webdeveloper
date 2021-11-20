/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react'
import "./Body.css"
import { useDataLayerValue } from '../data/DataLayer'
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import DeleteIcon from '@material-ui/icons//Delete';

function Body({ spotify }) {
    // eslint-disable-next-line no-unused-vars
    const [{ user, playlists }, dispatch] = useDataLayerValue()
    return (
       
        <div className="body">
            <div className="body-info">
                <img src={user?.images[0]?.url} alt={user?.display_name} className="image-profil"/>
                <div className="body-infoText">
                    <strong>PROFILE</strong>
                    <h2>{user?.display_name}</h2>
                    <span>Followers {user?.followers.total}</span>
                </div>
            </div>
            <div className="body-playlist">
                {playlists?.items?.map((playlist) => (
                <div className="playlistCard">
                    <div className="playlistCard-wrapper">
                        <div className="card-thumb">
                            <img src={playlist?.images[0]?.url} alt="" />
                            <button className="playButtonPlaylist">
                                <PlayCircleOutlineIcon />
                            </button>
                        </div>
                        <div className="card-info">
                            <h3>{playlist?.name}</h3>
                        </div>
                        
                        <a className="option" onClick={() => {window.confirm("Do you really want to delete this Playlist?")}}>
                            <DeleteIcon/>
                        </a>
                    </div>
                </div>
                ))}
            </div>
            
        </div>
    )
}

export default Body
