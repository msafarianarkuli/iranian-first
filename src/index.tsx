import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/styles/index.css";
import reportWebVitals from "./reportWebVitals";
import ReactRouter from "./pages";
import ReactQueryProvider from "./pages/ReactQuery";
import { Rtl } from "./theme/theme";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
document.dir = "rtl";
root.render(
  <React.StrictMode>
    <ReactQueryProvider>
      <Rtl>
        <ReactRouter />
      </Rtl>
    </ReactQueryProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
