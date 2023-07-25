import React from "react";
import sectionBg from "../../assets/images/SectionBgArtMob.png";

import teachingBlack from "../../assets/images/teaching-method-black.png";
import growthBlack from "../../assets/images/growth-timeline-black.png";
import { Box, Button, Container, Grid, Paper, Typography } from "@mui/material";

const TrialPurposeTab = () => {
  return (
    <>
      <Box
        py={10}
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
            px={6}
          >
            <Grid item>
              <Typography variant="h2" color="white.800" fontWeight="bold">
                Trial Purpose
              </Typography>
            </Grid>
            <Grid item px={4} textAlign="center">
              <Typography variant="body1" color="white.600" fontWeight="medium">
                SGN Academy always provides solutions to ensure client
                happiness. The major purpose of a trial class is to assess
                student's capacities, learning skills, and behaviors. All of
                this is essential in order to assign the best teacher for a
                student.
              </Typography>
            </Grid>

            <Grid item mt={6}>
              <Paper
                elevation={6}
                sx={{
                  borderRadius: 6,
                  p: 4,
                }}
              >
                <Grid
                  container
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="center"
                >
                  <Grid item xs={4} textAlign="center">
                    <img
                      src={teachingBlack}
                      alt="teaching-method"
                      style={{ width: "45%" }}
                    />
                  </Grid>
                  <Grid item xs={8} px={3}>
                    <Grid container direction="column" spacing={3}>
                      <Grid item>
                        <Typography
                          variant="h5"
                          fontWeight="bold"
                          color="black.800"
                        >
                          Explore Teaching Method
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Typography
                          variant="body2"
                          fontWeight="medium"
                          textAlign="justify"
                          color="black.400"
                        >
                          SGN Academy always provides solutions to ensure client
                          happiness. The major purpose of a trial class is
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Button
                          disableRipple
                          onClick=""
                          sx={{
                            py: 1,
                            px: 2,
                            color: "white.900",
                            fontWeight: "bold",
                            backgroundColor: "black.600",
                            borderRadius: 2,
                            textTransform: "none",
                            letterSpacing: 1,
                          }}
                        >
                          Learn More
                        </Button>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>

            <Grid item mt={4}>
              <Paper
                elevation={6}
                sx={{
                  borderRadius: 6,
                  p: 4,
                }}
              >
                <Grid
                  container
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="center"
                >
                  <Grid item xs={4} textAlign="center">
                    <img
                      src={growthBlack}
                      alt="growth-timeline"
                      style={{ width: "45%" }}
                    />
                  </Grid>
                  <Grid item xs={8} px={3}>
                    <Grid container direction="column" spacing={3}>
                      <Grid item>
                        <Typography
                          variant="h5"
                          fontWeight="bold"
                          color="black.800"
                        >
                          Explore Growth Timeline
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Typography
                          variant="body2"
                          fontWeight="medium"
                          textAlign="justify"
                          color="black.400"
                        >
                          SGN Academy always provides solutions to ensure client
                          happiness. The major purpose of a trial class is
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Button
                          disableRipple
                          onClick=""
                          sx={{
                            py: 1,
                            px: 2,
                            color: "white.900",
                            fontWeight: "bold",
                            backgroundColor: "black.600",
                            borderRadius: 2,
                            textTransform: "none",
                            letterSpacing: 1,
                          }}
                        >
                          Learn More
                        </Button>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default TrialPurposeTab;
