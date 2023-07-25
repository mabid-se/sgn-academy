import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";

import sectionBg from "../../assets/images/SectionBgArt3Light.svg";

const RegAndPayment = () => {
  return (
    <>
      <Box
        py={{ xs: 7, md: 10 }}
        sx={{
          width: "100%",
          backgroundImage: `url(${sectionBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Container>
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            px={{ xs: 2, sm: 4, md: 6, lg: 10 }}
          >
            <Grid item textAlign="center">
              <Typography variant="h2" color="black.800" fontWeight="bold">
                Registration and Payments
              </Typography>
            </Grid>
            <Grid item mt={1} px={2}>
              <Typography
                variant="body1"
                sx={{
                  color: "black.400",
                  fontWeight: "medium",
                  textAlign: "center",
                }}
              >
                Please read these Terms carefully, and contact us if you have
                any questions. By starting our Online Courses, you agree to be
                bound by these Terms.
              </Typography>
            </Grid>

            <Grid item mt={4}>
              <Typography
                variant="subtitle1"
                color="black.600"
                fontWeight="medium"
              >
                <ul>
                  <li>
                    Upon successful completion of trial classes, you have the
                    option, of whether to proceed with your Quran classes or not
                    with Teacher.
                  </li>
                  <li>
                    Once you decide to get registered for Regular classes, you
                    have to pay the monthly fee in advance after trial classes.
                  </li>
                  <li>
                    Monthly Payment will be payable in the 1st week of each
                    month from the date you get registered with Teacher.
                  </li>
                  <li>
                    Classes will not be paused, in case of overdue of fee.
                  </li>
                </ul>
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default RegAndPayment;
