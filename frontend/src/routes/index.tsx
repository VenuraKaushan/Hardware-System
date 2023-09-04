import LandingPage from "../pages/LandingPage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "../pages/Dashboard";

const AllRoutes = () => {
  const client = new QueryClient(); //config query client
  return (
    <div>
      <QueryClientProvider client={client}>
        <Router>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login/inventory"/>
            <Route path="/owner/dashboard" element={<NavBar/>} />
          </Routes>
        </Router>
      </QueryClientProvider>
    </div>
  );
};

export default AllRoutes;
