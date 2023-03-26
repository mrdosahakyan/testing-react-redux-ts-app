import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import { followersApi } from "./apiSlices/followers.slice";
import countSlice from "./slices/count.slice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    count: countSlice.reducer,
    [followersApi.reducerPath]: followersApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(followersApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
