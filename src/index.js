import React from "react";
import ReactDOM from 'react-dom/client';

//import { Provider } from "react-redux";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// import { configureStore } from "@reduxjs/toolkit"; // Sử dụng configureStore thay thế createStore
// import thunk from "redux-thunk";
// import rootReducer from "./redux/reducers/rootReducers";
const root = ReactDOM.createRoot(document.getElementById('root'));
//


// const store = configureStore({
//   reducer: rootReducer, // Sử dụng rootReducer của bạn
//   middleware: [thunk],
 
// });

// root.render(
//   <Provider store={store}>
//     <App />
//   </Provider>
// );

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
