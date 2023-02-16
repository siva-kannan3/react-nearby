import reducer, {
    requestLoading,
    updatePlaces,
    updateFailure,
} from "./places.slice";

describe("Test suite places slice reducer", () => {
    const initialState = {
        result: [],
        error: null,
        loading: true,
    };

    const MOCK_RESPONSE = [
        {
            name: "Hilton coffee shop",
            rating: 4.2,
            user_ratings_total: 241,
            place_id: "32sd2",
        },
        {
            name: "Starbucks",
            rating: 4.8,
            user_ratings_total: 1082,
            place_id: "36hed1",
        },
    ];

    it("validate loading state", () => {
        const action = { type: requestLoading };
        const state = reducer(initialState, action);
        expect(state.loading).toBeTruthy();
    });

    it("validate fetched data", () => {
        const action = { type: updatePlaces, payload: MOCK_RESPONSE };
        const state = reducer(initialState, action);
        expect(state).toEqual({
            loading: true,
            result: MOCK_RESPONSE,
            error: null,
        });
    });

    it("validate failure state", () => {
        const action = { type: updateFailure };
        const state = reducer(initialState, action);
        expect(state.error).toBeTruthy();
    });
});
