import { Box, Grid, Link, Typography } from "@mui/material";
import React from "react";

import ytLogo from "../assets/images/brands/youtubeDark.png";
import inLogo from "../assets/images/brands/linkedinDark.png";
import fbLogo from "../assets/images/brands/facebookDark.png";
import igLogo from "../assets/images/brands/instagramDark.png";

const MainFooter = () => {
  return (
    <>
      <Box sx={{ py: 4, px: { xs: 2, md: 8 } }}>
        <Grid container direction="row">
          <Grid item xs={12} md={4} px={2}>
            <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="flex-start"
              spacing={1}
            >
              {/* --- Heading --- */}
              <Grid item>
                <Typography variant="h3" color="black.800" fontWeight="bold">
                  SGN Academy
                </Typography>
                <Typography
                  variant="body2"
                  color="black.600"
                  fontWeight="regular"
                >
                  We value a student's growth and quality.
                </Typography>
              </Grid>
              {/* --- social icons --- */}
              <Grid item my={{ xs: 1, md: 2 }}>
                <Grid container direction="row" spacing={1}>
                  <Grid item xs={3}>
                    <Link onClick="" sx={{ cursor: "pointer" }}>
                      <img
                        src={ytLogo}
                        alt="youtube-dark"
                        style={{ width: "55%" }}
                      />
                    </Link>
                  </Grid>
                  <Grid item xs={3}>
                    <Link onClick="" sx={{ cursor: "pointer" }}>
                      <img
                        src={inLogo}
                        alt="linkedin-dark"
                        style={{ width: "55%" }}
                      />
                    </Link>
                  </Grid>
                  <Grid item xs={3}>
                    <Link onClick="" sx={{ cursor: "pointer" }}>
                      <img
                        src={fbLogo}
                        alt="facebook-dark"
                        style={{ width: "55%" }}
                      />
                    </Link>
                  </Grid>
                  <Grid item xs={3}>
                    <Link onClick="" sx={{ cursor: "pointer" }}>
                      <img
                        src={igLogo}
                        alt="instagram-dark"
                        style={{ width: "55%" }}
                      />
                    </Link>
                  </Grid>
                </Grid>
              </Grid>
              {/* --- contact details --- */}
              <Grid item>
                <Grid container direction="column" spacing={1}>
                  <Grid item>
                    <Grid container direction="row">
                      <Grid item xs={3}>
                        <Typography
                          variant="body2"
                          color="black.800"
                          fontWeight="regular"
                        >
                          Phone
                        </Typography>
                      </Grid>
                      <Grid item xs={9}>
                        <Typography
                          variant="body2"
                          color="black.600"
                          fontWeight="bold"
                        >
                          +1-646-927-1969
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Grid container direction="row">
                      <Grid item xs={3}>
                        <Typography
                          variant="body2"
                          color="black.800"
                          fontWeight="regular"
                        >
                          WhatsApp
                        </Typography>
                      </Grid>
                      <Grid item xs={9}>
                        <Typography
                          variant="body2"
                          color="black.600"
                          fontWeight="bold"
                        >
                          +1-646-927-1969
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Grid container direction="row">
                      <Grid item xs={3}>
                        <Typography
                          variant="body2"
                          color="black.800"
                          fontWeight="regular"
                        >
                          Email
                        </Typography>
                      </Grid>
                      <Grid item xs={9}>
                        <Typography
                          variant="body2"
                          color="black.600"
                          fontWeight="bold"
                        >
                          Contact@sgnonlineacademy.com
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Grid container direction="row">
                      <Grid item xs={3}>
                        <Typography
                          variant="body2"
                          color="black.800"
                          fontWeight="regular"
                        >
                          Address
                        </Typography>
                      </Grid>
                      <Grid item xs={9}>
                        <Typography
                          variant="body2"
                          color="black.600"
                          fontWeight="bold"
                        >
                          SGN, Office # UG-34, 35, Samamma Star Mall, Gulberg
                          Greens, Islamabad
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            xs={12}
            md={8}
            mt={{ xs: 8, md: 0 }}
            px={{ xs: 2, sm: 3, md: 6 }}
          >
            <Grid
              container
              direction="column"
              justifyContent="space-between"
              alignItems="stretch"
              spacing={2}
            >
              <Grid item>
                <Typography variant="h3" color="black.800" fontWeight="bold">
                  Quick Links
                </Typography>
              </Grid>
              <Grid item>
                <Grid
                  container
                  direction="row"
                  justifyContent="space-between"
                  alignItems="flex-start"
                  spacing={2}
                >
                  <Grid item xs={6} sm={4}>
                    <Grid container direction="column">
                      <Grid item>
                        <Typography
                          variant="h6"
                          color="black.800"
                          fontWeight="bold"
                        >
                          About us
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Link
                          onClick=""
                          sx={{
                            cursor: "pointer",
                            color: "black.400",
                            fontWeight: "medium",
                            textDecoration: "none",
                            "&:hover": {
                              color: "black.600",
                              textDecoration: "underline",
                            },
                          }}
                        >
                          <Typography variant="body2">Who we are</Typography>
                        </Link>
                      </Grid>
                      <Grid item>
                        <Link
                          onClick=""
                          sx={{
                            cursor: "pointer",
                            color: "black.400",
                            fontWeight: "medium",
                            textDecoration: "none",
                            "&:hover": {
                              color: "black.600",
                              textDecoration: "underline",
                            },
                          }}
                        >
                          <Typography variant="body2">Our Mission</Typography>
                        </Link>
                      </Grid>
                      <Grid item>
                        <Link
                          onClick=""
                          sx={{
                            cursor: "pointer",
                            color: "black.400",
                            fontWeight: "medium",
                            textDecoration: "none",
                            "&:hover": {
                              color: "black.600",
                              textDecoration: "underline",
                            },
                          }}
                        >
                          <Typography variant="body2">Our Goal</Typography>
                        </Link>
                      </Grid>
                      <Grid item>
                        <Link
                          onClick=""
                          sx={{
                            cursor: "pointer",
                            color: "black.400",
                            fontWeight: "medium",
                            textDecoration: "none",
                            "&:hover": {
                              color: "black.600",
                              textDecoration: "underline",
                            },
                          }}
                        >
                          <Typography variant="body2">Our Success</Typography>
                        </Link>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={6} sm={4}>
                    <Grid container direction="column">
                      <Grid item>
                        <Typography
                          variant="h6"
                          color="black.800"
                          fontWeight="bold"
                        >
                          Courses
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Link
                          onClick=""
                          sx={{
                            cursor: "pointer",
                            color: "black.400",
                            fontWeight: "medium",
                            textDecoration: "none",
                            "&:hover": {
                              color: "black.600",
                              textDecoration: "underline",
                            },
                          }}
                        >
                          <Typography variant="body2">Quran</Typography>
                        </Link>
                      </Grid>
                      <Grid item>
                        <Link
                          onClick=""
                          sx={{
                            cursor: "pointer",
                            color: "black.400",
                            fontWeight: "medium",
                            textDecoration: "none",
                            "&:hover": {
                              color: "black.600",
                              textDecoration: "underline",
                            },
                          }}
                        >
                          <Typography variant="body2">Islamic</Typography>
                        </Link>
                      </Grid>
                      <Grid item>
                        <Link
                          onClick=""
                          sx={{
                            cursor: "pointer",
                            color: "black.400",
                            fontWeight: "medium",
                            textDecoration: "none",
                            "&:hover": {
                              color: "black.600",
                              textDecoration: "underline",
                            },
                          }}
                        >
                          <Typography variant="body2">Academic</Typography>
                        </Link>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={6} sm={4}>
                    <Grid container direction="column">
                      <Grid item>
                        <Typography
                          variant="h6"
                          color="black.800"
                          fontWeight="bold"
                        >
                          Pricing
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Link
                          onClick=""
                          sx={{
                            cursor: "pointer",
                            color: "black.400",
                            fontWeight: "medium",
                            textDecoration: "none",
                            "&:hover": {
                              color: "black.600",
                              textDecoration: "underline",
                            },
                          }}
                        >
                          <Typography variant="body2">Quran</Typography>
                        </Link>
                      </Grid>
                      <Grid item>
                        <Link
                          onClick=""
                          sx={{
                            cursor: "pointer",
                            color: "black.400",
                            fontWeight: "medium",
                            textDecoration: "none",
                            "&:hover": {
                              color: "black.600",
                              textDecoration: "underline",
                            },
                          }}
                        >
                          <Typography variant="body2">Islamic</Typography>
                        </Link>
                      </Grid>
                      <Grid item>
                        <Link
                          onClick=""
                          sx={{
                            cursor: "pointer",
                            color: "black.400",
                            fontWeight: "medium",
                            textDecoration: "none",
                            "&:hover": {
                              color: "black.600",
                              textDecoration: "underline",
                            },
                          }}
                        >
                          <Typography variant="body2">Academic</Typography>
                        </Link>
                      </Grid>
                    </Grid>
                  </Grid>

                  <Grid item xs={6} sm={4}>
                    <Grid container direction="column">
                      <Grid item>
                        <Typography
                          variant="h6"
                          color="black.800"
                          fontWeight="bold"
                        >
                          Trial
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Link
                          onClick=""
                          sx={{
                            cursor: "pointer",
                            color: "black.400",
                            fontWeight: "medium",
                            textDecoration: "none",
                            "&:hover": {
                              color: "black.600",
                              textDecoration: "underline",
                            },
                          }}
                        >
                          <Typography variant="body2">Explore Trial</Typography>
                        </Link>
                      </Grid>
                      <Grid item>
                        <Link
                          onClick=""
                          sx={{
                            cursor: "pointer",
                            color: "black.400",
                            fontWeight: "medium",
                            textDecoration: "none",
                            "&:hover": {
                              color: "black.600",
                              textDecoration: "underline",
                            },
                          }}
                        >
                          <Typography variant="body2">Book Trial</Typography>
                        </Link>
                      </Grid>
                      <Grid item>
                        <Link
                          onClick=""
                          sx={{
                            cursor: "pointer",
                            color: "black.400",
                            fontWeight: "medium",
                            textDecoration: "none",
                            "&:hover": {
                              color: "black.600",
                              textDecoration: "underline",
                            },
                          }}
                        >
                          <Typography variant="body2">Trial Purpose</Typography>
                        </Link>
                      </Grid>
                    </Grid>
                  </Grid>

                  <Grid item xs={6} sm={4}>
                    <Grid container direction="column">
                      <Grid item>
                        <Typography
                          variant="h6"
                          color="black.800"
                          fontWeight="bold"
                        >
                          Explore
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Link
                          onClick=""
                          sx={{
                            cursor: "pointer",
                            color: "black.400",
                            fontWeight: "medium",
                            textDecoration: "none",
                            "&:hover": {
                              color: "black.600",
                              textDecoration: "underline",
                            },
                          }}
                        >
                          <Typography variant="body2">
                            Teaching Method
                          </Typography>
                        </Link>
                      </Grid>
                      <Grid item>
                        <Link
                          onClick=""
                          sx={{
                            cursor: "pointer",
                            color: "black.400",
                            fontWeight: "medium",
                            textDecoration: "none",
                            "&:hover": {
                              color: "black.600",
                              textDecoration: "underline",
                            },
                          }}
                        >
                          <Typography variant="body2">
                            Growth Timeline
                          </Typography>
                        </Link>
                      </Grid>
                      <Grid item>
                        <Link
                          onClick=""
                          sx={{
                            cursor: "pointer",
                            color: "black.400",
                            fontWeight: "medium",
                            textDecoration: "none",
                            "&:hover": {
                              color: "black.600",
                              textDecoration: "underline",
                            },
                          }}
                        >
                          <Typography variant="body2">Pricing</Typography>
                        </Link>
                      </Grid>
                      <Grid item>
                        <Link
                          onClick=""
                          sx={{
                            cursor: "pointer",
                            color: "black.400",
                            fontWeight: "medium",
                            textDecoration: "none",
                            "&:hover": {
                              color: "black.600",
                              textDecoration: "underline",
                            },
                          }}
                        >
                          <Typography variant="body2">Trial</Typography>
                        </Link>
                      </Grid>
                    </Grid>
                  </Grid>

                  <Grid item xs={6} sm={4}>
                    <Grid container direction="column">
                      <Grid item>
                        <Typography
                          variant="h6"
                          color="black.800"
                          fontWeight="bold"
                        >
                          Support
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Link
                          onClick=""
                          sx={{
                            cursor: "pointer",
                            color: "black.400",
                            fontWeight: "medium",
                            textDecoration: "none",
                            "&:hover": {
                              color: "black.600",
                              textDecoration: "underline",
                            },
                          }}
                        >
                          <Typography variant="body2">
                            +1-646-927-1969
                          </Typography>
                        </Link>
                      </Grid>
                      <Grid item>
                        <Link
                          onClick=""
                          sx={{
                            cursor: "pointer",
                            color: "black.400",
                            fontWeight: "medium",
                            textDecoration: "none",
                            "&:hover": {
                              color: "black.600",
                              textDecoration: "underline",
                            },
                          }}
                        >
                          <Typography variant="body2">
                            +92-309-072-4305
                          </Typography>
                        </Link>
                      </Grid>
                      <Grid item>
                        <Link
                          onClick=""
                          sx={{
                            cursor: "pointer",
                            color: "black.400",
                            fontWeight: "medium",
                            textDecoration: "none",
                            "&:hover": {
                              color: "black.600",
                              textDecoration: "underline",
                            },
                          }}
                        >
                          <Typography
                            variant="body2"
                            display={{ xs: "none", sm: "block" }}
                          >
                            contact@sgnonlineacademy.com
                          </Typography>
                          <Typography
                            variant="body2"
                            display={{ xs: "block", sm: "none" }}
                          >
                            contact@sgnonline
                            <br />
                            academy.com
                          </Typography>
                        </Link>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default MainFooter;
