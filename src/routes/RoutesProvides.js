import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import MainNavbar from "../components/MainNavbar";
import MainFooter from "../components/MainFooter";
import QuranLandingPage from "../views/mainLP";
import Pricing from "../views/pricing";
import TrialPage from "../views/trial";
import FAQsPage from "../views/faqs";
import DonateUs from "../views/donateUs";

const RoutesProvider = () => {
  return (
    <>
      <BrowserRouter>
        <MainNavbar />
        <ScrollToTop>
          <Routes>
            <Route path="/" exact element={<QuranLandingPage />} />
            <Route path="/home" exact element={<Navigate to="/" replace />} />
            <Route path="/pricing" exact element={<Pricing />} />
            <Route path="/trial" exact element={<TrialPage />} />
            <Route path="/faqs" exact element={<FAQsPage />} />
            <Route path="/donate-us" exact element={<DonateUs />} />
          </Routes>
        </ScrollToTop>
        <MainFooter />
      </BrowserRouter>
    </>
  );
};

export default RoutesProvider;
