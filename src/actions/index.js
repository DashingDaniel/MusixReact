import axios from 'axios';

export const FETCH_LYRICS = 'FETCH_LYRICS'
// Enter your API code below 
const API_KEY = '';

export function fetchLyrics(artistName,songName){
    const URL = `https://api.musixmatch.com/ws/1.1/matcher.lyrics.get?format=json&callback=callback&q_track=${songName}&q_artist=${artistName}&apikey=${API_KEY}`;
    const request = axios.get(URL);

    return{
        type: FETCH_LYRICS,
        payload: request
    };
}
