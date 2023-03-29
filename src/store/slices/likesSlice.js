import { createSlice } from '@reduxjs/toolkit';

const likesSlice = createSlice({
  name: 'likes',

  initialState: {
    collections: [],
    songs: [],
  },

  reducers: {
    addCollectionLike(state, action) {
      // Assumption: action.payload === {collection object which includes the id}
      state.collections.push(action.payload);
    },

    addSongLike(state, action) {
      // Assumption: action.payload === {song object which includes the id}
      state.songs.push(action.payload);
    },

    removeCollectionLike(state, action) {
      // Assuption: action.payload === collectionId
      const newCollectionLike = state.collections.filter((collection) => {
        return collection.id !== action.payload;
      });

      state.collections = newCollectionLike;
    },

    removeSongLike(state, action) {
      // Assuption: action.payload === songId
      const newSongLike = state.songs.filter((song) => {
        return song.id !== action.payload;
      });

      state.songs = newSongLike;
    },
  },
});

export const likesReducer = likesSlice.reducer;
export const {
  addSongLike,
  removeSongLike,
  addCollectionLike,
  removeCollectionLike,
} = likesSlice.actions;
