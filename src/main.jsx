import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LetsPlay from "./assets/Apps/LetsPlay.jsx";
import Navigator from "./assets/Components/Navigator.jsx";
import ErrorPage from "./ErrorPage.jsx";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Navigator />

      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/LetsPlay" element={<LetsPlay />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
