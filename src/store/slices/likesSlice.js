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
      // Assuption: action.payload === collectionIdd
      const newCollectionLike = state.collections.filter((collection) => {
        return collection.id !== action.payload;
      });

      state.collections = newCollectionLike;
    },

    removeSongLike(state, action) {
      // Assuption: action.payload === collectionIdd
      const newSongLike = state.songs.filter((song) => {
        return song.id !== action.payload;
      });

      state.songs = newSongLike;
    },
  },

  // DELETE THIS, FIND METHOD TO REMOVE SONGS DATA
  extraReducers(builder) {
    builder.addCase(addSongLike, (state, action) => {
      // Assuption: action.payLoad === songObject which includes and id key
      const filterdSongs = state.songs.filter(
        (song) => song.id !== action.payload.id
      );

      return {
        collections: [...state.collections],
        songs: [...filterdSongs],
      };
    });
  },
});

export const likesReducer = likesSlice.reducer;
export const {
  addSongLike,
  removeSongLike,
  addCollectionLike,
  removeCollectionLike,
} = likesSlice.actions;
