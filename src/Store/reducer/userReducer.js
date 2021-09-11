import { createReducer, createSlice } from "@reduxjs/toolkit";
import { UPDATE_COMPANY, UPDATE_NAME, UPDATE_PROFESSION, UPDATE_STATUS } from "../constants";

const initialState = {
    name: 'Numan',
    profession: 'Full Stack Dev',
    company: 'SrcLogicx',
    status: 'Single'
}

//Old Redux Style
// const userReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case UPDATE_STATUS:
//             return {
//                 ...state,
//                 status: action.payload
//             }

//         default:
//             return state;
//     }
// }

//New Redux-ToolKit Style
// const userReducer = createReducer(initialState, (builder) => {
//     builder.addCase(UPDATE_STATUS, (state, action) => {
//         state.status = action.payload
//     });

//     builder.addCase(UPDATE_COMPANY, (state, action) => {
//         state.company = action.payload
//     });

//     builder.addCase(UPDATE_PROFESSION, (state, action) => {
//         state.profession = action.payload
//     });

//     builder.addCase(UPDATE_NAME, (state, action) => {
//         state.name = action.payload
//     });
// })

// createSlice Ka Jalwa 😎 - No Need of Actions
const userReducer = createSlice({
    name: 'users',
    initialState,
    reducers: {
        updateStatus(state, action) {
            state.status = action.payload
        },
        updateCompany(state, action) {
            state.company = action.payload
        },
    }
})

export const { updateStatus, updateCompany } = userReducer.actions;

export default userReducer.reducer;