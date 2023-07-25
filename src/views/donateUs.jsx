import { Grid } from "@mui/material";
import React from "react";
import DonatToHelp from "../components/donation-page/DonateToHelp";
import HeroSectDonate from "../components/donation-page/HeroSectDonate";
import WhatWeDoDesk from "../components/donation-page/WhatWeDoDesk";
import WhatWeDoMob from "../components/donation-page/WhatWeDoMob";
import WhoFeedOthers from "../components/donation-page/WhoFeedOthers";

const DonateUs = () => {
  return (
    <>
      <HeroSectDonate />
      <WhoFeedOthers />
      <Grid sx={{ display: { xs: "flex", sm: "none", lg: "flex" } }}>
        <WhatWeDoDesk />
      </Grid>
      <Grid sx={{ display: { xs: "none", sm: "flex", lg: "none" } }}>
        <WhatWeDoMob />
      </Grid>
      <DonatToHelp />
    </>
  );
};

export default DonateUs;
