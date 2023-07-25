import { Box, Button, Container, Grid, Paper, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import sectionBgDesk from "../../assets/images/SectionBgArtDesk.png";
import sectionBgMob from "../../assets/images/SectionBgArtMob.png";

const HeroSectPricing = () => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState({ id: "divOne" });

  const [hoverPackOne, setHoverPackOne] = useState(false);
  const [hoverPackTwo, setHoverPackTwo] = useState(false);
  const [hoverPackThree, setHoverPackThree] = useState(false);
  const [hoverPackFour, setHoverPackFour] = useState(false);

  useEffect(() => {}, [isActive]);

  const hideShowDiv = (e) => {
    setIsActive({ id: e.target.id });
  };

  return (
    <>
      <Box
        mt={{ xs: 6, md: 10 }}
        py={10}
        sx={{
          backgroundImage: {
            xs: `url(${sectionBgMob})`,
            md: `url(${sectionBgDesk})`,
          },
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
                Pricing
              </Typography>
            </Grid>

            <Grid item mt={1} px={{ xs: 2, md: 8 }}>
              <Typography
                variant="body1"
                sx={{
                  color: "white.600",
                  fontWeight: "medium",
                  textAlign: "center",
                }}
              >
                Choose a plan which feels you easy to start learning
              </Typography>
            </Grid>

            <Grid item mt={5}>
              <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={3}
                sx={{ color: "white.900" }}
              >
                <Grid item sx={{ cursor: "pointer" }}>
                  <Typography
                    id="divOne"
                    variant="h6"
                    onClick={(e) => hideShowDiv(e)}
                    sx={
                      isActive.id === "divOne"
                        ? {
                            fontWeight: "bold",
                            textDecoration: "underline",
                            textUnderlineOffset: 9,
                            textUnderlinePosition: "center",
                            textDecorationThickness: 2,
                          }
                        : { fontWeight: "regular" }
                    }
                  >
                    30 Minutes
                  </Typography>
                </Grid>

                <Grid item sx={{ cursor: "pointer" }}>
                  <Typography
                    id="divTwo"
                    variant="h6"
                    onClick={(e) => hideShowDiv(e)}
                    sx={
                      isActive.id === "divTwo"
                        ? {
                            fontWeight: "bold",
                            textDecoration: "underline",
                            textUnderlineOffset: 9,
                            textUnderlinePosition: "center",
                            textDecorationThickness: 2,
                          }
                        : { fontWeight: "regular" }
                    }
                  >
                    45 Minutes
                  </Typography>
                </Grid>

                <Grid item sx={{ cursor: "pointer" }}>
                  <Typography
                    id="divThree"
                    variant="h6"
                    onClick={(e) => hideShowDiv(e)}
                    sx={
                      isActive.id === "divThree"
                        ? {
                            fontWeight: "bold",
                            textDecoration: "underline",
                            textUnderlineOffset: 9,
                            textUnderlinePosition: "center",
                            textDecorationThickness: 2,
                          }
                        : { fontWeight: "regular" }
                    }
                  >
                    60 Minutes
                  </Typography>
                </Grid>
              </Grid>
            </Grid>

            <Grid item mt={7}>
              <Grid
                sx={
                  isActive.id === "divOne"
                    ? { display: "flex" }
                    : { display: "none" }
                }
              >
                <Grid
                  container
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Grid item xs={12} sm={6} lg={3} px={3}>
                    <Paper
                      elevation={6}
                      onMouseEnter={() => setHoverPackOne(true)}
                      onMouseLeave={() => setHoverPackOne(false)}
                      sx={{
                        borderRadius: 6,
                        marginX: "auto",
                        width: { xs: "80%", sm: "215px" },
                        "&:hover": { backgroundColor: "black.600" },
                      }}
                    >
                      <Grid
                        container
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                        spacing={2}
                        p={4}
                      >
                        <Grid item>
                          <Typography
                            variant="h5"
                            fontWeight="bold"
                            sx={
                              hoverPackOne
                                ? { color: "white.900" }
                                : { color: "black.800" }
                            }
                          >
                            Package 1
                          </Typography>
                        </Grid>
                        <Grid item mt={1}>
                          <Typography
                            variant="h4"
                            fontWeight="bold"
                            sx={
                              hoverPackOne
                                ? { color: "white.900" }
                                : { color: "black.800" }
                            }
                          >
                            $20
                            <span
                              style={{
                                color: "#a9a9a9",
                                fontSize: "18px",
                                fontWeight: 400,
                              }}
                            >
                              /month
                            </span>
                          </Typography>
                        </Grid>
                        <Grid item mt={1}>
                          <Typography
                            variant="subtitle1"
                            sx={
                              hoverPackOne
                                ? { color: "white.900" }
                                : { color: "black.800" }
                            }
                          >
                            <ul
                              style={{
                                listStyle: "none",
                                marginTop: 0,
                                padding: 0,
                                fontWeight: 600,
                              }}
                            >
                              <li style={{ marginTop: 1 }}>
                                2 classes
                                <span
                                  style={{
                                    fontSize: "14px",
                                    fontWeight: 300,
                                    color: "#a9a9a9",
                                  }}
                                >
                                  /weekly
                                </span>
                              </li>
                              <li style={{ marginTop: 1 }}>
                                8 classes
                                <span
                                  style={{
                                    fontSize: "14px",
                                    fontWeight: 300,
                                    color: "#a9a9a9",
                                  }}
                                >
                                  /monthly
                                </span>
                              </li>
                              <li style={{ marginTop: 1 }}>
                                30 minutes
                                <span
                                  style={{
                                    fontSize: "14px",
                                    fontWeight: 300,
                                    color: "#a9a9a9",
                                  }}
                                >
                                  /day
                                </span>
                              </li>
                            </ul>
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Button
                            disableRipple
                            onClick={() => navigate("/trial")}
                            sx={
                              hoverPackOne
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
                            Book a Trial
                          </Button>
                        </Grid>
                      </Grid>
                    </Paper>
                  </Grid>
                  <Grid item xs={12} sm={6} lg={3} mt={{ xs: 6, sm: 0 }} px={3}>
                    <Paper
                      elevation={6}
                      onMouseEnter={() => setHoverPackTwo(true)}
                      onMouseLeave={() => setHoverPackTwo(false)}
                      sx={{
                        borderRadius: 6,
                        marginX: "auto",
                        width: { xs: "80%", sm: "215px" },
                        "&:hover": { backgroundColor: "black.600" },
                      }}
                    >
                      <Grid
                        container
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                        spacing={2}
                        p={4}
                      >
                        <Grid item>
                          <Typography
                            variant="h5"
                            fontWeight="bold"
                            sx={
                              hoverPackTwo
                                ? { color: "white.900" }
                                : { color: "black.800" }
                            }
                          >
                            Package 2
                          </Typography>
                        </Grid>
                        <Grid item mt={1}>
                          <Typography
                            variant="h4"
                            fontWeight="bold"
                            sx={
                              hoverPackTwo
                                ? { color: "white.900" }
                                : { color: "black.800" }
                            }
                          >
                            $30
                            <span
                              style={{
                                color: "#a9a9a9",
                                fontSize: "18px",
                                fontWeight: 400,
                              }}
                            >
                              /month
                            </span>
                          </Typography>
                        </Grid>
                        <Grid item mt={1}>
                          <Typography
                            variant="subtitle1"
                            sx={
                              hoverPackTwo
                                ? { color: "white.900" }
                                : { color: "black.800" }
                            }
                          >
                            <ul
                              style={{
                                listStyle: "none",
                                marginTop: 0,
                                padding: 0,
                                fontWeight: 600,
                              }}
                            >
                              <li style={{ marginTop: 1 }}>
                                3 classes
                                <span
                                  style={{
                                    fontSize: "14px",
                                    fontWeight: 300,
                                    color: "#a9a9a9",
                                  }}
                                >
                                  /weekly
                                </span>
                              </li>
                              <li style={{ marginTop: 1 }}>
                                12 classes
                                <span
                                  style={{
                                    fontSize: "14px",
                                    fontWeight: 300,
                                    color: "#a9a9a9",
                                  }}
                                >
                                  /monthly
                                </span>
                              </li>
                              <li style={{ marginTop: 1 }}>
                                30 minutes
                                <span
                                  style={{
                                    fontSize: "14px",
                                    fontWeight: 300,
                                    color: "#a9a9a9",
                                  }}
                                >
                                  /day
                                </span>
                              </li>
                            </ul>
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Button
                            disableRipple
                            onClick={() => navigate("/trial")}
                            sx={
                              hoverPackTwo
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
                            Book a Trial
                          </Button>
                        </Grid>
                      </Grid>
                    </Paper>
                  </Grid>
                  <Grid item xs={12} sm={6} lg={3} mt={{ xs: 6, lg: 0 }} px={3}>
                    <Paper
                      elevation={6}
                      onMouseEnter={() => setHoverPackThree(true)}
                      onMouseLeave={() => setHoverPackThree(false)}
                      sx={{
                        borderRadius: 6,
                        marginX: "auto",
                        width: { xs: "80%", sm: "215px" },
                        "&:hover": { backgroundColor: "black.600" },
                      }}
                    >
                      <Grid
                        container
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                        spacing={2}
                        p={4}
                      >
                        <Grid item>
                          <Typography
                            variant="h5"
                            fontWeight="bold"
                            sx={
                              hoverPackThree
                                ? { color: "white.900" }
                                : { color: "black.800" }
                            }
                          >
                            Package 3
                          </Typography>
                        </Grid>
                        <Grid item mt={1}>
                          <Typography
                            variant="h4"
                            fontWeight="bold"
                            sx={
                              hoverPackThree
                                ? { color: "white.900" }
                                : { color: "black.800" }
                            }
                          >
                            $40
                            <span
                              style={{
                                color: "#a9a9a9",
                                fontSize: "18px",
                                fontWeight: 400,
                              }}
                            >
                              /month
                            </span>
                          </Typography>
                        </Grid>
                        <Grid item mt={1}>
                          <Typography
                            variant="subtitle1"
                            sx={
                              hoverPackThree
                                ? { color: "white.900" }
                                : { color: "black.800" }
                            }
                          >
                            <ul
                              style={{
                                listStyle: "none",
                                marginTop: 0,
                                padding: 0,
                                fontWeight: 600,
                              }}
                            >
                              <li style={{ marginTop: 1 }}>
                                4 classes
                                <span
                                  style={{
                                    fontSize: "14px",
                                    fontWeight: 300,
                                    color: "#a9a9a9",
                                  }}
                                >
                                  /weekly
                                </span>
                              </li>
                              <li style={{ marginTop: 1 }}>
                                16 classes
                                <span
                                  style={{
                                    fontSize: "14px",
                                    fontWeight: 300,
                                    color: "#a9a9a9",
                                  }}
                                >
                                  /monthly
                                </span>
                              </li>
                              <li style={{ marginTop: 1 }}>
                                30 minutes
                                <span
                                  style={{
                                    fontSize: "14px",
                                    fontWeight: 300,
                                    color: "#a9a9a9",
                                  }}
                                >
                                  /day
                                </span>
                              </li>
                            </ul>
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Button
                            disableRipple
                            onClick={() => navigate("/trial")}
                            sx={
                              hoverPackThree
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
                            Book a Trial
                          </Button>
                        </Grid>
                      </Grid>
                    </Paper>
                  </Grid>
                  <Grid item xs={12} sm={6} lg={3} mt={{ xs: 6, lg: 0 }} px={3}>
                    <Paper
                      elevation={6}
                      onMouseEnter={() => setHoverPackFour(true)}
                      onMouseLeave={() => setHoverPackFour(false)}
                      sx={{
                        borderRadius: 6,
                        marginX: "auto",
                        width: { xs: "80%", sm: "215px" },
                        "&:hover": { backgroundColor: "black.600" },
                      }}
                    >
                      <Grid
                        container
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                        spacing={2}
                        p={4}
                      >
                        <Grid item>
                          <Typography
                            variant="h5"
                            fontWeight="bold"
                            sx={
                              hoverPackFour
                                ? { color: "white.900" }
                                : { color: "black.800" }
                            }
                          >
                            Package 4
                          </Typography>
                        </Grid>
                        <Grid item mt={1}>
                          <Typography
                            variant="h4"
                            fontWeight="bold"
                            sx={
                              hoverPackFour
                                ? { color: "white.900" }
                                : { color: "black.800" }
                            }
                          >
                            $50
                            <span
                              style={{
                                color: "#a9a9a9",
                                fontSize: "18px",
                                fontWeight: 400,
                              }}
                            >
                              /month
                            </span>
                          </Typography>
                        </Grid>
                        <Grid item mt={1}>
                          <Typography
                            variant="subtitle1"
                            sx={
                              hoverPackFour
                                ? { color: "white.900" }
                                : { color: "black.800" }
                            }
                          >
                            <ul
                              style={{
                                listStyle: "none",
                                marginTop: 0,
                                padding: 0,
                                fontWeight: 600,
                              }}
                            >
                              <li style={{ marginTop: 1 }}>
                                5 classes
                                <span
                                  style={{
                                    fontSize: "14px",
                                    fontWeight: 300,
                                    color: "#a9a9a9",
                                  }}
                                >
                                  /weekly
                                </span>
                              </li>
                              <li style={{ marginTop: 1 }}>
                                20 classes
                                <span
                                  style={{
                                    fontSize: "14px",
                                    fontWeight: 300,
                                    color: "#a9a9a9",
                                  }}
                                >
                                  /monthly
                                </span>
                              </li>
                              <li style={{ marginTop: 1 }}>
                                30 minutes
                                <span
                                  style={{
                                    fontSize: "14px",
                                    fontWeight: 300,
                                    color: "#a9a9a9",
                                  }}
                                >
                                  /day
                                </span>
                              </li>
                            </ul>
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Button
                            disableRipple
                            onClick={() => navigate("/trial")}
                            sx={
                              hoverPackFour
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
                            Book a Trial
                          </Button>
                        </Grid>
                      </Grid>
                    </Paper>
                  </Grid>
                </Grid>
              </Grid>

              <Grid
                sx={
                  isActive.id === "divTwo"
                    ? { display: "flex" }
                    : { display: "none" }
                }
              >
                <Grid
                  container
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Grid item xs={12} sm={6} lg={3} px={3}>
                    <Paper
                      elevation={6}
                      onMouseEnter={() => setHoverPackOne(true)}
                      onMouseLeave={() => setHoverPackOne(false)}
                      sx={{
                        borderRadius: 6,
                        marginX: "auto",
                        width: { xs: "80%", sm: "215px" },
                        "&:hover": { backgroundColor: "black.600" },
                      }}
                    >
                      <Grid
                        container
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                        spacing={2}
                        p={4}
                      >
                        <Grid item>
                          <Typography
                            variant="h5"
                            fontWeight="bold"
                            sx={
                              hoverPackOne
                                ? { color: "white.900" }
                                : { color: "black.800" }
                            }
                          >
                            Package 1
                          </Typography>
                        </Grid>
                        <Grid item mt={1}>
                          <Typography
                            variant="h4"
                            fontWeight="bold"
                            sx={
                              hoverPackOne
                                ? { color: "white.900" }
                                : { color: "black.800" }
                            }
                          >
                            $30
                            <span
                              style={{
                                color: "#a9a9a9",
                                fontSize: "18px",
                                fontWeight: 400,
                              }}
                            >
                              /month
                            </span>
                          </Typography>
                        </Grid>
                        <Grid item mt={1}>
                          <Typography
                            variant="subtitle1"
                            sx={
                              hoverPackOne
                                ? { color: "white.900" }
                                : { color: "black.800" }
                            }
                          >
                            <ul
                              style={{
                                listStyle: "none",
                                marginTop: 0,
                                padding: 0,
                                fontWeight: 600,
                              }}
                            >
                              <li style={{ marginTop: 1 }}>
                                2 classes
                                <span
                                  style={{
                                    fontSize: "14px",
                                    fontWeight: 300,
                                    color: "#a9a9a9",
                                  }}
                                >
                                  /weekly
                                </span>
                              </li>
                              <li style={{ marginTop: 1 }}>
                                8 classes
                                <span
                                  style={{
                                    fontSize: "14px",
                                    fontWeight: 300,
                                    color: "#a9a9a9",
                                  }}
                                >
                                  /monthly
                                </span>
                              </li>
                              <li style={{ marginTop: 1 }}>
                                45 minutes
                                <span
                                  style={{
                                    fontSize: "14px",
                                    fontWeight: 300,
                                    color: "#a9a9a9",
                                  }}
                                >
                                  /day
                                </span>
                              </li>
                            </ul>
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Button
                            disableRipple
                            onClick={() => navigate("/trial")}
                            sx={
                              hoverPackOne
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
                            Book a Trial
                          </Button>
                        </Grid>
                      </Grid>
                    </Paper>
                  </Grid>
                  <Grid item xs={12} sm={6} lg={3} mt={{ xs: 6, sm: 0 }} px={3}>
                    <Paper
                      elevation={6}
                      onMouseEnter={() => setHoverPackTwo(true)}
                      onMouseLeave={() => setHoverPackTwo(false)}
                      sx={{
                        borderRadius: 6,
                        marginX: "auto",
                        width: { xs: "80%", sm: "215px" },
                        "&:hover": { backgroundColor: "black.600" },
                      }}
                    >
                      <Grid
                        container
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                        spacing={2}
                        p={4}
                      >
                        <Grid item>
                          <Typography
                            variant="h5"
                            fontWeight="bold"
                            sx={
                              hoverPackTwo
                                ? { color: "white.900" }
                                : { color: "black.800" }
                            }
                          >
                            Package 2
                          </Typography>
                        </Grid>
                        <Grid item mt={1}>
                          <Typography
                            variant="h4"
                            fontWeight="bold"
                            sx={
                              hoverPackTwo
                                ? { color: "white.900" }
                                : { color: "black.800" }
                            }
                          >
                            $45
                            <span
                              style={{
                                color: "#a9a9a9",
                                fontSize: "18px",
                                fontWeight: 400,
                              }}
                            >
                              /month
                            </span>
                          </Typography>
                        </Grid>
                        <Grid item mt={1}>
                          <Typography
                            variant="subtitle1"
                            sx={
                              hoverPackTwo
                                ? { color: "white.900" }
                                : { color: "black.800" }
                            }
                          >
                            <ul
                              style={{
                                listStyle: "none",
                                marginTop: 0,
                                padding: 0,
                                fontWeight: 600,
                              }}
                            >
                              <li style={{ marginTop: 1 }}>
                                3 classes
                                <span
                                  style={{
                                    fontSize: "14px",
                                    fontWeight: 300,
                                    color: "#a9a9a9",
                                  }}
                                >
                                  /weekly
                                </span>
                              </li>
                              <li style={{ marginTop: 1 }}>
                                12 classes
                                <span
                                  style={{
                                    fontSize: "14px",
                                    fontWeight: 300,
                                    color: "#a9a9a9",
                                  }}
                                >
                                  /monthly
                                </span>
                              </li>
                              <li style={{ marginTop: 1 }}>
                                45 minutes
                                <span
                                  style={{
                                    fontSize: "14px",
                                    fontWeight: 300,
                                    color: "#a9a9a9",
                                  }}
                                >
                                  /day
                                </span>
                              </li>
                            </ul>
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Button
                            disableRipple
                            onClick={() => navigate("/trial")}
                            sx={
                              hoverPackTwo
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
                            Book a Trial
                          </Button>
                        </Grid>
                      </Grid>
                    </Paper>
                  </Grid>
                  <Grid item xs={12} sm={6} lg={3} mt={{ xs: 6, lg: 0 }} px={3}>
                    <Paper
                      elevation={6}
                      onMouseEnter={() => setHoverPackThree(true)}
                      onMouseLeave={() => setHoverPackThree(false)}
                      sx={{
                        borderRadius: 6,
                        marginX: "auto",
                        width: { xs: "80%", sm: "215px" },
                        "&:hover": { backgroundColor: "black.600" },
                      }}
                    >
                      <Grid
                        container
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                        spacing={2}
                        p={4}
                      >
                        <Grid item>
                          <Typography
                            variant="h5"
                            fontWeight="bold"
                            sx={
                              hoverPackThree
                                ? { color: "white.900" }
                                : { color: "black.800" }
                            }
                          >
                            Package 3
                          </Typography>
                        </Grid>
                        <Grid item mt={1}>
                          <Typography
                            variant="h4"
                            fontWeight="bold"
                            sx={
                              hoverPackThree
                                ? { color: "white.900" }
                                : { color: "black.800" }
                            }
                          >
                            $60
                            <span
                              style={{
                                color: "#a9a9a9",
                                fontSize: "18px",
                                fontWeight: 400,
                              }}
                            >
                              /month
                            </span>
                          </Typography>
                        </Grid>
                        <Grid item mt={1}>
                          <Typography
                            variant="subtitle1"
                            sx={
                              hoverPackThree
                                ? { color: "white.900" }
                                : { color: "black.800" }
                            }
                          >
                            <ul
                              style={{
                                listStyle: "none",
                                marginTop: 0,
                                padding: 0,
                                fontWeight: 600,
                              }}
                            >
                              <li style={{ marginTop: 1 }}>
                                4 classes
                                <span
                                  style={{
                                    fontSize: "14px",
                                    fontWeight: 300,
                                    color: "#a9a9a9",
                                  }}
                                >
                                  /weekly
                                </span>
                              </li>
                              <li style={{ marginTop: 1 }}>
                                16 classes
                                <span
                                  style={{
                                    fontSize: "14px",
                                    fontWeight: 300,
                                    color: "#a9a9a9",
                                  }}
                                >
                                  /monthly
                                </span>
                              </li>
                              <li style={{ marginTop: 1 }}>
                                45 minutes
                                <span
                                  style={{
                                    fontSize: "14px",
                                    fontWeight: 300,
                                    color: "#a9a9a9",
                                  }}
                                >
                                  /day
                                </span>
                              </li>
                            </ul>
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Button
                            disableRipple
                            onClick={() => navigate("/trial")}
                            sx={
                              hoverPackThree
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
                            Book a Trial
                          </Button>
                        </Grid>
                      </Grid>
                    </Paper>
                  </Grid>
                  <Grid item xs={12} sm={6} lg={3} mt={{ xs: 6, lg: 0 }} px={3}>
                    <Paper
                      elevation={6}
                      onMouseEnter={() => setHoverPackFour(true)}
                      onMouseLeave={() => setHoverPackFour(false)}
                      sx={{
                        borderRadius: 6,
                        marginX: "auto",
                        width: { xs: "80%", sm: "215px" },
                        "&:hover": { backgroundColor: "black.600" },
                      }}
                    >
                      <Grid
                        container
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                        spacing={2}
                        p={4}
                      >
                        <Grid item>
                          <Typography
                            variant="h5"
                            fontWeight="bold"
                            sx={
                              hoverPackFour
                                ? { color: "white.900" }
                                : { color: "black.800" }
                            }
                          >
                            Package 4
                          </Typography>
                        </Grid>
                        <Grid item mt={1}>
                          <Typography
                            variant="h4"
                            fontWeight="bold"
                            sx={
                              hoverPackFour
                                ? { color: "white.900" }
                                : { color: "black.800" }
                            }
                          >
                            $75
                            <span
                              style={{
                                color: "#a9a9a9",
                                fontSize: "18px",
                                fontWeight: 400,
                              }}
                            >
                              /month
                            </span>
                          </Typography>
                        </Grid>
                        <Grid item mt={1}>
                          <Typography
                            variant="subtitle1"
                            sx={
                              hoverPackFour
                                ? { color: "white.900" }
                                : { color: "black.800" }
                            }
                          >
                            <ul
                              style={{
                                listStyle: "none",
                                marginTop: 0,
                                padding: 0,
                                fontWeight: 600,
                              }}
                            >
                              <li style={{ marginTop: 1 }}>
                                5 classes
                                <span
                                  style={{
                                    fontSize: "14px",
                                    fontWeight: 300,
                                    color: "#a9a9a9",
                                  }}
                                >
                                  /weekly
                                </span>
                              </li>
                              <li style={{ marginTop: 1 }}>
                                20 classes
                                <span
                                  style={{
                                    fontSize: "14px",
                                    fontWeight: 300,
                                    color: "#a9a9a9",
                                  }}
                                >
                                  /monthly
                                </span>
                              </li>
                              <li style={{ marginTop: 1 }}>
                                45 minutes
                                <span
                                  style={{
                                    fontSize: "14px",
                                    fontWeight: 300,
                                    color: "#a9a9a9",
                                  }}
                                >
                                  /day
                                </span>
                              </li>
                            </ul>
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Button
                            disableRipple
                            onClick={() => navigate("/trial")}
                            sx={
                              hoverPackFour
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
                            Book a Trial
                          </Button>
                        </Grid>
                      </Grid>
                    </Paper>
                  </Grid>
                </Grid>
              </Grid>

              <Grid
                sx={
                  isActive.id === "divThree"
                    ? { display: "flex" }
                    : { display: "none" }
                }
              >
                <Grid
                  container
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Grid item xs={12} sm={6} lg={3} px={3}>
                    <Paper
                      elevation={6}
                      onMouseEnter={() => setHoverPackOne(true)}
                      onMouseLeave={() => setHoverPackOne(false)}
                      sx={{
                        borderRadius: 6,
                        marginX: "auto",
                        width: { xs: "80%", sm: "215px" },
                        "&:hover": { backgroundColor: "black.600" },
                      }}
                    >
                      <Grid
                        container
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                        spacing={2}
                        p={4}
                      >
                        <Grid item>
                          <Typography
                            variant="h5"
                            fontWeight="bold"
                            sx={
                              hoverPackOne
                                ? { color: "white.900" }
                                : { color: "black.800" }
                            }
                          >
                            Package 1
                          </Typography>
                        </Grid>
                        <Grid item mt={1}>
                          <Typography
                            variant="h4"
                            fontWeight="bold"
                            sx={
                              hoverPackOne
                                ? { color: "white.900" }
                                : { color: "black.800" }
                            }
                          >
                            $40
                            <span
                              style={{
                                color: "#a9a9a9",
                                fontSize: "18px",
                                fontWeight: 400,
                              }}
                            >
                              /month
                            </span>
                          </Typography>
                        </Grid>
                        <Grid item mt={1}>
                          <Typography
                            variant="subtitle1"
                            sx={
                              hoverPackOne
                                ? { color: "white.900" }
                                : { color: "black.800" }
                            }
                          >
                            <ul
                              style={{
                                listStyle: "none",
                                marginTop: 0,
                                padding: 0,
                                fontWeight: 600,
                              }}
                            >
                              <li style={{ marginTop: 1 }}>
                                2 classes
                                <span
                                  style={{
                                    fontSize: "14px",
                                    fontWeight: 300,
                                    color: "#a9a9a9",
                                  }}
                                >
                                  /weekly
                                </span>
                              </li>
                              <li style={{ marginTop: 1 }}>
                                8 classes
                                <span
                                  style={{
                                    fontSize: "14px",
                                    fontWeight: 300,
                                    color: "#a9a9a9",
                                  }}
                                >
                                  /monthly
                                </span>
                              </li>
                              <li style={{ marginTop: 1 }}>
                                60 minutes
                                <span
                                  style={{
                                    fontSize: "14px",
                                    fontWeight: 300,
                                    color: "#a9a9a9",
                                  }}
                                >
                                  /day
                                </span>
                              </li>
                            </ul>
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Button
                            disableRipple
                            onClick={() => navigate("/trial")}
                            sx={
                              hoverPackOne
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
                            Book a Trial
                          </Button>
                        </Grid>
                      </Grid>
                    </Paper>
                  </Grid>
                  <Grid item xs={12} sm={6} lg={3} mt={{ xs: 6, sm: 0 }} px={3}>
                    <Paper
                      elevation={6}
                      onMouseEnter={() => setHoverPackTwo(true)}
                      onMouseLeave={() => setHoverPackTwo(false)}
                      sx={{
                        borderRadius: 6,
                        marginX: "auto",
                        width: { xs: "80%", sm: "215px" },
                        "&:hover": { backgroundColor: "black.600" },
                      }}
                    >
                      <Grid
                        container
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                        spacing={2}
                        p={4}
                      >
                        <Grid item>
                          <Typography
                            variant="h5"
                            fontWeight="bold"
                            sx={
                              hoverPackTwo
                                ? { color: "white.900" }
                                : { color: "black.800" }
                            }
                          >
                            Package 2
                          </Typography>
                        </Grid>
                        <Grid item mt={1}>
                          <Typography
                            variant="h4"
                            fontWeight="bold"
                            sx={
                              hoverPackTwo
                                ? { color: "white.900" }
                                : { color: "black.800" }
                            }
                          >
                            $60
                            <span
                              style={{
                                color: "#a9a9a9",
                                fontSize: "18px",
                                fontWeight: 400,
                              }}
                            >
                              /month
                            </span>
                          </Typography>
                        </Grid>
                        <Grid item mt={1}>
                          <Typography
                            variant="subtitle1"
                            sx={
                              hoverPackTwo
                                ? { color: "white.900" }
                                : { color: "black.800" }
                            }
                          >
                            <ul
                              style={{
                                listStyle: "none",
                                marginTop: 0,
                                padding: 0,
                                fontWeight: 600,
                              }}
                            >
                              <li style={{ marginTop: 1 }}>
                                3 classes
                                <span
                                  style={{
                                    fontSize: "14px",
                                    fontWeight: 300,
                                    color: "#a9a9a9",
                                  }}
                                >
                                  /weekly
                                </span>
                              </li>
                              <li style={{ marginTop: 1 }}>
                                12 classes
                                <span
                                  style={{
                                    fontSize: "14px",
                                    fontWeight: 300,
                                    color: "#a9a9a9",
                                  }}
                                >
                                  /monthly
                                </span>
                              </li>
                              <li style={{ marginTop: 1 }}>
                                60 minutes
                                <span
                                  style={{
                                    fontSize: "14px",
                                    fontWeight: 300,
                                    color: "#a9a9a9",
                                  }}
                                >
                                  /day
                                </span>
                              </li>
                            </ul>
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Button
                            disableRipple
                            onClick={() => navigate("/trial")}
                            sx={
                              hoverPackTwo
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
                            Book a Trial
                          </Button>
                        </Grid>
                      </Grid>
                    </Paper>
                  </Grid>
                  <Grid item xs={12} sm={6} lg={3} mt={{ xs: 6, lg: 0 }} px={3}>
                    <Paper
                      elevation={6}
                      onMouseEnter={() => setHoverPackThree(true)}
                      onMouseLeave={() => setHoverPackThree(false)}
                      sx={{
                        borderRadius: 6,
                        marginX: "auto",
                        width: { xs: "80%", sm: "215px" },
                        "&:hover": { backgroundColor: "black.600" },
                      }}
                    >
                      <Grid
                        container
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                        spacing={2}
                        p={4}
                      >
                        <Grid item>
                          <Typography
                            variant="h5"
                            fontWeight="bold"
                            sx={
                              hoverPackThree
                                ? { color: "white.900" }
                                : { color: "black.800" }
                            }
                          >
                            Package 3
                          </Typography>
                        </Grid>
                        <Grid item mt={1}>
                          <Typography
                            variant="h4"
                            fontWeight="bold"
                            sx={
                              hoverPackThree
                                ? { color: "white.900" }
                                : { color: "black.800" }
                            }
                          >
                            $80
                            <span
                              style={{
                                color: "#a9a9a9",
                                fontSize: "18px",
                                fontWeight: 400,
                              }}
                            >
                              /month
                            </span>
                          </Typography>
                        </Grid>
                        <Grid item mt={1}>
                          <Typography
                            variant="subtitle1"
                            sx={
                              hoverPackThree
                                ? { color: "white.900" }
                                : { color: "black.800" }
                            }
                          >
                            <ul
                              style={{
                                listStyle: "none",
                                marginTop: 0,
                                padding: 0,
                                fontWeight: 600,
                              }}
                            >
                              <li style={{ marginTop: 1 }}>
                                4 classes
                                <span
                                  style={{
                                    fontSize: "14px",
                                    fontWeight: 300,
                                    color: "#a9a9a9",
                                  }}
                                >
                                  /weekly
                                </span>
                              </li>
                              <li style={{ marginTop: 1 }}>
                                16 classes
                                <span
                                  style={{
                                    fontSize: "14px",
                                    fontWeight: 300,
                                    color: "#a9a9a9",
                                  }}
                                >
                                  /monthly
                                </span>
                              </li>
                              <li style={{ marginTop: 1 }}>
                                60 minutes
                                <span
                                  style={{
                                    fontSize: "14px",
                                    fontWeight: 300,
                                    color: "#a9a9a9",
                                  }}
                                >
                                  /day
                                </span>
                              </li>
                            </ul>
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Button
                            disableRipple
                            onClick={() => navigate("/trial")}
                            sx={
                              hoverPackThree
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
                            Book a Trial
                          </Button>
                        </Grid>
                      </Grid>
                    </Paper>
                  </Grid>
                  <Grid item xs={12} sm={6} lg={3} mt={{ xs: 6, lg: 0 }} px={3}>
                    <Paper
                      elevation={6}
                      onMouseEnter={() => setHoverPackFour(true)}
                      onMouseLeave={() => setHoverPackFour(false)}
                      sx={{
                        borderRadius: 6,
                        marginX: "auto",
                        width: { xs: "80%", sm: "215px" },
                        "&:hover": { backgroundColor: "black.600" },
                      }}
                    >
                      <Grid
                        container
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                        spacing={2}
                        p={4}
                      >
                        <Grid item>
                          <Typography
                            variant="h5"
                            fontWeight="bold"
                            sx={
                              hoverPackFour
                                ? { color: "white.900" }
                                : { color: "black.800" }
                            }
                          >
                            Package 4
                          </Typography>
                        </Grid>
                        <Grid item mt={1}>
                          <Typography
                            variant="h4"
                            fontWeight="bold"
                            sx={
                              hoverPackFour
                                ? { color: "white.900" }
                                : { color: "black.800" }
                            }
                          >
                            $100
                            <span
                              style={{
                                color: "#a9a9a9",
                                fontSize: "18px",
                                fontWeight: 400,
                              }}
                            >
                              /month
                            </span>
                          </Typography>
                        </Grid>
                        <Grid item mt={1}>
                          <Typography
                            variant="subtitle1"
                            sx={
                              hoverPackFour
                                ? { color: "white.900" }
                                : { color: "black.800" }
                            }
                          >
                            <ul
                              style={{
                                listStyle: "none",
                                marginTop: 0,
                                padding: 0,
                                fontWeight: 600,
                              }}
                            >
                              <li style={{ marginTop: 1 }}>
                                5 classes
                                <span
                                  style={{
                                    fontSize: "14px",
                                    fontWeight: 300,
                                    color: "#a9a9a9",
                                  }}
                                >
                                  /weekly
                                </span>
                              </li>
                              <li style={{ marginTop: 1 }}>
                                20 classes
                                <span
                                  style={{
                                    fontSize: "14px",
                                    fontWeight: 300,
                                    color: "#a9a9a9",
                                  }}
                                >
                                  /monthly
                                </span>
                              </li>
                              <li style={{ marginTop: 1 }}>
                                60 minutes
                                <span
                                  style={{
                                    fontSize: "14px",
                                    fontWeight: 300,
                                    color: "#a9a9a9",
                                  }}
                                >
                                  /day
                                </span>
                              </li>
                            </ul>
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Button
                            disableRipple
                            onClick={() => navigate("/trial")}
                            sx={
                              hoverPackFour
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
                            Book a Trial
                          </Button>
                        </Grid>
                      </Grid>
                    </Paper>
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

export default HeroSectPricing;
