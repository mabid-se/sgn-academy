import React from "react";

import sectionBg from "../assets/images/SectionBgArt3Light.svg";
import QuranCoursesBlack from "../assets/images/Quran-courses-black.png";
import islamicCoursesBlack from "../assets/images/islamic-courses-black.png";
import academicCoursesBlack from "../assets/images/academic-courses-black.png";

import { Box, Button, Container, Grid, Paper, Typography } from "@mui/material";

const CoursesCompTab = () => {
  return (
    <>
      <div id="courses_home">
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
            >
              <Grid item>
                <Typography variant="h2" color="black.800" fontWeight="bold">
                  Courses
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  variant="body1"
                  color="black.400"
                  fontWeight="medium"
                >
                  Explore Our Courses
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
                        src={QuranCoursesBlack}
                        alt="Quran-courses"
                        style={{ width: "70%" }}
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
                            Quran Courses
                          </Typography>
                        </Grid>
                        <Grid item height="105px">
                          <Typography
                            variant="body2"
                            fontWeight="medium"
                            textAlign="justify"
                            color="black.400"
                          >
                            We launched a smart interactive platform that offers
                            virtual Quran classes for all Ages. Register now,
                            Select your course, Pay your monthly fee & start to
                            take our online classes.
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
                        src={islamicCoursesBlack}
                        alt="islamic-courses"
                        style={{ width: "70%" }}
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
                            Islamic Courses
                          </Typography>
                        </Grid>
                        <Grid item height="105px">
                          <Typography
                            variant="body2"
                            fontWeight="medium"
                            textAlign="justify"
                            color="black.400"
                          >
                            We are offering more than thirty different Islamic
                            courses for Muslim sisters who can take admission
                            from any corner of the globe and attain Islamic
                            knowledge.
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
                        src={academicCoursesBlack}
                        alt="academic-courses"
                        style={{ width: "70%" }}
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
                            Academic Courses
                          </Typography>
                        </Grid>
                        <Grid item height="105px">
                          <Typography
                            variant="body2"
                            fontWeight="medium"
                            textAlign="justify"
                            color="black.400"
                          >
                            We offer academic subjects as well including, Math,
                            Islamiyat, Urdu, Science.
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
      </div>
    </>
  );
};

export default CoursesCompTab;
