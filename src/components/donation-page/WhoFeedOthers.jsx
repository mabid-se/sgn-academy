import { Box, Grid, Typography } from "@mui/material";
import React from "react";

import sectionBgDesk from "../../assets/images/SectionBgArtDesk.png";
import sectionBgMob from "../../assets/images/SectionBgArtMob.png";
import feedOthers from "../../assets/images/who-feed-others.png";

const WhoFeedOthers = () => {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          pt: 10,
          backgroundImage: {
            xs: `url(${sectionBgMob})`,
            md: `url(${sectionBgDesk})`,
          },
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item textAlign="center">
            <Typography
              variant="h5"
              sx={{ color: "white.900", fontWeight: "bold" }}
            >
              The best of are
            </Typography>
          </Grid>
          <Grid item textAlign="center">
            <Typography
              variant="h2"
              sx={{
                color: "white.900",
                fontWeight: "bolder",
                textTransform: "uppercase",
              }}
            >
              those who feed others
            </Typography>
          </Grid>
          <Grid
            item
            mt={6}
            sx={{ marginBottom: { xs: "48px", md: "-32px" } }}
            textAlign="center"
          >
            <img
              src={feedOthers}
              alt="who-feed-others"
              style={{ width: "65%" }}
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default WhoFeedOthers;
