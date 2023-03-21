import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query/react';
import { chartsApi } from './apis/chartsApi';
import { likesReducer } from './slices/likesSlice';

export const store = configureStore({
  reducer: {
    like: likesReducer,
    [chartsApi.reducerPath]: chartsApi.reducer,
  },

  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(chartsApi.middleware);
  },
});

setupListeners(store.dispatch);

export {
  useFetchChartQuery,
  useFetchSongsReusableQuery,
} from './apis/chartsApi';

export * from './slices/likesSlice';
