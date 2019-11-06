const initialState = {
    user: {}
}

const UPDATE_USER = 'UPDATE_USER';

export function updateUser(userObj) {
    return {
        type: UPDATE_USER,
        payload: userObj
    }
}

export default function reducer(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case UPDATE_USER:
            return { ...state, user: payload }
        default:
            return state;
    }
}

// const initialState = {
//         user: {}
//     }
//     const UPDATE_USER =  'UPDATE_USER'
//     export function updateUser(userObj) {
//         return {
//             type: UPDATE_USER,
//             payload: userObj
//         }
//     }
//     //think abou thtis component set up a btn when we click that btn we run this function which will have a action payload with it  and then go trhough our siwtch  cases and update it will the list action payload
//     export default function reducer(state = initialState, action){
//         const{type, payload} = action;
//         switch(type){
//             case UPDATE_USER:
//                 return{...state, user: payload}
//             default:
//                 return state;
//         }
//     }


    // export default function reducer (state = initialState, action){
    //     //const {type, payload} = action
    // //     switch(action.type){
    // // //         case: UPDATE_USER
    // //         //! if you dont do the ...state you lose all data other than your one.s
    // //         return {...state, list: [payload]}
    // //         // case:
    // //         // case:
    // //         default:
    // //             return state
    // //     }
    // }
    // //this is so dickish
