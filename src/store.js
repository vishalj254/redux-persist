import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import rootReducer from "../reducer/index";

function configureStore() {
  const persistConfig = {
    key: "root",
    debug: true,
    storage
  };
  const reducer = persistReducer(persistConfig, rootReducer);
  const store = createStore(reducer);

  console.log("initialState", store.getState());

  const persistor = persistStore(store, null, () => {
    // if you want to get restoredState
    console.log("restoredState", store.getState());
  });

  return { store, persistor };
}

export default configureStore;
