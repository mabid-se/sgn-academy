import { Close, Favorite, KeyboardArrowDown, Menu } from "@mui/icons-material";
import {
  AppBar,
  Box,
  Button,
  Container,
  CssBaseline,
  Drawer,
  Fade,
  Grid,
  IconButton,
  Modal,
  Paper,
  Popper,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-scroll";

import sgnLogo from "../assets/images/sgn-logo.svg";
import ytLogo from "../assets/images/brands/youtubeLight.png";
import linkLogo from "../assets/images/brands/linkedinLight.png";
import fbLogo from "../assets/images/brands/facebookLight.png";
import igLogo from "../assets/images/brands/instagramLight.png";
import GetStartedContent from "./GetStartedContent";

import sectionBg from "../assets/images/SectionBgArt3Light.svg";

const styles = {
  modalStyles: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
    boxShadow: 36,
    borderRadius: 6,
    outline: "none",
    backgroundImage: `url(${sectionBg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  },
};

const MainNavbar = () => {
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen(true);
  };

  const handleClose = (event) => {
    const dropdownContainer = document.getElementById("dropdown-container");
    if (
      !dropdownContainer.contains(event.relatedTarget) &&
      !anchorEl.contains(event.relatedTarget)
    ) {
      setOpen(false);
      setAnchorEl(null);
    }
  };

  useEffect(() => {
    if (open) {
      document.addEventListener("mouseleave", handleClose);
    } else {
      document.removeEventListener("mouseleave", handleClose);
    }

    return () => {
      document.removeEventListener("mouseleave", handleClose);
    };
  }, [open, handleClose]);

  const genFunc = (func1, func2) => {
    func1();
    func2();
  };

  const drawerWidth = 240;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  // --- open / close get started modal ---
  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  const drawer = (
    <Box onClick={handleDrawerToggle}>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="stretch"
        py={12}
        px={4}
        sx={{
          textTransform: "capitalize",
          textAlign: "center",
        }}
      >
        <Grid item>
          <IconButton
            size="small"
            onClose={handleDrawerToggle}
            sx={{
              position: "absolute",
              top: 25,
              right: 25,
              color: "white !important",
              border: 2,
              borderRadius: "50%",
            }}
          >
            <Close />
          </IconButton>
        </Grid>
        <Grid item mt={2}>
          <Button
            onClick={handleOpenModal}
            sx={{
              py: 1,
              px: 2,
              color: "black.600",
              fontSize: 13,
              fontWeight: "bold",
              textTransform: "capitalize",
              letterSpacing: 1,
              backgroundColor: "white.900",
              borderRadius: 3,
            }}
          >
            get started
          </Button>
        </Grid>
        <Grid
          item
          sx={{
            mt: 3,
            py: 2,
            color: "white.900",
            borderBottom: 2,
            fontWeight: "bold",
          }}
        >
          <Typography variant="h5" onClick={() => navigate("/")}>
            home
          </Typography>
        </Grid>
        <Grid
          item
          sx={{
            py: 2,
            color: "white.900",
            borderBottom: 2,
            fontWeight: "bold",
          }}
        >
          <Link
            to="about_us"
            smooth="true"
            duration={750}
            onClick={handleDrawerToggle}
          >
            <Typography variant="h5">about us</Typography>
          </Link>
        </Grid>
        <Grid
          item
          sx={{
            py: 2,
            color: "white.900",
            borderBottom: 2,
            fontWeight: "bold",
          }}
        >
          <Link
            to="courses_home"
            smooth="true"
            duration={750}
            onClick={handleDrawerToggle}
          >
            <Typography variant="h5">courses</Typography>
          </Link>
        </Grid>
        <Grid
          item
          sx={{
            py: 2,
            color: "white.900",
            borderBottom: 2,
            fontWeight: "bold",
          }}
        >
          <Typography variant="h5" onClick={() => navigate("/pricing")}>
            pricing
          </Typography>
        </Grid>
        <Grid
          item
          sx={{
            py: 2,
            color: "white.900",
            borderBottom: 2,
            fontWeight: "bold",
          }}
        >
          <Typography variant="h5" onClick={() => navigate("/faqs")}>
            FAQs
          </Typography>
        </Grid>
        <Grid
          item
          sx={{
            py: 1,
            borderBottom: 2,
            borderBottomColor: "white.900",
          }}
        >
          <Button
            disableRipple
            onClick={() => navigate("/donate-us")}
            sx={{
              color: "white.900",
              fontWeight: 500,
              fontSize: 19,
              textTransform: "capitalize",
              letterSpacing: 1,
            }}
            endIcon={<Favorite />}
          >
            donate us
          </Button>
        </Grid>

        <Grid item>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={2}
            mt={6}
          >
            <Grid item>
              <Link onClick="">
                <img src={ytLogo} alt="youtube-light" />
              </Link>
            </Grid>
            <Grid item>
              <Link onClick="">
                <img src={linkLogo} alt="linkedin-light" />
              </Link>
            </Grid>
            <Grid item>
              <Link onClick="">
                <img src={fbLogo} alt="facebook-light" />
              </Link>
            </Grid>
            <Grid item>
              <Link onClick="">
                <img src={igLogo} alt="instagram-light" />
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );

  return (
    <>
      <Box>
        <CssBaseline />
        <AppBar
          position="fixed"
          elevation={6}
          sx={{
            py: 1,
            elevation: 6,
            background: "white",
            borderBottomLeftRadius: 15,
            borderBottomRightRadius: 15,
          }}
        >
          <Toolbar>
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
              color="black !important"
              display={{ xs: "none", md: "flex" }}
            >
              {/* --- logo for large displays ---  */}
              <Grid item md={2} px={{ md: 1, lg: 3 }}>
                <Typography
                  component="a"
                  onClick={() => navigate("/")}
                  sx={{
                    mx: 3,
                    cursor: "pointer",
                  }}
                >
                  <img src={sgnLogo} alt="sgn-logo" style={{ width: "40%" }} />
                </Typography>
              </Grid>
              {/* --- menu for large displays --- */}
              <Grid item md={8} px={{ md: 1, lg: 3 }}>
                <Grid
                  container
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                  spacing={2}
                  sx={{
                    color: "black.700",
                    textTransform: "capitalize",
                  }}
                >
                  <Grid item>
                    <Button
                      disableRipple
                      onClick={() => navigate("/")}
                      sx={{
                        color: "black.400",
                        fontSize: 15,
                        fontWeight: "regular",
                        textTransform: "capitalize",
                        letterSpacing: 1,
                        "&:hover": {
                          color: "black.800",
                          fontWeight: "bolder",
                          textDecoration: "underline",
                          textUnderlineOffset: 6,
                          textDecorationThickness: 2,
                        },
                      }}
                    >
                      home
                    </Button>
                  </Grid>
                  <Grid item>
                    <Link to="about_us" smooth="true" duration={750}>
                      <Button
                        disableRipple
                        sx={{
                          color: "black.400",
                          fontSize: 15,
                          fontWeight: "regular",
                          textTransform: "capitalize",
                          letterSpacing: 1,
                          "&:hover": {
                            color: "black.800",
                            fontWeight: "bolder",
                            textDecoration: "underline",
                            textUnderlineOffset: 6,
                            textDecorationThickness: 2,
                          },
                        }}
                      >
                        about us
                      </Button>
                    </Link>
                  </Grid>
                  <Grid
                    item
                    aria-describedby={open ? "simple-popper" : undefined}
                    onMouseEnter={handleClick}
                    onMouseLeave={handleClose}
                  >
                    <Link to="courses_home" smooth="true" duration={750}>
                      <Button
                        disableRipple
                        sx={{
                          color: "black.400",
                          fontSize: 15,
                          fontWeight: "regular",
                          textTransform: "capitalize",
                          letterSpacing: 1,
                          "&:hover": {
                            color: "black.800",
                            fontWeight: "bolder",
                            textDecoration: "underline",
                            textUnderlineOffset: 6,
                            textDecorationThickness: 2,
                          },
                        }}
                        endIcon={<KeyboardArrowDown />}
                      >
                        courses
                      </Button>
                    </Link>
                    <Popper
                      id="simple-popper"
                      open={open}
                      anchorEl={anchorEl}
                      transition
                    >
                      {({ TransitionProps }) => (
                        <Fade {...TransitionProps} timeout={250}>
                          <Paper
                            id="dropdown-container"
                            onMouseLeave={handleClose}
                            sx={{
                              mt: { lg: 3, xl: 4 },
                              py: 1,
                              px: 2,
                              color: "white.900",
                              backgroundColor: "black.600",
                            }}
                          >
                            <Grid
                              container
                              direction="column"
                              justifyContent="center"
                              alignItems="stretch"
                              spacing={1}
                              sx={{ textAlign: "center" }}
                            >
                              <Grid item>
                                <Button
                                  disableRipple
                                  onClick={() =>
                                    genFunc(navigate("/"), handleClose)
                                  }
                                  sx={{
                                    color: "white.900",
                                    fontSize: 14,
                                    fontWeight: "regular",
                                    textTransform: "capitalize",
                                    "&:hover": {
                                      fontWeight: "bold",
                                      textDecoration: "underline",
                                      textUnderlineOffset: 6,
                                      textDecorationThickness: 2,
                                    },
                                  }}
                                >
                                  Quran Courses
                                </Button>
                              </Grid>
                              <Grid item>
                                <Button
                                  disableRipple
                                  onClick={() =>
                                    genFunc(navigate("/"), handleClose)
                                  }
                                  sx={{
                                    color: "white.900",
                                    fontSize: 14,
                                    fontWeight: "regular",
                                    textTransform: "capitalize",
                                    "&:hover": {
                                      fontWeight: "bold",
                                      textDecoration: "underline",
                                      textUnderlineOffset: 6,
                                      textDecorationThickness: 2,
                                    },
                                  }}
                                >
                                  Islamic Courses
                                </Button>
                              </Grid>

                              <Grid item>
                                <Button
                                  disableRipple
                                  onClick={() =>
                                    genFunc(navigate("/"), handleClose)
                                  }
                                  sx={{
                                    color: "white.900",
                                    fontSize: 14,
                                    fontWeight: "regular",
                                    textTransform: "capitalize",
                                    "&:hover": {
                                      fontWeight: "bold",
                                      textDecoration: "underline",
                                      textUnderlineOffset: 6,
                                      textDecorationThickness: 2,
                                    },
                                  }}
                                >
                                  Academic Courses
                                </Button>
                              </Grid>
                            </Grid>
                          </Paper>
                        </Fade>
                      )}
                    </Popper>
                  </Grid>
                  <Grid item>
                    <Button
                      disableRipple
                      onClick={() => navigate("/pricing")}
                      sx={{
                        color: "black.400",
                        fontSize: 15,
                        fontWeight: "regular",
                        textTransform: "capitalize",
                        letterSpacing: 1,
                        "&:hover": {
                          color: "black.800",
                          fontWeight: "bolder",
                          textDecoration: "underline",
                          textUnderlineOffset: 6,
                          textDecorationThickness: 2,
                        },
                      }}
                    >
                      pricing
                    </Button>
                  </Grid>

                  <Grid item>
                    <Button
                      disableRipple
                      onClick={() => navigate("/faqs")}
                      sx={{
                        color: "black.400",
                        fontSize: 15,
                        fontWeight: "regular",
                        textTransform: "capitalize",
                        letterSpacing: 1,
                        "&:hover": {
                          color: "black.800",
                          fontWeight: "bolder",
                          textDecoration: "underline",
                          textUnderlineOffset: 6,
                          textDecorationThickness: 2,
                        },
                      }}
                    >
                      FAQs
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button
                      disableRipple
                      onClick={() => navigate("/donate-us")}
                      sx={{
                        color: "black.400",
                        fontSize: 15,
                        fontWeight: "regular",
                        textTransform: "capitalize",
                        letterSpacing: 1,
                        "&:hover": {
                          color: "black.800",
                          fontWeight: "bolder",
                          textDecoration: "underline",
                          textUnderlineOffset: 6,
                          textDecorationThickness: 2,
                        },
                      }}
                      endIcon={<Favorite />}
                    >
                      donate us
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item md={2} px={{ md: 1, lg: 3 }}>
                <Button
                  onClick={handleOpenModal}
                  sx={{
                    py: 1,
                    px: 2,
                    color: "white.900",
                    fontSize: 15,
                    fontWeight: "bold",
                    textTransform: "capitalize",
                    letterSpacing: 1,
                    border: 2,
                    borderColor: "black.600",
                    backgroundColor: "black.600",
                    borderRadius: 3,
                    "&:hover": {
                      color: "black.600",
                    },
                  }}
                >
                  get started
                </Button>
              </Grid>
            </Grid>

            {/* --- Menu for small displays --- */}
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
              display={{ md: "none" }}
            >
              {/* --- logo for small displays --- */}
              <Grid item xs={10}>
                <Typography
                  component="a"
                  onClick={() => navigate("/")}
                  sx={{ mx: 3, cursor: "pointer" }}
                >
                  <img src={sgnLogo} alt="sgn-logo" style={{ width: "20%" }} />
                </Typography>
              </Grid>
              {/* --- menu button for small displays --- */}
              <Grid item xs={2}>
                <IconButton
                  aria-label="open drawer"
                  onClick={handleDrawerToggle}
                  size="large"
                  sx={{
                    flexGrow: 0,
                    mr: 2,
                    display: { md: "none" },
                    "&:hover": {
                      color: "white.900",
                      borderRadius: 15,
                      backgroundColor: "black.800",
                    },
                  }}
                >
                  <Menu />
                </IconButton>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>

        {/* --- drawer menu for small displays --- */}
        <Box component="nav" sx={{ height: "auto" }}>
          <Drawer
            // container={container}
            variant="temporary"
            anchor="right"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{ keepMounted: true }}
            sx={{
              display: { xs: "block", md: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
                backgroundColor: "black.800",
                borderTopLeftRadius: 15,
                borderBottomLeftRadius: 15,
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>

        {/* --- Get Started Modal --- */}
        <Modal
          open={openModal}
          onClose={handleCloseModal}
          aria-labelledby="modal-get-started"
          aria-describedby="get started modal that will appera on clicking Get started button"
        >
          <Box sx={styles.modalStyles}>
            <Container borderRadius={3}>
              <GetStartedContent closeModal={handleCloseModal} />
            </Container>
          </Box>
        </Modal>
      </Box>
    </>
  );
};

export default MainNavbar;
