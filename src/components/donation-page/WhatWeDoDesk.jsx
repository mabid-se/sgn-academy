import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import React, { useState } from "react";

import sectionBg from "../../assets/images/SectionBgArt3Light.svg";
import hungerFreeBlack from "../../assets/images/hunger-free-vect-Dark.png";
import hungerFreeLight from "../../assets/images/hunger-free-vect-light.png";
import masjidConsBlack from "../../assets/images/masjid-cons-vect-Dark.png";
import masjidConsLight from "../../assets/images/masjid-cons-vect-light.png";
import saveLifeBlack from "../../assets/images/save-life-vect-Dark.png";
import saveLifeLight from "../../assets/images/save-life-vect-light.png";

const WhatWeDoDesk = () => {
  const [hoverHungerFree, setHoverHungerFree] = useState(false);
  const [hoverSaveLife, setHoverSaveLife] = useState(false);
  const [hoverMasjidCons, setHoverMasjidCons] = useState(false);

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
              <Typography
                variant="body1"
                sx={{
                  color: "black.400",
                  fontWeight: "medium",
                  textAlign: "center",
                }}
              >
                What we do with your donation?
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
                    onMouseEnter={() => setHoverHungerFree(true)}
                    onMouseLeave={() => setHoverHungerFree(false)}
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
                            hoverHungerFree ? hungerFreeLight : hungerFreeBlack
                          }
                          alt="hunger-free"
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
                                hoverHungerFree
                                  ? { color: "white.900" }
                                  : { color: "black.800" }
                              }
                            >
                              Make Hunger Free
                            </Typography>
                          </Grid>
                          <Grid item>
                            <Typography
                              variant="body2"
                              fontWeight="medium"
                              textAlign="justify"
                              sx={
                                hoverHungerFree
                                  ? { color: "white.900" }
                                  : { color: "black.400" }
                              }
                            >
                              Dummy Text A hunger-free world requires a
                              multi-faceted approach, including addressing the
                              root causes of hunger, improving agricultural
                              practices, and ensuring food security for all.
                            </Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Paper>
                </Grid>
                <Grid item xs={12} lg={4} px={3} mt={{ xs: 4, md: 0 }}>
                  <Paper
                    onMouseEnter={() => setHoverSaveLife(true)}
                    onMouseLeave={() => setHoverSaveLife(false)}
                    elevation={6}
                    sx={{
                      borderRadius: 6,
                      "&:hover": { backgroundColor: "black.600" },
                    }}
                  >
                    <Grid container direction="column" p={4}>
                      <Grid item textAlign="center" sx={{ height: "120px" }}>
                        <img
                          src={hoverSaveLife ? saveLifeLight : saveLifeBlack}
                          alt="save-a-life"
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
                                hoverSaveLife
                                  ? { color: "white.900" }
                                  : { color: "black.800" }
                              }
                            >
                              Save A Life
                            </Typography>
                          </Grid>
                          <Grid item>
                            <Typography
                              variant="body2"
                              fontWeight="medium"
                              textAlign="justify"
                              sx={
                                hoverSaveLife
                                  ? { color: "white.900" }
                                  : { color: "black.400" }
                              }
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
                <Grid item xs={12} lg={4} px={3} mt={{ xs: 4, md: 0 }}>
                  <Paper
                    onMouseEnter={() => setHoverMasjidCons(true)}
                    onMouseLeave={() => setHoverMasjidCons(false)}
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
                            hoverMasjidCons ? masjidConsLight : masjidConsBlack
                          }
                          alt="mosque-construction"
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
                                hoverMasjidCons
                                  ? { color: "white.900" }
                                  : { color: "black.800" }
                              }
                            >
                              Mosque Construction
                            </Typography>
                          </Grid>
                          <Grid item>
                            <Typography
                              variant="body2"
                              fontWeight="medium"
                              textAlign="justify"
                              sx={
                                hoverMasjidCons
                                  ? { color: "white.900" }
                                  : { color: "black.400" }
                              }
                            >
                              Dummy Text The construction of mosques can also be
                              a community effort, with volunteers and funds
                              coming from the local Muslim community.
                            </Typography>
                          </Grid>
                        </Grid>
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

export default WhatWeDoDesk;
