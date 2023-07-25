import React, { useState } from "react";
import { Box, Container, Grid, Paper, Typography } from "@mui/material";

import sectionBg from "../../assets/images/SectionBgArt3Light.svg";
import hungerFreeBlack from "../../assets/images/hunger-free-vect-Dark.png";
import masjidConsBlack from "../../assets/images/masjid-cons-vect-Dark.png";
import saveLifeBlack from "../../assets/images/save-life-vect-Dark.png";

const WhatWeDoMob = () => {
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
          >
            <Grid item>
              <Typography variant="h2" color="black.800" fontWeight="bold">
                What we Do?
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1" color="black.400" fontWeight="medium">
                What we do with your donation?
              </Typography>
            </Grid>

            <Grid item mt={6}>
              <Paper elevation={6} sx={{ borderRadius: 6, p: 4 }}>
                <Grid
                  container
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="center"
                >
                  <Grid item xs={4} textAlign="center">
                    <img
                      src={hungerFreeBlack}
                      alt="hunger-free"
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
                          Make Hunger Free
                        </Typography>
                      </Grid>
                      <Grid item height="105px">
                        <Typography
                          variant="body2"
                          fontWeight="medium"
                          textAlign="justify"
                          color="black.400"
                        >
                          Dummy Text A hunger-free world requires a
                          multi-faceted approach, including addressing the root
                          causes of hunger, improving agricultural practices,
                          and ensuring food security for all.
                        </Typography>
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
                      src={saveLifeBlack}
                      alt="save-life"
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
                          Save a Life
                        </Typography>
                      </Grid>
                      <Grid item height="105px">
                        <Typography
                          variant="body2"
                          fontWeight="medium"
                          textAlign="justify"
                          color="black.400"
                        >
                          Dummy Text "Save a Life" refers to the act of
                          preserving life and preventing harm in times of
                          crisis, and it is a noble and important goal for
                          individuals and communities alike.
                        </Typography>
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
                      src={masjidConsBlack}
                      alt="masjid-construction"
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
                          Mosque Construction
                        </Typography>
                      </Grid>
                      <Grid item height="105px">
                        <Typography
                          variant="body2"
                          fontWeight="medium"
                          textAlign="justify"
                          color="black.400"
                        >
                          Dummy Text The construction of mosques can also be a
                          community effort, with volunteers and funds coming
                          from the local Muslim community.
                        </Typography>
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

export default WhatWeDoMob;
