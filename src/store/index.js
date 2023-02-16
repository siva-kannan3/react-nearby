import { configureStore } from "@reduxjs/toolkit";
import NearbyPlacesReducer from "./NearbyPlacesSlice";

export const store = configureStore({
    reducer: {
        places: NearbyPlacesReducer,
    },
});
