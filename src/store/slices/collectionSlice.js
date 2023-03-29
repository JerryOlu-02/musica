import { createSlice } from '@reduxjs/toolkit';

const collectionSlice = createSlice({
  name: 'collection',

  initialState: {
    loading: false,
    error: null,
    data: [],
  },

  reducers: {
    addCollection(state, action) {
      state.data.push(action.payload);
    },

    removeCollection(state, action) {
      const filteredCollections = state.data.filter(
        (collection) => collection.id !== action.payload.id
      );

      return [...filteredCollections];
    },
  },
});

export const collectionReducer = collectionSlice.reducer;
export const { removeCollection, addCollection } = collectionSlice.actions;
