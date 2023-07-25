import { Box } from "@mui/material";
import React from "react";
import HeroSectionFAQ from "../components/faqs-page/HeroSectionFAQ";

import sectionBg from "../assets/images/SectionBgArt3Light.svg";
import GeneralFAQs from "../components/faqs-page/GeneralFAQs";
import TrialFAQs from "../components/faqs-page/TrialFAQs";
import PricingFAQs from "../components/faqs-page/PricingFAQs";
import NeedHelp from "../components/faqs-page/NeedHelp";

const FAQsPage = () => {
  return (
    <>
      <Box
        sx={{
          backgroundImage: `url(${sectionBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <HeroSectionFAQ />
        <GeneralFAQs />
        <TrialFAQs />
        <PricingFAQs />
        <NeedHelp />
      </Box>
    </>
  );
};

export default FAQsPage;
