import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
    name: "wishlist",
    initialState: [], /* setting initial value to empty laterwe will add the wishlist into it */
    reducers:{

        // actions
        //  logics to add into the wish list

        addToWishlist: (state, action)=>{
            // state.push(action.payload)
            return [...state, action.payload]; // This creates a new array without mutating the original state.

        },

        removeFromWishlist: (state, action)=>{
            return state.filter(item => item.id !== action.payload)
        }
    }
})

export const {addToWishlist, removeFromWishlist} = wishlistSlice.actions
export default wishlistSlice.reducer