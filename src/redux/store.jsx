import { configureStore } from "@reduxjs/toolkit";
import charactersReducer from "./Characters/CharactersSlice";
import LocationsReducer from "./Loactions/LocationsReducer";
import singleCharactersReducer from "./Characters/SingleCharacterReducer";

const store = configureStore({
  reducer: {
    characters: charactersReducer,
    locations: LocationsReducer,
    character: singleCharactersReducer,
  },
});

export default store;
