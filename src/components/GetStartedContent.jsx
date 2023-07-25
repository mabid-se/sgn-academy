import {
  Call,
  HighlightOff,
  KeyboardDoubleArrowLeft,
  LibraryBooks,
  ManageAccounts,
  MonetizationOn,
  Schedule,
  WhatsApp,
} from "@mui/icons-material";
import {
  Box,
  Button,
  FormControl,
  Grid,
  MenuItem,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-scroll";
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

const GetStartedContent = (props) => {
  const classes = useStyles();

  const navigate = useNavigate();

  const [hoverTalkToManager, setHoverTalkToManager] = useState(false);
  const [hoverScheduleATrial, setHoverSceduleATrial] = useState(false);
  const [hoverSeeCourses, setHoverSeeCourses] = useState(false);
  const [hoverSeePricing, setHoverSeePricing] = useState(false);

  const [hoverWhatsapp, setHoverWhatsapp] = useState(false);
  const [hoverPhone, setHoverPhone] = useState(false);

  const [mainBtns, setMainBtns] = useState(true);

  const [talkManagerContent, setTalkManagerContent] = useState(false);
  const [scheduleTrialContent, setScheduleTrialContent] = useState(false);

  const handleTalkManagerBtn = () => {
    setMainBtns(false);
    setTalkManagerContent(true);
  };

  const handleBackBtn = () => {
    setMainBtns(true);
    setTalkManagerContent(false);
    setScheduleTrialContent(false);
  };

  const handleScheduleTrialBtn = () => {
    setMainBtns(false);
    setScheduleTrialContent(true);
  };

  const genFunc = (func1, func2) => {
    func1();
    func2();
  };

  const handleWhatsAppLink = () => {
    window.open("https://wa.me/923495358858", "_blank");
  };

  return (
    <>
      {/* --- main container --- */}
      {mainBtns && (
        <Box
          paddingY={{ xs: 6, md: 6 }}
          paddingX={{ xs: 3, sm: 5, md: 6 }}
          sx={{ width: { xs: "310px", sm: "100%" } }}
        >
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="stretch"
          >
            <Grid
              item
              onClick={props.closeModal}
              sx={{
                cursor: "pointer",
                position: "absolute",
                right: 25,
                top: 25,
              }}
            >
              <HighlightOff color="black.800" />
            </Grid>

            <Grid item marginX={{ xs: 3, md: 0 }} textAlign="center">
              <Typography variant="h5" fontWeight="bold" color="black.600">
                Get <span style={{ color: "#272727" }}>Started</span>
              </Typography>
              <Typography
                variant="body2"
                fontWeight="regular"
                color="black.400"
              >
                What do you want?
              </Typography>
            </Grid>
            <Grid
              item
              onClick={() =>
                genFunc(handleTalkManagerBtn, setHoverTalkToManager(false))
              }
              mt={5}
            >
              <Paper
                onMouseEnter={() => setHoverTalkToManager(true)}
                onMouseLeave={() => setHoverTalkToManager(false)}
                elevation={4}
                sx={{
                  paddingX: { xs: 4, sm: 6, md: 12 },
                  paddingY: { xs: 1, md: 2 },
                  cursor: "pointer",
                  borderRadius: { xs: 2, sm: 3, md: 4 },
                  "&:hover": {
                    backgroundColor: "black.800",
                  },
                }}
              >
                <Grid
                  container
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="center"
                  spacing={2}
                >
                  <Grid item>
                    <Typography
                      variant="body1"
                      sx={
                        hoverTalkToManager
                          ? { color: "white.900", fontWeight: "bold" }
                          : { color: "black.800", fontWeight: "regular" }
                      }
                    >
                      <ManageAccounts />
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography
                      variant="body1"
                      sx={
                        hoverTalkToManager
                          ? { color: "white.900", fontWeight: "bold" }
                          : { color: "black.800", fontWeight: "regular" }
                      }
                    >
                      Talk to Manager
                    </Typography>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
            <Grid
              item
              onClick={() =>
                genFunc(handleScheduleTrialBtn, setHoverSceduleATrial(false))
              }
              mt={3}
            >
              <Paper
                onMouseEnter={() => setHoverSceduleATrial(true)}
                onMouseLeave={() => setHoverSceduleATrial(false)}
                elevation={4}
                sx={{
                  paddingX: { xs: 4, sm: 6, md: 12 },
                  paddingY: { xs: 1, md: 2 },
                  cursor: "pointer",
                  borderRadius: { xs: 2, sm: 3, md: 4 },
                  "&:hover": {
                    backgroundColor: "black.800",
                  },
                }}
              >
                <Grid
                  container
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="center"
                  spacing={2}
                >
                  <Grid item>
                    <Typography
                      variant="body1"
                      sx={
                        hoverScheduleATrial
                          ? { color: "white.900", fontWeight: "bold" }
                          : { color: "black.800", fontWeight: "regular" }
                      }
                    >
                      <Schedule />
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography
                      variant="body1"
                      sx={
                        hoverScheduleATrial
                          ? { color: "white.900", fontWeight: "bold" }
                          : { color: "black.800", fontWeight: "regular" }
                      }
                    >
                      Schedule a Trial
                    </Typography>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
            <Link to="courses_home" smooth="true" duration={750}>
              <Grid item onClick={props.closeModal} mt={3}>
                <Paper
                  onMouseEnter={() => setHoverSeeCourses(true)}
                  onMouseLeave={() => setHoverSeeCourses(false)}
                  elevation={4}
                  sx={{
                    paddingX: { xs: 4, sm: 6, md: 12 },
                    paddingY: { xs: 1, md: 2 },
                    cursor: "pointer",
                    borderRadius: { xs: 2, sm: 3, md: 4 },
                    "&:hover": {
                      backgroundColor: "black.800",
                    },
                  }}
                >
                  <Grid
                    container
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="center"
                    spacing={2}
                  >
                    <Grid item>
                      <Typography
                        variant="body1"
                        sx={
                          hoverSeeCourses
                            ? { color: "white.900", fontWeight: "bold" }
                            : { color: "black.800", fontWeight: "regular" }
                        }
                      >
                        <LibraryBooks />
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography
                        variant="body1"
                        sx={
                          hoverSeeCourses
                            ? { color: "white.900", fontWeight: "bold" }
                            : { color: "black.800", fontWeight: "regular" }
                        }
                      >
                        See Courses
                      </Typography>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
            </Link>
            <Grid item onClick={() => navigate("/pricing")} mt={3}>
              <Paper
                onMouseEnter={() => setHoverSeePricing(true)}
                onMouseLeave={() => setHoverSeePricing(false)}
                onClick={props.closeModal}
                elevation={4}
                sx={{
                  paddingX: { xs: 4, sm: 6, md: 12 },
                  paddingY: { xs: 1, md: 2 },
                  cursor: "pointer",
                  borderRadius: { xs: 2, sm: 3, md: 4 },
                  "&:hover": {
                    backgroundColor: "black.800",
                  },
                }}
              >
                <Grid
                  container
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="center"
                  spacing={2}
                >
                  <Grid item>
                    <Typography
                      variant="body1"
                      sx={
                        hoverSeePricing
                          ? { color: "white.900", fontWeight: "bold" }
                          : { color: "black.800", fontWeight: "regular" }
                      }
                    >
                      <MonetizationOn />
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography
                      variant="body1"
                      sx={
                        hoverSeePricing
                          ? { color: "white.900", fontWeight: "bold" }
                          : { color: "black.800", fontWeight: "regular" }
                      }
                    >
                      See Pricing
                    </Typography>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      )}

      {/* --- talk to manager content container --- */}
      {talkManagerContent && (
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          sx={{ position: "relative", width: { xs: "310px", sm: "100%" } }}
        >
          <Grid
            item
            onClick={handleBackBtn}
            sx={{
              cursor: "pointer",
              position: "absolute",
              left: 7,
              top: 25,
            }}
          >
            <KeyboardDoubleArrowLeft color="black.900" />
          </Grid>
          <Grid item paddingX={{ xs: 6, sm: 12 }} paddingY={{ xs: 6, sm: 4 }}>
            <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="stretch"
              padding={{ sm: 4, md: 6 }}
              marginX={{ sm: 3, md: 0 }}
            >
              <Grid item textAlign="center">
                <Typography
                  variant="h5"
                  sx={{ color: "black.600", fontWeight: "bold" }}
                >
                  <ManageAccounts /> Talk to
                  <span style={{ color: "#272727" }}> Manager</span>
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ mt: 2, color: "black.400", fontWeight: "regulat" }}
                >
                  Which is Best For You?
                </Typography>
              </Grid>

              <Grid item onClick={handleWhatsAppLink} mt={6}>
                <Paper
                  onMouseEnter={() => setHoverWhatsapp(true)}
                  onMouseLeave={() => setHoverWhatsapp(false)}
                  onClick={props.closeModal}
                  elevation={4}
                  sx={{
                    cursor: "pointer",
                    paddingX: { xs: 3, sm: 6, md: 12 },
                    paddingY: { xs: 2, sm: 2 },
                    borderRadius: { xs: 2, sm: 3, md: 4 },
                    "&:hover": { backgroundColor: "black.800" },
                  }}
                >
                  <Grid
                    container
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="center"
                    spacing={1}
                  >
                    <Grid item>
                      <Typography
                        variant="body1"
                        sx={
                          hoverWhatsapp
                            ? { color: "white.900", fontWeight: "bold" }
                            : { color: "black.800", fontWeight: "regular" }
                        }
                      >
                        <WhatsApp />
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography
                        variant="body1"
                        sx={
                          hoverWhatsapp
                            ? { color: "white.900", fontWeight: "bold" }
                            : { color: "black.800", fontWeight: "regular" }
                        }
                      >
                        WhatsApp
                      </Typography>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>

              <Grid
                item
                onClick={() => (window.location.href = "tel:923495358858")}
                mt={4}
              >
                <Paper
                  onMouseEnter={() => setHoverPhone(true)}
                  onMouseLeave={() => setHoverPhone(false)}
                  onClick={props.closeModal}
                  elevation={4}
                  sx={{
                    cursor: "pointer",
                    paddingX: { xs: 3, sm: 6, md: 12 },
                    paddingY: { xs: 2, sm: 2 },
                    borderRadius: { xs: 2, sm: 3, md: 4 },
                    "&:hover": { backgroundColor: "black.800" },
                  }}
                >
                  <Grid
                    container
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="center"
                    spacing={1}
                  >
                    <Grid item>
                      <Typography
                        variant="body1"
                        sx={
                          hoverPhone
                            ? { color: "white.900", fontWeight: "bold" }
                            : { color: "black.800", fontWeight: "regular" }
                        }
                      >
                        <Call />
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography
                        variant="body1"
                        sx={
                          hoverPhone
                            ? { color: "white.900", fontWeight: "bold" }
                            : { color: "black.800", fontWeight: "regular" }
                        }
                      >
                        Phone Call
                      </Typography>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            onClick={props.closeModal}
            sx={{ cursor: "pointer", position: "absolute", right: 7, top: 25 }}
          >
            <HighlightOff color="black.800" />
          </Grid>
        </Grid>
      )}

      {/* --- schedule a trial content container --- */}
      {scheduleTrialContent && (
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          sx={{ position: "relative", width: { xs: "310px", sm: "100%" } }}
        >
          <Grid
            item
            onClick={handleBackBtn}
            sx={{
              cursor: "pointer",
              position: "absolute",
              left: 7,
              top: 25,
            }}
          >
            <KeyboardDoubleArrowLeft color="black.800" />
          </Grid>

          <Grid item paddingX={{ xs: 2, md: 12 }} paddingY={{ xs: 6, sm: 4 }}>
            <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="stretch"
              padding={{ xs: 2, sm: 3, md: 6 }}
            >
              <Grid item marginX={{ xs: 3, md: 6 }} textAlign="center">
                <Typography variant="h5" color="black.600" fontWeight="bold">
                  <Schedule /> Book Your
                  <span style={{ color: "#272727" }}> Trial!</span>
                </Typography>
                <Typography
                  variant="body2"
                  color="black.400"
                  fontWeight="regular"
                >
                  Book a trial & get a response soon.
                </Typography>
              </Grid>
              <Grid item mt={6}>
                <FormControl fullWidth>
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
                    {/* <MenuItem value="cont1">Country 1</MenuItem> */}
                    {/* <MenuItem value="cont2">Country 2</MenuItem> */}

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
                </FormControl>

                <Grid textAlign="center">
                  <Button
                    disableRipple
                    onClick=""
                    sx={{
                      mt: 4,
                      py: 1,
                      px: { xs: 3, md: 3 },
                      color: "black.600",
                      fontSize: 15,
                      fontWeight: "medium",
                      textTransform: "none",
                      letterSpacing: 1,
                      border: 2,
                      borderColor: "black.600",
                      borderRadius: 3,
                      "&:hover": {
                        color: "white.900",
                        fontWeight: "bold",
                        border: 2,
                        backgroundColor: "black.600",
                        borderColor: "black.600",
                      },
                    }}
                  >
                    Book Now
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Grid
            item
            onClick={props.closeModal}
            sx={{ cursor: "pointer", position: "absolute", right: 7, top: 25 }}
          >
            <HighlightOff color="black.800" />
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default GetStartedContent;
