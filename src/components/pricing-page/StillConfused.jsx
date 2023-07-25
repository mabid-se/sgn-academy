import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import sectionBg from "../../assets/images/SectionBgArt3Light.svg";

const StillConfused = () => {
  const navigate = useNavigate();
  return (
    <>
      <Box
        py={{ xs: 7, md: 10 }}
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
            px={{ xs: 2, sm: 4, md: 6, lg: 10 }}
          >
            <Grid item textAlign="center">
              <Typography variant="h2" color="black.800" fontWeight="bold">
                Still Confused, don't know where to start?
              </Typography>
            </Grid>
          </Grid>

          <Grid item mt={6} textAlign="center">
            <Button
              disableRipple
              onClick={() => navigate("/trial")}
              sx={{
                py: 1,
                px: { xs: 2, md: 3 },
                fontWeight: "bold",
                border: 2,
                borderRadius: 2,
                textTransform: "none",
                letterSpacing: 1,
                color: "white.900",
                borderColor: "black.600",
                backgroundColor: "black.600",
                "&:hover": { color: "black.600", backgroundColor: "white.900" },
              }}
            >
              Book a Trial
            </Button>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default StillConfused;
