// Utils
import { encodeQueryString } from "./helpers/utils";
import { CATEGORIES_LIST } from "./helpers/constants";
// Slices
import LocationReducer, {
    LocationSlice,
    updatePermission,
    updateCoordinates,
} from "./slices/LocationSlice";
import NearbyPlacesReducer, {
    NearbyPlacesSlice,
    requestLoading,
    cancelLoading,
    updateFailure,
    updatePlaces,
    resetPlaces,
} from "./slices/PlacesSlice";
import { getPlacesAsync } from "./slices/PlacesThunk";
// Components
import { UserLocationWrapper } from "./components";
// Root component
import { SearchPlace } from "./SearchPlace";

// Export
export { encodeQueryString, CATEGORIES_LIST };
export {
    NearbyPlacesReducer,
    LocationReducer,
    getPlacesAsync,
    LocationSlice,
    NearbyPlacesSlice,
    updateCoordinates,
    updatePermission,
    requestLoading,
    cancelLoading,
    updateFailure,
    updatePlaces,
    resetPlaces,
};
export { UserLocationWrapper };
export { SearchPlace };
