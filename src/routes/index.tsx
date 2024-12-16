import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/homepage";
import PlayPage from "@/pages/play";

const RootRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/play-match/:id" element={<PlayPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RootRouter;
