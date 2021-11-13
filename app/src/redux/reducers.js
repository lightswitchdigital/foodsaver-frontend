import { API } from "../api/api"

const SET_USER = 'SET_USER'
const SET_MESSAGE = 'SET_MESSAGE'
const SET_INITIAL = 'SET_INITIAL'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'

let initialState = {
    initialized: false,
    userType: '',
    users: [
        {login: 'user', password: '1111', type: 'user'},
        {login: 'teamlead', password: '1111', type: 'teamlead'},
        {login: 'admin', password: '1111', type: 'admin'}
    ],
    isFetching: false,
    errorMessage: ''
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER:
            return { ...state, userType: action.userType}
        case SET_INITIAL:
            return { ...state, initialized: action.initialized}
        case SET_MESSAGE:
            return { ...state, errorMessage: action.errorMessage}
        default:
            return state
    }
}

// ACTION CREATOR

export const setUser = (userType) => ({ type: SET_USER, userType})
export const setInitial = (initialized) => ({ type: SET_INITIAL, initialized})
export const setMessage = (errorMessage) => ({ type: SET_MESSAGE, errorMessage})
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })

// THUNK

export const loginUser = (login, password) => (dispatch) => {
    const user = initialState.users.find(user => user.login === login)
    if(user){
        if(user.password === password){
            dispatch(setUser(user.type))   
            dispatch(setInitial(true))
            document.cookie = `login=${user.login}; password=${user.password};`
        }else{
            dispatch(setMessage('Пароль неверен'))
        }
    }else{
        dispatch(setMessage('Логин неверен'))
    }
}

export const logOut = () => (dispatch) => {
    dispatch(setUser(''))   
    dispatch(setInitial(false))
    document.cookie = ""
}


export default appReducer