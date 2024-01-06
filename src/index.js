import React from "react";
import ReactDOM from "react-dom/client";
import { I18nextProvider } from "react-i18next"; // Add this line

import "./assets/index.css";
import App from "./App";
import global_en from "./language/en/global.json";
import global_id from "./language/id/global.json";
import i18next from "i18next";

i18next.init({
  interpolation: { escapeValue: false },
  lng: "en",
  resources: {
    en: {
      global: global_en,
    },
    id: {
      global: global_id,
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </React.StrictMode>
);
