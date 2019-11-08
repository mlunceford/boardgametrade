import axios from 'axios'

const initialState = {
    user: {},
    trades: [],
    addTradeRedux: {}
}

const ADD_TRADE = 'ADD_TRADE' //action types
const UPDATE_USER = 'UPDATE_USER'; //action types
const GET_TRADES = 'GET_TRADES'; //action types

export const getTrades = () => {
    console.log('hit')
    return {
        type: GET_TRADES,
        payload: axios.get('/api/trade')
        .then(response => {
            console.log('ckeck res', response) 
            return response.data
        })
    }
}

export function addTrade(addObj){
    return {
        type: ADD_TRADE,
        payload: addObj
    }
}

export function updateUser(userObj) {
    return {
        type: UPDATE_USER,
        payload: userObj
    }
}

export default function reducer(state = initialState, action) {
    const { type, payload } = action;
    console.log(action)
    switch (type) {
        case UPDATE_USER + '_FULFILLED':
            return { ...state, user: payload }
        case GET_TRADES + '_FULFILLED':
            return {...state, trades: payload}
        case ADD_TRADE + '_FULFILLED':
            return {...state, addTradeRedux: payload }
        default:
            return state;
    }
}
