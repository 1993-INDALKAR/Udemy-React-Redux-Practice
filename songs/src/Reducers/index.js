import { combineReducers } from '../../node_modules/redux/dist/redux'  ;

const songsReducer = () => {

    return [
        {title: "No Scrubs", duration : '4:05'},
        {title: "Macarena", duration : '4:05'},
        {title: "All Start", duration : '4:05'},
        {title: "Love me like you do", duration : '4:05'},
        {title: "Shape of you", duration : '4:05'}
    ];

};

const selectedSongReducer = (selectedSong=null,action) =>{

if(action.type === "SONG_SELECTED"){
    return action.payload;
}

return selectedSong;

};

export default combineReducers({
    songs : songsReducer,
    selectedSong : selectedSongReducer
});

