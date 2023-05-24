import { configureStore } from "@reduxjs/toolkit";
import StudentReducer from "./StudentSlice";

export default configureStore({
    reducer:{
        student:StudentReducer
    }
})