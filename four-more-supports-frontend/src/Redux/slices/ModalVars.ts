import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
    MobileHeaderModalStatus: false,
    NavHeaderModalStatus:false
};

const Slice = createSlice({
    name: "ModalVars",
    initialState,
    reducers: {
        setMobileHeaderModalStatus: (state, action: PayloadAction<boolean>) => {
            state.MobileHeaderModalStatus = action.payload;
        },
        setNavHeaderModalStatus: (state, action: PayloadAction<boolean>) => {
            state.NavHeaderModalStatus = action.payload;
        },
    },
});

export const ModalVarsActions = Slice.actions;
export default Slice.reducer;
