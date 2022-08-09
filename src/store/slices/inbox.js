import { createSlice } from '@reduxjs/toolkit'
import emailLists from "../../utils/constant/emails";
import Types from "../../utils/constant/types";

export const inbox = createSlice({
    name: 'inbox',
    initialState: {
        emails: emailLists,
    },
    reducers: {
        REMOVE_INBOX: (state, action) => {
            state.emails.find(email => email.id === action.payload.id).type = Types.TRASH;
        },
        ADD_FAVORITE: (state, action) => {
            state.emails.find(email => email.id === action.payload.id).type = Types.FAVORITE;
        },
        REMOVE_FAVORITE: (state, action) => {
            state.emails.find(email => email.id === action.payload.id).type = Types.INBOX;
        }
    }
})

export const { REMOVE_INBOX, ADD_FAVORITE, REMOVE_FAVORITE } = inbox.actions

export default inbox.reducer
