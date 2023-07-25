import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-scroll";

import sectionBgDesk from "../../assets/images/SectionBgArtDesk.png";
import sectionBgMob from "../../assets/images/SectionBgArtMob.png";

const AboutUs = () => {
  const navigate = useNavigate();
  return (
    <>
      <div id="about_us">
        {/* --- section For Large Displays --- */}
        <Box
          sx={{
            backgroundImage: `url(${sectionBgDesk})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            py: 14,
            display: { xs: "none", md: "flex" },
          }}
        >
          <Container>
            <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="center"
              spacing={1}
              px={12}
            >
              <Grid item>
                <Typography
                  variant="h2"
                  sx={{ color: "white.900", fontWeight: "bold" }}
                >
                  About Us
                </Typography>
              </Grid>
              <Grid item mt={4}>
                <Typography sx={{ color: "white.800", textAlign: "center" }}>
                  SGN is an international Institute. The institute offers a
                  Quran course online at the international level for all
                  Muslims. We are a superb platform for those who don't have any
                  mosque or madrassa in their area to learn how to read Quran or
                  to practice Islam. We aim to form Muslims to read the Holy
                  Quran in the absolute best way.
                </Typography>
              </Grid>
              <Grid item mt={2}>
                <Typography sx={{ color: "white.800", textAlign: "center" }}>
                  We warmly welcome many Muslims and particularly Muslims living
                  within the West to require the primary step in performing this
                  noble act of reading the Holy Quran with our course online.
                  Concentration is particularly important when reading,
                  understanding or memorizing verses or Surahs. Our teachers are
                  capable enough to keep you alert and focused during Quran
                  lessons. To urge students to understand what they're learning
                  or to find out, our teachers ask them questions.
                </Typography>
              </Grid>
              <Grid item mt={4}>
                <Grid
                  container
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                  spacing={3}
                >
                  <Grid item>
                    <Button
                      disableRipple
                      onClick=""
                      sx={{
                        py: 1,
                        px: 3,
                        color: "black.600",
                        fontSize: 15,
                        fontWeight: "bold",
                        textTransform: "none",
                        letterSpacing: 1,
                        border: 2,
                        borderColor: "white.900",
                        backgroundColor: "white.900",
                        borderRadius: 3,
                        "&:hover": {
                          color: "white.900",
                          fontWeight: "medium",
                          background: "transparent",
                        },
                      }}
                    >
                      See Courses
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button
                      disableRipple
                      onClick={() => navigate("/trial")}
                      sx={{
                        py: 1,
                        px: 3,
                        color: "white.900",
                        fontSize: 15,
                        fontWeight: "medium",
                        textTransform: "none",
                        letterSpacing: 1,
                        border: 2,
                        borderRadius: 3,
                        background: "transparent",
                        "&:hover": {
                          color: "black.600",
                          fontWeight: "bold",
                          backgroundColor: "white.900",
                          borderColor: "white.900",
                        },
                      }}
                    >
                      Book a Trial
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Container>
        </Box>

        {/* --- section For small Displays --- */}
        <Box
          sx={{
            backgroundImage: `url(${sectionBgMob})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            py: 6,
            backgroundRepeat: "no-repeat",
            display: { md: "none" },
          }}
        >
          <Container>
            <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="center"
              spacing={1}
              px={2}
            >
              <Grid item>
                <Typography
                  variant="h2"
                  sx={{ color: "white.900", fontWeight: "bold" }}
                >
                  About Us
                </Typography>
              </Grid>
              <Grid item mt={3}>
                <Typography sx={{ color: "white.800", textAlign: "justify" }}>
                  SGN is an international Institute. The institute offers a
                  Quran course online at the international level for all
                  Muslims. We are a superb platform for those who don't have any
                  mosque or madrassa in their area to learn how to read Quran or
                  to practice Islam. We aim to form Muslims to read the Holy
                  Quran in the absolute best way.
                </Typography>
              </Grid>
              <Grid item mt={1}>
                <Typography sx={{ color: "white.800", textAlign: "justify" }}>
                  We warmly welcome many Muslims and particularly Muslims living
                  within the West to require the primary step in performing this
                  noble act of reading the Holy Quran with our course online.
                  Concentration is particularly important when reading,
                  understanding or memorizing verses or Surahs. Our teachers are
                  capable enough to keep you alert and focused during Quran
                  lessons. To urge students to understand what they're learning
                  or to find out, our teachers ask them questions.
                </Typography>
              </Grid>
              <Grid item mt={4}>
                <Grid
                  container
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                  spacing={3}
                >
                  <Grid item>
                    <Link to="courses_home" smooth="true" duration={750}>
                      <Button
                        disableRipple
                        onClick=""
                        sx={{
                          py: 1,
                          px: 2,
                          color: "black.600",
                          fontSize: 15,
                          fontWeight: "bold",
                          textTransform: "none",
                          letterSpacing: 1,
                          border: 2,
                          borderColor: "white.900",
                          backgroundColor: "white.900",
                          borderRadius: 3,
                          "&:hover": {
                            color: "white.900",
                            fontWeight: "medium",
                            background: "transparent",
                          },
                        }}
                      >
                        See Courses
                      </Button>
                    </Link>
                  </Grid>
                  <Grid item>
                    <Button
                      disableRipple
                      onClick=""
                      sx={{
                        py: 1,
                        px: 2,
                        color: "white.900",
                        fontSize: 15,
                        fontWeight: "medium",
                        textTransform: "none",
                        letterSpacing: 1,
                        border: 2,
                        borderRadius: 3,
                        background: "transparent",
                        "&:hover": {
                          color: "black.600",
                          fontWeight: "bold",
                          backgroundColor: "white.900",
                          borderColor: "white.900",
                        },
                      }}
                    >
                      Book a Trial
                    </Button>
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

export default AboutUs;
