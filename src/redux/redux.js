import { configureStore, createSlice } from "@reduxjs/toolkit";
import data from "../assets/data";

// 1. Action
// 2. Dispatch
// 3. Reducer
// 4. Store
// 5. 연결
// 6. useDispatch, useSelector 사용

const menuSlice = createSlice({ // menu 상태 관리
    name: 'menu',
    initialState: data.menu
});

const cartSlice = createSlice({ // cart 상태 관리
    name: 'cart',
    initialState: [],
    reducers: {
        addToCart: (state, action) => {
            // const { options, quantity, id } = action.payload
            // return [...state, action.payload]
            state.push(action.payload)
        },
        removeFromCart: (state, action) => {
            return state.filter((el) => action.payload.id !== el.id);
        }
    },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export const store = configureStore({
    reducer: {
        menu: menuSlice.reducer,
        cart: cartSlice.reducer
    }
});