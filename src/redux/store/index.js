import { createStore } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import storage from 'redux-persist/lib/storage';
import reducers from "../reducers";


const persistConfig = {
    key: 'root',
    storage
}

const persistedReducer = persistReducer(persistConfig, reducers);
export let store = createStore(persistedReducer);
export let persistore = persistStore(store);