import React from "react";
import ReactDOM from "react-dom/client";
import "utils/constants/i18n/i18n-config";

import App from "./App";

import "assets/styles/index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
