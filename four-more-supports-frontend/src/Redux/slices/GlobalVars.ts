import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type initialStateType = {
    mobileHeader: boolean;
    navHeader: boolean;
};

const initialState: initialStateType = {
    
};

export const Slice = createSlice({
    name: "GlobalVars",
    initialState,
    reducers: {
        
    },
});

// Action creators are generated for each case reducer function
export const GlobalVarsActions = Slice.actions;

export default Slice.reducer;
