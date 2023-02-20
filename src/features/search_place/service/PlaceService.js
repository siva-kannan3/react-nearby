import { encodeQueryString } from "../index";

export const MapService = {
    getNearbyPlaces: async (config = {}) => {
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
    },
};
