import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import Carousel from "react-material-ui-carousel";

import sectionBg from "../../assets/images/SectionBgArt3Dark.png";

const unsatData = [
  {
    id: 1,
    title: "Qualified Teacher",
    description:
      "Our teachers are all highly trained, professional, and have excellent communication qualities.",
  },
  {
    id: 2,
    title: "Affordable Pricing",
    description:
      "Our teaching fee is negotiable for everyone, we will never compromise on quality.",
  },
  {
    id: 3,
    title: "Schedule Flexibility",
    description:
      "Anytime arrange your class according to your feasibility, we will cooperate with you.",
  },
  {
    id: 4,
    title: "Auto-Generated Reports",
    description:
      "The system will report you weekly, monthly, and Yearly reports of Student & Teacher.",
  },
];

const CarouselItem = (props) => {
  return (
    <>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        px={{ xs: 9, md: 18 }}
      >
        <Grid item>
          <Typography
            variant="h4"
            color="white.900"
            fontWeight="bold"
            textAlign="center"
          >
            {props.data.title}
          </Typography>
        </Grid>
        <Grid item mt={2}>
          <Typography
            variant="body1"
            color="white.600"
            fontWeight="medium"
            textAlign="justify"
          >
            {props.data.description}
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};
const NeverUnsatisfied = () => {
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
            spacing={1}
            px={{ xs: 0, md: 3 }}
          >
            <Grid item>
              <Grid display={{ xs: "none", md: "flex" }}>
                <Typography
                  variant="h2"
                  sx={{
                    color: "white.900",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  We never let you be
                  <br />
                  unsatisfied by our quality
                </Typography>
              </Grid>
              <Grid display={{ xs: "flex", md: "none" }}>
                <Typography
                  variant="h2"
                  sx={{
                    color: "white.900",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  We never let you be unsatisfied by our quality
                </Typography>
              </Grid>
            </Grid>
            <Grid item mt={10} width="100%">
              <Carousel
                fullHeightHover={false}
                navButtonsAlwaysVisible={true}
                navButtonsProps={{
                  style: {
                    color: "#000000",
                    borderRadius: 5,
                    backgroundColor: "#ffffff",
                  },
                }}
                indicatorIconButtonProps={{
                  style: {
                    marginTop: 30,
                    padding: 5,
                    color: "#d9d9d9",
                  },
                }}
                activeIndicatorIconButtonProps={{
                  style: { color: "#ffffff" },
                }}
              >
                {unsatData.map((item) => (
                  <>
                    <CarouselItem data={item} />
                  </>
                ))}
              </Carousel>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default NeverUnsatisfied;
