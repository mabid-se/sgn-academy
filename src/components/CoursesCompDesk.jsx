import { Box, Button, Container, Grid, Paper, Typography } from "@mui/material";
import React, { useState } from "react";

import sectionBg from "../assets/images/SectionBgArt3Light.svg";
import QuranCoursesBlack from "../assets/images/Quran-courses-black.png";
import QuranCoursesWhite from "../assets/images/Quran-courses-white.png";
import islamicCoursesBlack from "../assets/images/islamic-courses-black.png";
import islamicCoursesWhite from "../assets/images/islamic-courses-white.png";
import academicCoursesBlack from "../assets/images/academic-courses-black.png";
import academicCoursesWhite from "../assets/images/academic-courses-white.png";

const CoursesCompDesk = () => {
  const [hoverQuran, setHoverQuran] = useState(false);
  const [hoverIslamic, setHoverIslamic] = useState(false);
  const [hoverAcademic, setHoverAcademic] = useState(false);

  return (
    <>
      <div id="courses_home" style={{ width: "100%" }}>
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
                  sx={{
                    color: "black.400",
                    fontWeight: "medium",
                    textAlign: "center",
                  }}
                >
                  Explore Our Courses
                </Typography>
              </Grid>
              <Grid item mt={6}>
                <Grid
                  container
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Grid item xs={12} lg={4} px={3}>
                    <Paper
                      onMouseEnter={() => setHoverQuran(true)}
                      onMouseLeave={() => setHoverQuran(false)}
                      elevation={6}
                      sx={{
                        borderRadius: 6,
                        "&:hover": { backgroundColor: "black.600" },
                      }}
                    >
                      <Grid container direction="column" p={4}>
                        <Grid item textAlign="center" sx={{ height: "120px" }}>
                          <img
                            src={
                              hoverQuran ? QuranCoursesWhite : QuranCoursesBlack
                            }
                            alt="Quran-courses"
                            style={{ width: "45%" }}
                          />
                        </Grid>
                        <Grid item mt={2} sx={{ height: "175px" }}>
                          <Grid container direction="column" spacing={1}>
                            <Grid item>
                              <Typography
                                variant="h5"
                                fontWeight="bold"
                                sx={
                                  hoverQuran
                                    ? { color: "white.900" }
                                    : { color: "black.800" }
                                }
                              >
                                Quran Courses
                              </Typography>
                            </Grid>
                            <Grid item>
                              <Typography
                                variant="body2"
                                fontWeight="medium"
                                textAlign="justify"
                                sx={
                                  hoverQuran
                                    ? { color: "white.900" }
                                    : { color: "black.400" }
                                }
                              >
                                We launched a smart interactive platform that
                                offers virtual Quran classes for all Ages.
                                Register now, Select your course, Pay your
                                monthly fee & start to take our online classes.
                              </Typography>
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid item mt={2}>
                          <Button
                            disableRipple
                            onClick=""
                            sx={
                              hoverQuran
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
                  <Grid item xs={12} lg={4} px={3} mt={{ xs: 4, md: 0 }}>
                    <Paper
                      onMouseEnter={() => setHoverIslamic(true)}
                      onMouseLeave={() => setHoverIslamic(false)}
                      elevation={6}
                      sx={{
                        borderRadius: 6,
                        "&:hover": { backgroundColor: "black.600" },
                      }}
                    >
                      <Grid container direction="column" p={4}>
                        <Grid item textAlign="center" sx={{ height: "120px" }}>
                          <img
                            src={
                              hoverIslamic
                                ? islamicCoursesWhite
                                : islamicCoursesBlack
                            }
                            alt="islamic-courses"
                            style={{ width: "40%" }}
                          />
                        </Grid>
                        <Grid item mt={2} sx={{ height: "175px" }}>
                          <Grid container direction="column" spacing={1}>
                            <Grid item>
                              <Typography
                                variant="h5"
                                fontWeight="bold"
                                sx={
                                  hoverIslamic
                                    ? { color: "white.900" }
                                    : { color: "black.800" }
                                }
                              >
                                Islamic Courses
                              </Typography>
                            </Grid>
                            <Grid item>
                              <Typography
                                variant="body2"
                                fontWeight="medium"
                                textAlign="justify"
                                sx={
                                  hoverIslamic
                                    ? { color: "white.900" }
                                    : { color: "black.400" }
                                }
                              >
                                We are offering more than thirty different
                                Islamic courses for Muslim sisters who can take
                                admission from any corner of the globe and
                                attain Islamic knowledge.
                              </Typography>
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid item mt={2}>
                          <Button
                            disableRipple
                            onClick=""
                            sx={
                              hoverIslamic
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
                  <Grid item xs={12} lg={4} px={3} mt={{ xs: 4, md: 0 }}>
                    <Paper
                      onMouseEnter={() => setHoverAcademic(true)}
                      onMouseLeave={() => setHoverAcademic(false)}
                      elevation={6}
                      sx={{
                        borderRadius: 6,
                        "&:hover": { backgroundColor: "black.600" },
                      }}
                    >
                      <Grid container direction="column" p={4}>
                        <Grid item textAlign="center" sx={{ height: "120px" }}>
                          <img
                            src={
                              hoverAcademic
                                ? academicCoursesWhite
                                : academicCoursesBlack
                            }
                            alt="academic-courses"
                            style={{ width: "43%" }}
                          />
                        </Grid>
                        <Grid item mt={2} sx={{ height: "175px" }}>
                          <Grid container direction="column" spacing={1}>
                            <Grid item>
                              <Typography
                                variant="h5"
                                fontWeight="bold"
                                sx={
                                  hoverAcademic
                                    ? { color: "white.900" }
                                    : { color: "black.800" }
                                }
                              >
                                Academic Courses
                              </Typography>
                            </Grid>
                            <Grid item>
                              <Typography
                                variant="body2"
                                fontWeight="medium"
                                textAlign="justify"
                                sx={
                                  hoverAcademic
                                    ? { color: "white.900" }
                                    : { color: "black.400" }
                                }
                              >
                                We offer academic subjects as well including,
                                Math, Islamiyat, Urdu, Science.
                              </Typography>
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid item mt={2}>
                          <Button
                            disableRipple
                            onClick=""
                            sx={
                              hoverAcademic
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
      </div>
    </>
  );
};

export default CoursesCompDesk;
