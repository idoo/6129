import React from "react";
import { applyMiddleware, createStore, compose } from "redux";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import { reducer } from "./reducers";
import saga from "./sagas";

import { persistStore, persistReducer } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

import storage from "redux-persist/lib/storage";
import hardSet from "redux-persist/lib/stateReconciler/hardSet";

import App from "./components/App";
import "normalize.css";
import "./styles.css";

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const persistConfig = {
  key: "autocomplete",
  storage,
  stateReconciler: hardSet
};

const persistedReducer = persistReducer(persistConfig, reducer);

const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

const persistor = persistStore(store);

sagaMiddleware.run(saga);

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
