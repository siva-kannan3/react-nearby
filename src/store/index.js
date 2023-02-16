import { configureStore } from "@reduxjs/toolkit";
import NearbyPlacesReducer from "../pages/search_place/places.slice";

export const store = configureStore({
    reducer: {
        places: NearbyPlacesReducer,
    },
});
