import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
    MobileHeaderModalStatus: false,
};

const Slice = createSlice({
    name: "ModalVars",
    initialState,
    reducers: {
        setMobileHeaderModalStatus: (state, action: PayloadAction<boolean>) => {
            state.MobileHeaderModalStatus = action.payload;
        },
    },
});

export const ModalVarsActions = Slice.actions;
export default Slice.reducer;
