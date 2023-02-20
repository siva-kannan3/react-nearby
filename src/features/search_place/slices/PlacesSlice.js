import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const initialState = {
    result: [],
    error: null,
    loading: true,
};

export const NearbyPlacesSlice = createSlice({
    name: "Nearby Places",
    initialState,
    reducers: {
        requestLoading: (state) => {
            state.loading = true;
        },
        cancelLoading: (state) => {
            state.loading = false;
        },
        updatePlaces: (state, action) => {
            state.result = action.payload;
            state.error = null;
        },
        updateFailure: (state, action) => {
            state.error = true;
        },
        resetPlaces: (state) => {
            state.error = false;
            state.result = [];
            state.loading = false;
        },
    },
});

// Action creators are generated for each case reducer function
export const {
    requestLoading,
    cancelLoading,
    updatePlaces,
    updateFailure,
    resetPlaces,
} = NearbyPlacesSlice.actions;

export default NearbyPlacesSlice.reducer;
