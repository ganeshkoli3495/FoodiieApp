
import { configureStore } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import cartSlice from "./cartSlice";



const store = configureStore({
    reducer: {
        cart: cartSlice,
    }
});


export default store;