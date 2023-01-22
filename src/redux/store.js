import { configureStore } from "@reduxjs/toolkit";
import ContactReducer from "./slices/contactSilce";

export default configureStore({
    reducer:{
        contacts:ContactReducer,
    },
});
