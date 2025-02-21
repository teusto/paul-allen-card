import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import AnimationProvider from "./contexts/AnimationProvider.tsx";
import { BrowserRouter, Routes, Route } from "react-router";
import Projects from "./pages/Projects.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AnimationProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/projects-education" element={<Projects />} />
        </Routes>
      </BrowserRouter>
    </AnimationProvider>
  </StrictMode>
);
