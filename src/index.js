import React from "react";
import { render } from "react-dom";
import Hello from "./Hello";
import configureStore from "./store";
import { Provider, useDispatch, useSelector } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";
// action creator
function updateText(text) {
  return {
    type: "UPDATE",
    text
  };
}

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const { store, persistor } = configureStore();

function App() {
  const text = useSelector((state) => state.text);
  const foo = useSelector((state) => state.foo);

  const dispatch = useDispatch();
  const onUpdateText = (e) => {
    dispatch(updateText(e.nativeEvent.target.value));
  };

  return (
    <div style={styles}>
      <Hello name="CodeSandbox" />
      <h2>Start editing to see some magic happen {"\u2728"}</h2>
      <input value={text} onChange={onUpdateText} />
      <pre style={{ textAlign: "left" }}>
        {JSON.stringify(foo, undefined, 2)}
      </pre>
    </div>
  );
}

render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
