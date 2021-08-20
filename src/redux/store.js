import { createStore, applyMiddleware, combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import favorites from "./reducers/favoritesReducer";
import browse from "./reducers/browseReducer";

const reducer = combineReducers({ favorites, browse });
const persistConfig = {
    key: "root",
    storage,
};

const persistedReducer = persistReducer(persistConfig, reducer);

export const getStore = () =>
    createStore(persistedReducer, composeWithDevTools(applyMiddleware(logger)));

export const getPersistor = (store) => persistStore(store);
