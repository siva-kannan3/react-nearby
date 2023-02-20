import { configureStore } from "@reduxjs/toolkit";

import { NearbyPlacesReducer, LocationReducer } from "./features/search_place";

export const store = configureStore({
    reducer: {
        places: NearbyPlacesReducer,
        location: LocationReducer,
    },
});
