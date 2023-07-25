import { Box, Button, Container, Grid, Paper, Typography } from "@mui/material";
import React, { useState } from "react";
import sectionBgDesk from "../../assets/images/SectionBgArtDesk.png";

import growthBlack from "../../assets/images/growth-timeline-black.png";
import growthWhite from "../../assets/images/growth-timeline-white.png";
import teachingBlack from "../../assets/images/teaching-method-black.png";
import teachingWhite from "../../assets/images/teaching-method-white.png";

const TrialPurposeDesk = () => {
  const [hoverTeachingMethod, setHoverTeachingMethod] = useState(false);
  const [hoverGrowthTimeline, setHoverGrowthTimeline] = useState(false);

  return (
    <>
      <Box
        py={10}
        sx={{
          width: "100%",
          backgroundImage: `url(${sectionBgDesk})`,
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
          >
            <Grid item px={2}>
              <Typography variant="h2" color="white.900" fontWeight="bold">
                Trial Purpose
              </Typography>
            </Grid>
            <Grid item mt={2} px={{ xs: 2, md: 8 }}>
              <Typography
                variant="body1"
                sx={{
                  color: "white.600",
                  fontWeight: "medium",
                  textAlign: "center",
                }}
              >
                SGN Academy always provides solutions to ensure client
                happiness. The major purpose of a trial class is to assess
                student's capacities, learning skills, and behaviors. All of
                this is essential in order to assign the best teacher for a
                student.
              </Typography>
            </Grid>

            <Grid item mt={4}>
              <Button
                disableRipple
                onClick=""
                sx={{
                  py: 1,
                  px: { xs: 2, md: 3 },
                  fontWeight: "bold",
                  borderRadius: 2,
                  textTransform: "none",
                  letterSpacing: 1,
                  color: "black.600",
                  border: 2,
                  borderColor: "white.900",
                  backgroundColor: "white.900",
                  "&:hover": {
                    border: 2,
                    color: "white.900",
                    backgroundColor: "transparent",
                  },
                }}
              >
                Book Trial
              </Button>
            </Grid>

            <Grid item mt={6}>
              <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
              >
                <Grid item xs={12} md={5} px={5}>
                  <Paper
                    onMouseEnter={() => setHoverTeachingMethod(true)}
                    onMouseLeave={() => setHoverTeachingMethod(false)}
                    elevation={6}
                    sx={{
                      borderRadius: 6,
                      "&:hover": { backgroundColor: "black.600" },
                    }}
                  >
                    <Grid
                      container
                      direction="column"
                      justifyContent="flex-start"
                      alignItems="flex-start"
                      py={6}
                      px={5}
                    >
                      <Grid item textAlign="center">
                        <img
                          src={
                            hoverTeachingMethod ? teachingWhite : teachingBlack
                          }
                          alt="teaching-method"
                          style={{ width: "35%" }}
                        />
                      </Grid>
                      <Grid item mt={3}>
                        <Typography
                          variant="h5"
                          fontWeight="bold"
                          sx={
                            hoverTeachingMethod
                              ? { color: "white.900" }
                              : { color: "black.800" }
                          }
                        >
                          Explore Teaching Method
                        </Typography>
                      </Grid>
                      <Grid item mt={1}>
                        <Typography
                          variant="body2"
                          fontWeight="medium"
                          textAlign="justify"
                          sx={
                            hoverTeachingMethod
                              ? { color: "white.900" }
                              : { color: "black.400" }
                          }
                        >
                          SGN Academy always provides solutions to ensure client
                          happiness. The major purpose of a trial class is
                        </Typography>
                      </Grid>
                      <Grid item mt={2}>
                        <Button
                          disableRipple
                          onClick=""
                          sx={
                            hoverTeachingMethod
                              ? {
                                  py: 1,
                                  px: { xs: 2, md: 3 },
                                  fontWeight: "bold",
                                  borderRadius: 2,
                                  textTransform: "none",
                                  letterSpacing: 1,
                                  color: "black.600",
                                  backgroundColor: "white.900",
                                  "&:hover": {
                                    backgroundColor: "white.900",
                                  },
                                }
                              : {
                                  py: 1,
                                  px: { xs: 2, md: 3 },
                                  fontWeight: "bold",
                                  borderRadius: 2,
                                  textTransform: "none",
                                  letterSpacing: 1,
                                  color: "white.900",
                                  backgroundColor: "black.600",
                                }
                          }
                        >
                          Learn More
                        </Button>
                      </Grid>
                    </Grid>
                  </Paper>
                </Grid>
                <Grid item xs={12} md={5} mt={{ xs: 4, md: 0 }} px={5}>
                  <Paper
                    onMouseEnter={() => setHoverGrowthTimeline(true)}
                    onMouseLeave={() => setHoverGrowthTimeline(false)}
                    elevation={6}
                    sx={{
                      borderRadius: 6,
                      "&:hover": { backgroundColor: "black.600" },
                    }}
                  >
                    <Grid
                      container
                      direction="column"
                      justifyContent="flex-start"
                      alignItems="flex-start"
                      py={6}
                      px={5}
                    >
                      <Grid item textAlign="center">
                        <img
                          src={hoverGrowthTimeline ? growthWhite : growthBlack}
                          alt="teaching-method"
                          style={{ width: "35%" }}
                        />
                      </Grid>
                      <Grid item mt={3}>
                        <Typography
                          variant="h5"
                          fontWeight="bold"
                          sx={
                            hoverGrowthTimeline
                              ? { color: "white.900" }
                              : { color: "black.800" }
                          }
                        >
                          Explore Growth Timeline
                        </Typography>
                      </Grid>
                      <Grid item mt={1}>
                        <Typography
                          variant="body2"
                          fontWeight="medium"
                          textAlign="justify"
                          sx={
                            hoverGrowthTimeline
                              ? { color: "white.900" }
                              : { color: "black.400" }
                          }
                        >
                          SGN Academy always provides solutions to ensure client
                          happiness. The major purpose of a trial class is
                        </Typography>
                      </Grid>
                      <Grid item mt={2}>
                        <Button
                          disableRipple
                          onClick=""
                          sx={
                            hoverGrowthTimeline
                              ? {
                                  py: 1,
                                  px: { xs: 2, md: 3 },
                                  fontWeight: "bold",
                                  borderRadius: 2,
                                  textTransform: "none",
                                  letterSpacing: 1,
                                  color: "black.600",
                                  backgroundColor: "white.900",
                                  "&:hover": {
                                    backgroundColor: "white.900",
                                  },
                                }
                              : {
                                  py: 1,
                                  px: { xs: 2, md: 3 },
                                  fontWeight: "bold",
                                  borderRadius: 2,
                                  textTransform: "none",
                                  letterSpacing: 1,
                                  color: "white.900",
                                  backgroundColor: "black.600",
                                }
                          }
                        >
                          Learn More
                        </Button>
                      </Grid>
                    </Grid>
                  </Paper>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default TrialPurposeDesk;
