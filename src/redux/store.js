
import {configureStore} from "@reduxjs/toolkit"
import videoReduser from "./reduser"


export const store = configureStore({
    reducer: {videoReduser},
    devTools: process.env.NODE_ENV !== 'production',
})