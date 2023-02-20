import {
    requestLoading,
    cancelLoading,
    updatePlaces,
    updateFailure,
} from "./PlacesSlice";
import { encodeQueryString } from "..";

const getNearbyPlaces = async (config = {}) => {
    try {
        const url = `/nearbysearch/json${encodeQueryString(config)}`;
        const response = await fetch(url);
        const result = await response.json();
        return {
            status: "success",
            result: result.results,
        };
    } catch (err) {
        return {
            status: "error",
        };
    }
};

export const getPlacesAsync = (config = {}) => {
    return async (dispatch) => {
        try {
            dispatch(requestLoading());
            const { status, result } = await getNearbyPlaces(config);
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
