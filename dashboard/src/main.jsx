import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/index";
import { Toaster } from "react-hot-toast";
const App = lazy(() => import("./App"));
ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Provider store={store}>
      <Suspense
        fallback={
          <div className="w-screen h-screen bg-white  flex items-center justify-center text-black text-3xl font-semibold">
            loading . . .
          </div>
        }
      >
        <Toaster
          toastOptions={{
            position: "top-right",
            style: {
              background: "#283046",
              color: "white",
            },
          }}
        />
        <App />
      </Suspense>
    </Provider>
  </BrowserRouter>
);
