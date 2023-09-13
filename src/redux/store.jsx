import { configureStore } from "@reduxjs/toolkit";
import charactersReducer from "./Characters/CharactersSlice";
import LocationsReducer from "./Loactions/LocationsReducer";

const store = configureStore({
  reducer: {
    characters: charactersReducer,
    locations: LocationsReducer,
  },
});

export default store;
