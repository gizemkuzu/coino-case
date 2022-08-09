import { configureStore } from '@reduxjs/toolkit'
import inboxSlice from "./slices/inbox";

export default configureStore({
    reducer: {
        inbox: inboxSlice,
    }
})
