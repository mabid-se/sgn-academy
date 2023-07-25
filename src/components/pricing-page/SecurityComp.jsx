import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";

import sectionBg from "../../assets/images/SectionBgArt3Light.svg";

const SecurityComp = () => {
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
                Security
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
                    We care about the security of our customers. You are also
                    requested not to share your contact information like phone
                    number, Email address, Social Media account or credit card
                    information, etc. with any teacher. Academy will be not
                    responsible in case of misuse.
                  </li>
                  <li>
                    Teachers are also not allowed to ask for or share their
                    contact number, email address, or Social Media accounts with
                    students or parents, if anyone does so, please inform us
                    urgently.
                  </li>
                  <li>
                    Please don’t discuss classes’ schedules, payment, or
                    anything extra with the teachers. In these cases, contact
                    the Manager through call, Admin Skype, Email, or Whatsapp.
                  </li>
                  <li>
                    Manager may revise its Terms of Services & Conditions from
                    time to time to ensure the best education and services to
                    our students and their parents. Upon successful completion
                    of trial classes, you have the option, of whether to proceed
                    with your Quran classes or not with Teacher.
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

export default SecurityComp;
