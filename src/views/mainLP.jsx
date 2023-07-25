import { Grid } from "@mui/material";
import React from "react";
import HeroSection from "../components/landing-page/HeroSection";
import AboutUs from "../components/landing-page/AboutUs";
import WhyJoinUs from "../components/landing-page/WhyJoinUs";
import NeverUnsatisfied from "../components/landing-page/NeverUnsatisfied";
import CoursesCompDesk from "../components/CoursesCompDesk";
import CoursesCompTab from "../components/CoursesCompTab";
import PricingComp from "../components/landing-page/PricingComp";
import Survey from "../components/landing-page/Survey";
import FAQsLP from "../components/landing-page/FAQsLp";
import BookTrial from "../components/BookTrial";
import { Element } from "react-scroll";

const QuranLandingPage = () => {
  return (
    <>
      <HeroSection />

      <Element name="about_us">
        <AboutUs />
      </Element>

      <WhyJoinUs />
      <NeverUnsatisfied />

      <Element name="courses_home">
        <Grid sx={{ display: { xs: "flex", sm: "none", lg: "flex" } }}>
          <CoursesCompDesk />
        </Grid>
        <Grid sx={{ display: { xs: "none", sm: "flex", lg: "none" } }}>
          <CoursesCompTab />
        </Grid>
      </Element>

      <PricingComp />
      <FAQsLP />
      <Survey />
      <BookTrial />
    </>
  );
};

export default QuranLandingPage;
