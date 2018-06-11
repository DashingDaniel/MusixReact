import { FETCH_LYRICS } from '../actions/index';

export default function(state={},action){
    switch(action.type){
        case FETCH_LYRICS:
     
        return action.payload.data.message.body.lyrics;
    }
    return state;
} 