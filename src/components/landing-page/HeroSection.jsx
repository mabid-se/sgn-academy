import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import QuranR from "../../assets/images/QuranonRail.png";
import bgArt from "../../assets/images/SectionBgArt2.png";

const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <>
      <Box
        sx={{
          mt: 10,
          py: 10,
          backgroundImage: `url(${bgArt})`,
          backgroundSize: "contain",
          backgroundPosition: { xs: "top center", md: "center right" },
          backgroundRepeat: "no-repeat",
        }}
      >
        <Container>
          <Grid
            container
            direction={{ xs: "column-reverse", md: "row" }}
            justifyContent="center"
            alignItems="center"
            px={{ xs: 2, md: 3 }}
          >
            <Grid item md={7}>
              <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="flex-start"
              >
                <Grid item mt={{ xs: 6, md: 0 }}>
                  <Typography
                    variant="h1"
                    color="black.800"
                    fontWeight="regular"
                  >
                    SGN
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography
                    variant="h1"
                    color="black.800"
                    fontWeight="bolder"
                  >
                    ACADEMY
                  </Typography>
                </Grid>
                <Grid item mt={1}>
                  <Typography
                    variant="h5"
                    color="black.400"
                    fontWeight="regular"
                  >
                    Know the Real Tafseer of Quran
                  </Typography>
                </Grid>
                <Grid item mt={4}>
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
                        onClick={() => navigate("/pricing")}
                        sx={{
                          py: 1,
                          px: { xs: 1, md: 3 },
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
                        See Packages
                      </Button>
                    </Grid>
                    <Grid item>
                      <Button
                        disableRipple
                        onClick={() => navigate("/trial")}
                        sx={{
                          py: 1,
                          px: { xs: 2, md: 3 },
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
            <Grid item md={5} textAlign="center" px={2}>
              <img
                src={QuranR}
                alt="Quran-e-Pak"
                style={{
                  width: "100%",
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default HeroSection;
