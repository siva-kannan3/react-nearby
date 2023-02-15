import { createSlice } from "@reduxjs/toolkit";

import { MapService } from "../service";

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

export default NearbyPlacesSlice.reducer;
