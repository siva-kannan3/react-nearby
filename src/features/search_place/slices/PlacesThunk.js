import { MapService } from "../index";
import {
    requestLoading,
    cancelLoading,
    updatePlaces,
    updateFailure,
} from "./PlacesSlice";

export const getPlacesAsync = (config = {}) => {
    return async (dispatch) => {
        try {
            dispatch(requestLoading());
            const { status, result } = await MapService.getNearbyPlaces(config);
            if (status === "error") {
                throw new Error("Get nearby places API failed");
            }
            dispatch(updatePlaces(result));
        } catch (err) {
            dispatch(updateFailure());
        } finally {
            dispatch(cancelLoading());
        }
    };
};
