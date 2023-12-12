import { configureStore } from "@reduxjs/toolkit";
import wishlistSlice from "./slices/wishlistSlice";
import cartSlice from "./slices/cartSlice";



const store = configureStore({
    reducer:{

        wishlishReducer: wishlistSlice,
        cartReducer: cartSlice
        
    }
})

export default store