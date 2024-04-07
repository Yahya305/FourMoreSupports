import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type initialStateType = {
    mobileHeader: boolean;
};

const initialState: initialStateType = {
    mobileHeader: false,
};

export const Slice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        
    },
});

// Action creators are generated for each case reducer function
export const GlobalVarsActions = Slice.actions;

export default Slice.reducer;
