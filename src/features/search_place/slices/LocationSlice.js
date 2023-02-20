import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    latitude: "",
    longitude: "",
    hasPermission: false,
};

export const LocationSlice = createSlice({
    name: "Location parameters",
    initialState,
    reducers: {
        updatePermission: (state, action) => {
            state.hasPermission = action.payload;
        },
        updateCoordinates: (state, action) => {
            state.latitude = action.payload.latitude;
            state.longitude = action.payload.longitude;
        },
    },
});

// Action creators are generated for each case reducer function
export const { updatePermission, updateCoordinates } = LocationSlice.actions;

export default LocationSlice.reducer;
