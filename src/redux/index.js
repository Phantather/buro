import {  configureStore } from '@reduxjs/toolkit'
import user from "./reducers/user"
import things from './reducers/things'

const store = configureStore({
    reducer: {
        user,
        things
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        })
});

export default store