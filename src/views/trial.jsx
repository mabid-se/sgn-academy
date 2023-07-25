import { Grid } from "@mui/material";
import React from "react";
import BookTrial from "../components/BookTrial";
import CoursesCompDesk from "../components/CoursesCompDesk";
import CoursesCompTab from "../components/CoursesCompTab";
import FAQsTrial from "../components/trial-page/FAQsTrial";
import HeroSectTrial from "../components/trial-page/HeroSectTrial";
import TrialPurposeDesk from "../components/trial-page/TrialPurposeDesk";
import TrialPurposeTab from "../components/trial-page/TrialPurposeTab";

const TrialPage = () => {
  return (
    <>
      <HeroSectTrial />
      <Grid sx={{ display: { xs: "flex", sm: "none", lg: "flex" } }}>
        <TrialPurposeDesk />
      </Grid>
      <Grid sx={{ display: { xs: "none", sm: "flex", lg: "none" } }}>
        <TrialPurposeTab />
      </Grid>
      <Grid sx={{ display: { xs: "flex", sm: "none", lg: "flex" } }}>
        <CoursesCompDesk />
      </Grid>
      <Grid sx={{ display: { xs: "none", sm: "flex", lg: "none" } }}>
        <CoursesCompTab />
      </Grid>
      <FAQsTrial />

      <BookTrial />
    </>
  );
};

export default TrialPage;
