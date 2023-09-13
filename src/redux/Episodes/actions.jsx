import axios from "axios";

import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://rickandmortyapi.com/api";

export const fetchEpisodes = createAsyncThunk(
  "episodes/fetchEpisodes",
  async (_, thunkAPI) => {
    try {
      const currentPage = thunkAPI.getState().locations.currentPage;
      const response = await axios.get("/episode", {
        params: {
          page: currentPage,
          limit: 6,
        },
      });
      // console.log(response.data.results, "episodes");
      return response.data.results;
    } catch (err) {
      console.log(err.message);
      return thunkAPI.rejectWithValue(err);
    }
  }
);
