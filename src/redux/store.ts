import {
  configureStore,
  ThunkAction,
  Action,
  combineReducers,
} from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import { followersApi } from "./apiSlices/followers.slice";
import countSlice from "./slices/count.slice";

export const rootReducer = combineReducers({
  counter: counterReducer,
  count: countSlice.reducer,
  [followersApi.reducerPath]: followersApi.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
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

// import React, { ReactElement, ReactNode } from 'react';
// import { render as rtlRender, RenderOptions } from '@testing-library/react';
// import { configureStore, EnhancedStore } from '@reduxjs/toolkit';
// import { Provider } from 'react-redux';
// import { BrowserRouter } from 'react-router-dom';
// import { ThemeProvider } from 'styled-components';
// import { setupServer } from 'msw/node';
// import { rest } from 'msw';
// import { setupListeners } from '@reduxjs/toolkit/query';

// import theme from './theme';
// import rootReducer, { RootState } from './rootReducer';
// import { api } from './api';

// type RenderUI = (
//   ui: ReactElement,
//   options?: Omit<RenderOptions, 'queries'>
// ) => ReturnType<typeof rtlRender>;

// interface CustomRenderOptions {
//   preloadedState?: RootState;
//   store?: EnhancedStore<RootState>;
//   serverHandlers?: Parameters<typeof setupServer>[1];
// }

// function render(
//   ui: ReactElement,
//   {
//     preloadedState,
//     store = configureStore({
//       reducer: {
//         [api.reducerPath]: api.reducer,
//         // other reducers...
//       },
//       preloadedState,
//       middleware: (getDefaultMiddleware) =>
//         getDefaultMiddleware().concat(api.middleware),
//     }),
//     serverHandlers = [],
//     ...renderOptions
//   }: CustomRenderOptions & Omit<RenderOptions, 'queries'> = {}
// ): ReturnType<typeof rtlRender> {
//   const server = setupServer(...serverHandlers);

//   function Wrapper({ children }: { children?: ReactNode }) {
//     return (
//       <Provider store={store}>
//         <BrowserRouter>
//           <ThemeProvider theme={theme}>{children}</ThemeProvider>
//         </BrowserRouter>
//       </Provider>
//     );
//   }

//   beforeAll(() => server.listen());
//   afterEach(() => server.resetHandlers());
//   afterAll(() => server.close());
//   setupListeners(store.dispatch);

//   return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
// }

// // re-export everything
// export * from '@testing-library/react';

// // override render method
// export { render };
