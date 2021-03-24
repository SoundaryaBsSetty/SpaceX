import React from 'react';
import Space from './Components/Space'
import { Provider } from "react-redux";
import store from "./Components/Redux/store";
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
       <Space />
      </div>
    </Provider>
  );
}

export default App;
