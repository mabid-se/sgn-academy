import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";

const HeroSectionFAQ = () => {
  return (
    <>
      <Box mt={{ xs: 14, md: 10 }} py={{ xs: 7, md: 10 }}>
        <Container>
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item>
              <Typography variant="h1" color="black.800" fontWeight="bolder">
                FAQs
              </Typography>
            </Grid>
            <Grid item mt={1} px={{ xs: 4, md: 0 }} textAlign="center">
              <Typography
                variant="body2"
                sx={{
                  color: "black.400",
                  fontWeight: "medium",
                }}
              >
                Common questions when considering SGN Academy
              </Typography>
            </Grid>
            <Grid item px={{ xs: 4, md: 0 }} textAlign="center">
              <Typography
                variant="body2"
                sx={{
                  color: "black.400",
                  fontWeight: "medium",
                }}
              >
                Have a question ? We’ve got you covered with FAQs
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default HeroSectionFAQ;
