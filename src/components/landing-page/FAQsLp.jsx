import { Box, Button, Container, Grid, Paper, Typography } from "@mui/material";
import React from "react";

import FAQsGeneric from "../FAQsGeneric";
import sectionBg from "../../assets/images/SectionBgArt3Light.svg";
import { data } from "../../data/faqs-data";

const FAQsLP = () => {
  const generalFaq = data.genralFAQsList;
  return (
    <>
      <Box
        py={10}
        sx={{
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
              <Typography
                variant="h2"
                color="black.800"
                fontWeight="bold"
                textAlign="center"
              >
                Not sure about packages?
              </Typography>
            </Grid>
            <Grid item mt={1}>
              <Typography
                variant="body2"
                sx={{
                  color: "black.400",
                  fontWeight: "medium",
                  textAlign: "center",
                }}
              >
                Not sure, which plan is best for you?
              </Typography>
            </Grid>
            <Grid item mt={4}>
              <Button
                disableRipple
                onClick=""
                sx={{
                  py: 1,
                  px: 3,
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
                Contact Us
              </Button>
            </Grid>

            <Grid item mt={10}>
              <Typography variant="h2" color="black.800" fontWeight="bolder">
                FAQs
              </Typography>
            </Grid>
            <Grid item mt={1}>
              <Typography
                variant="body2"
                sx={{
                  color: "black.400",
                  fontWeight: "medium",
                  textAlign: "center",
                }}
              >
                Find answers you need
              </Typography>
            </Grid>
            <Grid item mt={6}>
              <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="flex-start"
              >
                <Grid item xs={12} md={8} paddingX={{ xs: 3, md: 5 }}>
                  <Grid
                    container
                    direction="column"
                    justifyContent="flex-start"
                    alignItems="flex-start"
                  >
                    <Grid item>
                      {generalFaq.map((faqItem) => (
                        <>
                          <FAQsGeneric data={faqItem} />
                        </>
                      ))}
                    </Grid>

                    <Grid
                      item
                      mt={{ xs: 6, md: 4 }}
                      marginX={{ xs: "auto", md: 0 }}
                    >
                      <Button
                        disableRipple
                        onClick=""
                        sx={{
                          py: 1,
                          px: 3,
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
                        Learn More
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={4}
                  marginTop={{ xs: 6, md: 0 }}
                  paddingX={{ xs: 3, md: 6 }}
                >
                  <Paper
                    elevation={6}
                    sx={{ borderRadius: 6, padding: { xs: 3, md: 3 } }}
                  >
                    <Grid
                      container
                      direction="column"
                      justifyContent="space-between !important"
                      alignItems="center"
                      spacing={1}
                      paddingY={1}
                    >
                      <Grid item>
                        <Typography
                          variant="h5"
                          color="black.800"
                          fontWeight="bold"
                          textAlign="center"
                        >
                          Do you need help?
                        </Typography>
                      </Grid>
                      <Grid item my={2}>
                        <Typography
                          variant="body1"
                          sx={{
                            color: "black.400",
                            fontWeight: "medium",
                            textAlign: "center",
                          }}
                        >
                          You can contact to our manager to arrange a class and
                          ask queries.
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Button
                          disableRipple
                          onClick=""
                          sx={{
                            py: 1,
                            px: 3,
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
                          Contact Us
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

export default FAQsLP;
