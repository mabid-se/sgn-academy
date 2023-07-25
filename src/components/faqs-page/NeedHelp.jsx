import { Box, Button, Container, Grid, Paper, Typography } from "@mui/material";
import React from "react";

import sectionBg from "../../assets/images/SectionBgArt3Dark.png";
const NeedHelp = () => {
  return (
    <>
      <Box
        py={{ xs: 8, md: 12 }}
        mb={4}
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
            direction="row"
            justifyContent="center"
            alignItems="center"
            px={3}
          >
            <Grid item>
              <Paper
                elevation={6}
                sx={{ py: 4, px: { xs: 6, md: 12 }, borderRadius: 6 }}
              >
                <Grid
                  container
                  direction="column"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Grid item>
                    <Typography
                      variant="h4"
                      color="black.800"
                      fontWeight="bold"
                      textAlign="center"
                    >
                      Do you need help?
                    </Typography>
                  </Grid>
                  <Grid item textAlign="center" my={3}>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "black.400",
                        fontWeight: "medium",
                      }}
                    >
                      You can contact to our
                      <br />
                      manager to arrange a class
                      <br /> and ask queries.
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
        </Container>
      </Box>
    </>
  );
};

export default NeedHelp;
