

import { createStore } from "redux";
import { combineReducers } from 'redux';

const ADD_TO_CART = 'ADD_TO_CART';

const initialState = {
    user: [
        {
            id: '0',
            name: "我是老大",
            age: "30"
        },
        {
            id: '1',
            name: "我是老二",
            age: "28"
        }
    ]
}

//reducer
const productsReducer = function (state = [], action) {
    return state;
}

//reducer
const cartReducer = function (state = initialState, action) {
    switch (action.type) {
        case ADD_TO_CART: {
            return {
                ...state,
                user: [...state.user, action.payload]
            }
        }

        default:
            return state;
    }
}
//action
function addToCart(data) {
    return {
        type: ADD_TO_CART,
        payload: data
    }
}
//reducer组合器
const rootReducer = combineReducers({
    products: productsReducer,
    shoppingCart: cartReducer
});

let store = createStore(rootReducer);

console.log("初始化状态树", store.getState());

//订阅监听
let unsubscribe = store.subscribe(() =>
    console.log(store.getState())
);

store.dispatch(addToCart({
    id: '2',
    name: "我是老三",
    age: "26"
}))
store.dispatch(addToCart({
    id: '3',
    name: "我是老四",
    age: "24"
}))

unsubscribe();