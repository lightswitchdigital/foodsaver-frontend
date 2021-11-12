import { API } from "../api/api"

const SET_SONG = 'SET_SONG'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'

let initialState = {
    song: {},
    isFetching: false
}

const songsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SONG:
            return { ...state, song: action.song}
        default:
            return state
    }
}

// ACTION CREATOR

export const setSong = (song) => ({ type: SET_SONG, song})
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })

// THUNK

export const requestSong = (songId) => async (dispatch) => {
    dispatch(toggleIsFetching(true))
    let response = await API.getSong(songId)
    dispatch(setSong(response.data))   
    dispatch(toggleIsFetching(false)) 
}

export default songsReducer