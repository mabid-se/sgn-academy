import { ArrowBack, ArrowForward } from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  FormControl,
  Grid,
  MenuItem,
  Paper,
  Step,
  StepLabel,
  Stepper,
  TextField,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

import React, { useState } from "react";

import sectionBg from "../assets/images/SectionBgArt3Light.svg";
import { countriesSelect } from "../data/countries-select";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiOutlinedInput-root": {
      borderRadius: 12,
      backgroundColor: "#f3f3f3",
      "& fieldset": {
        borderColor: "#E0E0E0",
      },
      "&:hover fieldset": {
        borderColor: "black.400",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#4d4d4d",
      },
    },
    "& .MuiInputLabel-root": {
      color: "#4d4d4d !important",
      paddingX: 1,
    },
  },
}));

const BookTrial = () => {
  const classes = useStyles();
  const steps = ["General", "Student", "Message"];
  const [activeStep, setActiveStep] = useState(0);
  const [language, setLanguage] = useState("");
  const [course, setCourse] = useState("");

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleLanguageChange = (event) => {
    setLanguage(event.targer.value);
  };

  const handleCouseChange = (event) => {
    setCourse(event.targer.value);
  };

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
            px={{ xs: 3, md: 0 }}
          >
            <Grid item>
              <Typography
                variant="h2"
                color="black.800"
                fontWeight="bold"
                textAlign="center"
              >
                <Grid display={{ xs: "none", md: "flex" }}>
                  Start today, It's easy
                </Grid>
                <Grid display={{ xs: "flex", md: "none" }}>
                  Start today,
                  <br />
                  It's easy
                </Grid>
              </Typography>
            </Grid>
            <Grid item mt={1}>
              <Typography
                variant="body1"
                sx={{
                  color: "black.400",
                  fontWeight: "medium",
                  textAlign: "center",
                }}
              >
                If you want to schedule a trial class there's 24/7 email, chat,
                and phone support from a Managers.
              </Typography>
            </Grid>
            <Grid item md={6} mt={5}>
              <Paper
                elevation={6}
                sx={{ px: { xs: 3, md: 4 }, py: 4, borderRadius: 6 }}
              >
                <Grid
                  container
                  direction="column"
                  justifyContent="center"
                  alignItems="stretch"
                  spacing={2}
                  sx={{
                    width: { md: "420px" },
                    px: { md: 2 },
                  }}
                >
                  <Grid item>
                    <Typography
                      variant="h4"
                      color="black.800"
                      fontWeight="bold"
                      textAlign="center"
                    >
                      Book Trial
                    </Typography>
                  </Grid>
                  <Grid item mt={1}>
                    <Stepper activeStep={activeStep} alternativeLabel>
                      {steps.map((label, index) => (
                        <Step
                          key={label}
                          sx={{
                            "& .MuiStepLabel-root .Mui-completed": {
                              color: "black.600",
                            },
                            "& .MuiStepLabel-label.Mui-completed.MuiStepLabel-alternativeLabel":
                              {
                                color: "black.600",
                                fontWeight: "bold",
                              },
                            "& .MuiStepLabel-root .Mui-active": {
                              color: "black.600",
                            },
                            "& .MuiStepLabel-label.Mui-active.MuiStepLabel-alternativeLabel":
                              {
                                color: "black.600",
                                fontWeight: "bold",
                              },
                            "& .MuiStepLabel-root .Mui-active .MuiStepIcon-text":
                              {
                                fill: "white.900",
                              },
                          }}
                        >
                          <StepLabel>
                            <Typography>{label}</Typography>
                          </StepLabel>
                        </Step>
                      ))}
                    </Stepper>
                  </Grid>
                  <Grid item mt={1} textAlign="center">
                    <Typography
                      variant="body1"
                      sx={{
                        color: "black.400",
                        fontWeight: "medium",
                        textAlign: "center",
                      }}
                    >
                      Please provide correct information
                    </Typography>
                  </Grid>
                  <Grid item mt={2}>
                    <FormControl fullWidth>
                      {activeStep === 0 && (
                        <>
                          <TextField
                            variant="outlined"
                            size="small"
                            className={classes.root}
                            label="Your Name"
                            id="name"
                            //error={nameError} value={name}
                            //onChange={(e) => handleChange(e, setName, setNameError)}
                            // helperText={nameError ? "Name is required!" : ""}
                          />

                          <TextField
                            select
                            variant="outlined"
                            size="small"
                            className={classes.root}
                            sx={{ mt: 2 }}
                            label="Country" //value={country}
                            id="country"
                            // error={countryError}
                            // value={country}
                            //  onChange={handleCountryChange}
                            // helperText={countryError ? "Country is required!" : ""}
                          >
                            {countriesSelect.map((data, id) => (
                              <MenuItem key={id} value={data.contLab}>
                                {data.contVal}
                              </MenuItem>
                            ))}
                          </TextField>

                          <TextField
                            variant="outlined"
                            size="small"
                            className={classes.root}
                            sx={{ mt: 2 }}
                            type="email"
                            label="Your Email Address"
                            id="email"
                            // error={emailError}
                            // value={email}
                            // onChange={(e) => handleChange(e, setEmail, setEmailError)}
                            // helperText={emailError ? "Email is required!" : ""}
                          />

                          <TextField
                            variant="outlined"
                            size="small"
                            className={classes.root}
                            sx={{ mt: 2 }}
                            label="Contact Number"
                            id="phone"
                            // error={phoneError}
                            // value={phone}
                            // onChange={(e) => handleChange(e, setPhone, setPhoneError)}
                            // helperText={phoneError ? "Phone is required!" : ""}
                          />
                        </>
                      )}

                      {activeStep === 1 && (
                        <>
                          <TextField
                            variant="outlined"
                            size="small"
                            className={classes.root}
                            id="name"
                            label="Your Name"
                            //error={nameError} value={name}
                            //onChange={(e) => handleChange(e, setName, setNameError)}
                            // helperText={nameError ? "Name is required!" : ""}
                          />

                          <TextField
                            select
                            variant="outlined"
                            size="small"
                            className={classes.root}
                            sx={{ mt: 2 }}
                            id="lanuage"
                            label="Language" //value={language}
                            // error={languageError}
                            // value={language}
                            //  onChange={handleLanguageChange}
                            // helperText={languageError ? "Language is required!" : ""}
                          >
                            <MenuItem value="english">English</MenuItem>
                            <MenuItem value="urdu">Urdu</MenuItem>
                            <MenuItem value="other">Other</MenuItem>
                          </TextField>
                          <TextField
                            select
                            variant="outlined"
                            size="small"
                            className={classes.root}
                            sx={{ mt: 2 }}
                            id="course"
                            label="Course" //value={course}
                            // error={courseError}
                            // value={course}
                            //  onChange={handlecourseChange}
                            // helperText={courseError ? "Course is required!" : ""}
                          >
                            <MenuItem value="Quran">Quran Course</MenuItem>
                            <MenuItem value="Islamic">Islamic Course</MenuItem>
                            <MenuItem value="Academic">
                              Academic Course
                            </MenuItem>
                          </TextField>
                        </>
                      )}

                      {activeStep === 2 && (
                        <>
                          <TextField
                            variant="outlined"
                            size="small"
                            className={classes.root}
                            id="timezone"
                            label="Time Zone"
                            //error={timezoneError} value={timezone}
                            //onChange={(e) => handleChange(e, setName, setTimeZoneError)}
                            // helperText={timezoneError ? "Name is required!" : ""}
                          />
                          <TextField
                            variant="outlined"
                            size="small"
                            className={classes.root}
                            multiline
                            rows={3}
                            sx={{ mt: 2 }}
                            id="message"
                            label="Any Message"
                            //error={messageError} value={message}
                            //onChange={(e) => handleChange(e, setName, setMessageError)}
                            // helperText={messageError ? "Name is required!" : ""}
                          />
                        </>
                      )}
                    </FormControl>
                  </Grid>

                  <Grid item mt={2}>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        marginTop: 4,
                      }}
                    >
                      <Button
                        disableRipple
                        disabled={activeStep === 0}
                        onClick={handleBack}
                        startIcon={<ArrowBack />}
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
                        Back
                      </Button>
                      <Box sx={{ flex: "1 1 auto" }} />
                      {activeStep < 2 ? (
                        <Button
                          disableRipple
                          endIcon={<ArrowForward />}
                          onClick={handleNext}
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
                          Next
                        </Button>
                      ) : (
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
                          Finish
                        </Button>
                      )}
                    </Box>
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

export default BookTrial;
