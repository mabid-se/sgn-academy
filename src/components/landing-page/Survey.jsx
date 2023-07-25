import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import Carousel from "react-material-ui-carousel";
import sectionBg from "../../assets/images/SectionBgArt3Dark.png";

const surveyData = [
  {
    id: 1,
    title: "Dedicated Teachers",
    descriptionOne:
      "The thing that affects the growth of any student the most is the shuffling of teachers. Every teacher has a unique way of teaching and what most academies do is they keep changing the teachers due to a lack of staff and training new teams but it leaves maleficent effects on a student's progress.",
    descriptionTwo:
      "At SGN academy, we dedicate a well-experienced teacher to every student and check the quality of classes to ensure constant learning for our students.",
  },
  {
    id: 2,
    title: "Teacher Absenteeism",
    descriptionOne:
      "Consistency is the key and it transforms average into excellence but most of the academies lack it. According to parents the teachers take days off and academies neither take care of it nor provide a substitute teacher.",
    descriptionTwo:
      "We have teachers available 24/7 and they are committed to their work and in case they have to take a day off we have a lot of teachers available to fill their shoes so that the student’s progress isn’t compromised.",
  },
  {
    id: 3,
    title: "Learning Environment",
    descriptionOne:
      "A student can learn more effectively if the teacher is encouraging him/her to give their best instead of being rude and strict when they make mistakes. Online academies don’t know what’s happening during the classes and don’t ensure a friendly learning environment.",
    descriptionTwo:
      "At SGN academy all the classes are recorded and parents have access to it. We use AI to measure the quality of the class, the teacher’s behavior, and every aspect of the class to provide a safe and healthy learning environment.",
  },
  {
    id: 4,
    title: "Monthly Assessment",
    descriptionOne:
      "How do you measure the performance of your child when there’s no analysis and estimate of how is the kid reading and learning?",
    descriptionTwo:
      "We conduct tests of our students on a weekly and monthly basis to find out how is the student performing and in which areas he/she require more attention. We make reports of these assessments and send them to parents every month.",
  },
  {
    id: 5,
    title: "Flexible Timing",
    descriptionOne:
      "A lot of parents complain that the timing of class is not appropriate for their kids, their kids come from school, and then immediately it’s time for Quran class which can be exhausting for kids. Many academies fail in providing flexible time due to a lack of teachers and time management.",
    descriptionTwo:
      "At SGN we teach the Quran worldwide and have excess teachers available all the time, we manage the time so effectively that you can take the class when you’re feasible and relaxed.",
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
        spacing={1}
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
            lineHeight="normal"
          >
            {props.data.descriptionOne}
          </Typography>

          <Typography
            variant="body1"
            mt={1}
            color="white.600"
            fontWeight="medium"
            textAlign="justify"
          >
            {props.data.descriptionTwo}
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

const Survey = () => {
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
              <Typography
                variant="h2"
                sx={{
                  color: "white.900",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                Survey
              </Typography>
            </Grid>
            <Grid itme mt={1} px={{ xs: 4, md: 24 }}>
              <Typography
                variant="body2"
                sx={{
                  display: { xs: "none", md: "block" },
                  color: "white.600",
                  fontWeight: "medium",
                  textAlign: "center !important",
                }}
              >
                Following a survey, we discovered why people quit the online
                Quran academy after registering, and we received several
                inquiries from clients.
              </Typography>
            </Grid>
            <Grid item mt={{ xs: 4, md: 10 }} width="100%">
              <Carousel
                navButtonsAlwaysVisible={true}
                navButtonsProps={{
                  style: {
                    color: "#000000",
                    borderRadius: 5,
                    backgroundColor: "#ffffff",
                  },
                }}
                indicatorIconButtonProps={{
                  style: { marginTop: 30, padding: 5, color: "#d9d9d9" },
                }}
                activeIndicatorIconButtonProps={{ style: { color: "#ffffff" } }}
              >
                {surveyData.map((item) => (
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

export default Survey;
