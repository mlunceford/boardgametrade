import axios from 'axios'

const initialState = {
    user: {},
    trades: [],
    addTradeRedux: {},
    myTrades: [],
    saveTradeItemId: []
}

const ADD_TRADE = 'ADD_TRADE' //action types
const UPDATE_USER = 'UPDATE_USER'; //action types
const GET_TRADES = 'GET_TRADES'; //action types
const GET_MY_TRADES_BY_ID = 'GET_MY_TRADES_BY_ID';
const GET_SAVE_TRADE_ITEM_ID = 'GET_SAVE_TRADE_ITEM_ID'
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

export const getSaveTradeByItemId = () => {
    console.log('hit getsvaetradebyitemid')
    return {
        type: GET_SAVE_TRADE_ITEM_ID,
        payload: axios.get('/api/trade/:item_id')
            .then(res => {
                console.log('check getsavetradbyitem res',res)
                return res.data
            })
    }
}

export const getMyTrades = () => {
    console.log('hit myTrade')
    return {
        type: GET_MY_TRADES_BY_ID,
        payload: axios.get('/api/mytrade')
            .then(response => {
                console.log('ckeck  get my tradesbyid res', response)
                return response.data
            })
    }
}

export function addTrade(addObj) {
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
        case UPDATE_USER:
            return { ...state, user: payload }
        case GET_TRADES + '_FULFILLED':
            return { ...state, trades: payload }
        case ADD_TRADE + '_FULFILLED':
            return { ...state, addTradeRedux: payload }
        case GET_MY_TRADES_BY_ID + '_FULFILLED':
            return { ...state, myTrades: payload }
        case GET_SAVE_TRADE_ITEM_ID + '_FULFILLED':
            return { ...state, saveTradeItemId: payload }
        default:
            return state;
    }
}
