import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://rickandmortyapi.com/api";

export const fetchCharacters = createAsyncThunk(
  "characters/fetchCharacters",
  async (_, thunkAPI) => {
    try {
      const state = thunkAPI.getState().characters;
      const { currentPage, limit } = state;
      const response = await axios.get(
        `/character/?page=${currentPage}&limit=${limit}`
      );
      return response.data;
    } catch (err) {
      console.error(err.message);
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
          id,
          page: currentPage,
          limit: 6,
        },
      });
      console.log(response.data, "response data");
      return response.data;
    } catch (err) {
      console.log(err.message);
      return thunkAPI.rejectWithValue(err);
    }
  }
);
