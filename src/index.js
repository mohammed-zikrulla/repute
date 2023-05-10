import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
// import store from "./Store";
import "./index.css";
import App from "./App";
import myReducer from "./Store";

import { configureStore } from "@reduxjs/toolkit";

import { PersistGate } from "redux-persist/integration/react";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

import storage from "redux-persist/lib/storage";

const persistConfig = { key: "root", storage, version: 1 };

const persistedReducer = persistReducer(persistConfig, myReducer);

const store = configureStore({
  reducer: persistedReducer,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistStore(store)}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
