export const selectCharacters = (state) => state.characters.data;
export const selectLocations = (state) => state.locations.data;
export const selectCharacter = (state) => state.character.data;

export const selectFilter = (state) => state.filter;
export const selectIsLoading = (state) => state.isLoading;
export const selectEpisode = (state) => state.characters.data.episode;
export const selectLocation = (state) => state.characters.data.episode;
