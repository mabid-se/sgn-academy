import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";

import { Favorite } from "@mui/icons-material";

import bgArt from "../../assets/images/SectionBgArt2.png";
import donationImg from "../../assets/images/Donation-hero.png";

const HeroSectDonate = () => {
  return (
    <>
      <Box
        sx={{
          width: "100%",
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
                  <Typography variant="h2" color="black.800" fontWeight={300}>
                    Those who spend in
                    <br />
                    <span style={{ fontWeight: "900" }}>CHARITY&nbsp;</span>
                    will be
                    <br />
                    <span style={{ fontWeight: 800 }}>RICHLY&nbsp;</span>
                    rewarded
                  </Typography>
                </Grid>
                <Grid item mt={4}>
                  <Button
                    disableRipple
                    // onClick={() => navigate("/pricing")}
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
                    endIcon={<Favorite />}
                  >
                    Donate Us
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid item md={5} textAlign="center" pl={{ xs: 0, md: 10 }}>
              <Grid display={{ xs: "flex", md: "none" }}>
                <img
                  src={donationImg}
                  alt="Quran-e-Pak"
                  style={{ width: "100%" }}
                />
              </Grid>
              <Grid display={{ xs: "none", md: "flex" }}>
                <img
                  src={donationImg}
                  alt="Quran-e-Pak"
                  style={{ marginLeft: 95, width: "100%" }}
                />
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default HeroSectDonate;
