import { PayloadAction, createSlice, nanoid } from "@reduxjs/toolkit";

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
        setMobileHeader: (state, action: PayloadAction<boolean>) => {
            state.mobileHeader = action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const GlobalVarsActions = Slice.actions;

export default Slice.reducer;
