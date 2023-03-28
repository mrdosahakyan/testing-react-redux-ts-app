import React, { ReactElement, ReactNode } from "react";
import { render as rtlRender, RenderOptions } from "@testing-library/react";
import { configureStore, EnhancedStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { rootReducer, RootState } from "./redux/store";
import { followersApi } from "./redux/apiSlices/followers.slice";
import './test/mocks/jestGlobalMocks'
import { setupListeners } from "@reduxjs/toolkit/dist/query";

type RenderUI = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "queries">
) => ReturnType<typeof rtlRender>;

interface CustomRenderOptions {
  preloadedState?: RootState;
  store?: EnhancedStore<RootState>;
}

function render(
  ui: ReactElement,
  {
    preloadedState,
    store = configureStore({
      reducer: rootReducer,
      preloadedState,
      middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(followersApi.middleware),
    }),
    ...renderOptions
  }: CustomRenderOptions & Omit<RenderOptions, "queries"> = {}
): ReturnType<typeof rtlRender> {
  setupListeners(store.dispatch)
  function Wrapper({ children }: { children?: ReactNode }) {
    return (
      <Provider store={store}>
        <BrowserRouter>{children}</BrowserRouter>
      </Provider>
    );
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

// re-export everything
export * from "@testing-library/react";

// override render method
export { render };
