import axios from "axios";

import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://rickandmortyapi.com/api";

export const fetchCharacters = createAsyncThunk(
  "characters/fetchCharacters",
  async (_, thunkAPI) => {
    try {
      const currentPage = thunkAPI.getState().characters.currentPage;
      const response = await axios.get("/character", {
        params: {
          page: currentPage,
          limit: 6,
        },
      });
      console.log(response.data.results, "actions");
      return response.data.results;
    } catch (err) {
      console.log(err.message);
      return thunkAPI.rejectWithValue(err);
    }
  }
);
export const fetchSingleCharacter = createAsyncThunk(
  "character/fetchSingleCharacter",
  async (id, thunkAPI) => {
    try {
      const currentPage = thunkAPI.getState().characters.currentPage;
      const response = await axios.get(`/character/${id}`, {
        params: {
          page: currentPage,
          limit: 6,
        },
      });
      console.log(response.data.results, "id");
      return response.data.results;
    } catch (err) {
      console.log(err.message);
      return thunkAPI.rejectWithValue(err);
    }
  }
);