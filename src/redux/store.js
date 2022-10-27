
import {configureStore} from "@reduxjs/toolkit"
import videoReduser from "./reduser"
import commentReduser from "./reducer2"


export const store = configureStore({
    reducer: {videoReduser, commentReduser},
    devTools: true,
})