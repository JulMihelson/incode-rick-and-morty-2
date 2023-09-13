import { createSlice } from "@reduxjs/toolkit";
import { fetchEpisodes } from "./actions";

const episodesReducer = createSlice({
  name: "lepisodes",
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
      .addCase(fetchEpisodes.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchEpiodes.fulfilled, (state, action) => {
        state.data = [...action.payload];
        state.isLoading = false;
      })
      .addCase(fetchEpisodes.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});
export default episodesReducer.reducer;
