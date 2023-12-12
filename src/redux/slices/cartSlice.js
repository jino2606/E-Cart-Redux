import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: "cartSlice",
    initialState: [],

    reducers: {
        //actions
        //function to add items to cart array
        addToCart:(state, action)=>{
            // state.push(action.payload)
            return [...state, action.payload]; // This creates a new array without mutating the original state. //Better way
        },

        removeFromCart: (state, action) =>{
            /* this will return a new arryay withot the item to be removed in the cart*/
            return state.filter((item)=> item.id !== action.payload)
        },
        /* function to remove all tem from cart */
        emptyCart: (state) =>{
            return state = []
        }

    }
})

export const {addToCart, removeFromCart, emptyCart} = cartSlice.actions

export default cartSlice.reducer