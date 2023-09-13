import { createSlice } from "@reduxjs/toolkit";
import { fetchLocations } from "./actions";

const locationsReducer = createSlice({
  name: "locations",
  initialState: {
    data: [],
    isLoading: false,
    error: null,
    currentPage: 1,
    limit: 6,
    filter: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchLocations.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchLocations.fulfilled, (state, action) => {
        state.data = [...action.payload];
        state.isLoading = false;
      })
      .addCase(fetchLocations.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});
export default locationsReducer.reducer;
