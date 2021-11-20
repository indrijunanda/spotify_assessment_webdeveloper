import React, { useEffect} from "react"
import './App.css';
import Login from "./Login";
import { getTokenFromUrl } from "./spotify"
import SpotifyWebApi from "spotify-web-api-js"
import Player from "./components/player/Player";
import { useDataLayerValue } from "./data/DataLayer"

const spotify = new SpotifyWebApi();

function App() {
  const [{ token }, dispatch] = useDataLayerValue();
  

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;
    console.log("hash",hash);
    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      })

      spotify.setAccessToken(_token);
      spotify.getMe().then((user) => {  
        dispatch({
          type: "SET_USER",
          user: user,
        })
      })

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        })
      })
    }
    
    
  }, [token, dispatch])

 
  return (
    <div className="app">{token ? ( <Player spotify={spotify} />) : (<Login />)}
    </div>
  );
}

export default App;
