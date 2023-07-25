import { Box, Button, Container, Grid, Typography } from "@mui/material";

import React from "react";

import bgArt from "../../assets/images/SectionBgArt2.png";
import questImg from "../../assets/images/Questioned.png";
import { useNavigate } from "react-router-dom";

const WhyJoinUs = () => {
  const navigate = useNavigate();
  return (
    <>
      <Box
        sx={{
          backgroundImage: `url(${bgArt})`,
          backgroundSize: "contain",
          backgroundPosition: { xs: "top center", md: "center left" },
          backgroundRepeat: "no-repeat",
          py: 10,
        }}
      >
        <Container>
          <Grid
            container
            direction={{ xs: "column", md: "row" }}
            justifyContent="center"
            alignItems="center"
            px={{ xs: 2, md: 3 }}
          >
            <Grid item md={4} px={5}>
              <img src={questImg} alt="questioned" style={{ width: "100%" }} />
            </Grid>
            <Grid item md={8} px={{ xs: 0, md: 5 }}>
              <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="flex-start"
                spacing={3}
              >
                <Grid item mt={{ xs: 5, md: 0 }}>
                  <Typography
                    variant="h2"
                    sx={{ color: "black.800", fontWeight: "bold" }}
                  >
                    Why Should Join Us?
                  </Typography>
                  <Typography
                    variant="body2"
                    mt={1}
                    sx={{ color: "black.400", fontWeight: "medium" }}
                  >
                    Online Quran Academy is a rapidly expanding and beneficial
                    learning resource for children and adults. And most people
                    genuinely believe that learning the Quran online is
                    appropriate. Thus they join and learn the Quran online.
                  </Typography>
                </Grid>

                <Grid item mt={{ xs: 3, md: 0 }}>
                  <Typography
                    variant="h2"
                    sx={{ color: "black.800", fontWeight: "bold" }}
                  >
                    Our Teachers
                  </Typography>
                  <Typography
                    variant="body2"
                    mt={1}
                    sx={{ color: "black.400", fontWeight: "medium" }}
                  >
                    We have several sorts of teachers based on the courses and
                    the nature of the students. We have Scholars and highly
                    educated teachers that understand the student's behaviour
                    and are proficient in English. All teachers are trained and
                    know how to become a student's favourite teacher and teach
                    them with perfection.
                  </Typography>
                </Grid>
                <Grid item mt={2}>
                  <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    spacing={{ xs: 2, md: 3 }}
                  >
                    <Grid item>
                      <Button
                        disableRipple
                        onClick=""
                        sx={{
                          py: 1,
                          px: { xs: 3, md: 3 },
                          color: "white.900",
                          fontSize: 15,
                          fontWeight: "bold",
                          textTransform: "none",
                          letterSpacing: 1,
                          border: 2,
                          borderColor: "black.600",
                          backgroundColor: "black.600",
                          borderRadius: 3,
                          "&:hover": {
                            color: "black.600",
                            fontWeight: "medium",
                          },
                        }}
                      >
                        Contact Us
                      </Button>
                    </Grid>
                    <Grid item>
                      <Button
                        disableRipple
                        onClick={() => navigate("/trial")}
                        sx={{
                          ml: 1,
                          py: 1,
                          px: { xs: 3, md: 3 },
                          color: "black.600",
                          fontSize: 15,
                          fontWeight: "medium",
                          textTransform: "none",
                          letterSpacing: 1,
                          border: 2,
                          borderColor: "black.600",
                          borderRadius: 3,
                          "&:hover": {
                            color: "white.900",
                            fontWeight: "bold",
                            border: 2,
                            backgroundColor: "black.600",
                            borderColor: "black.600",
                          },
                        }}
                      >
                        Book a Trial
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default WhyJoinUs;
