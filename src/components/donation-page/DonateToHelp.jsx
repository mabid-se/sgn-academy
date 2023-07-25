import React from "react";

import sectionBg from "../../assets/images/SectionBgArt3Light.svg";
import masterCard from "../../assets/images/brands/mastercard.png";
import visaCard from "../../assets/images/brands/visacard.png";
import unionPay from "../../assets/images/brands/unionpay.png";
import easyPaisa from "../../assets/images/brands/easypaisa.png";
import jazzCash from "../../assets/images/brands/jazzcash.png";
import {
  Box,
  Button,
  Container,
  Divider,
  FormControl,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

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

  divider: { height: "100%", borderLeft: "3px dashed #a9a9a9" },
}));

const DonatToHelp = () => {
  const classes = useStyles();

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
            <Grid itme>
              <Typography variant="h4" color="black.800" fontWeight="medium">
                A Wish is hope,
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="h2"
                sx={{
                  color: "black.800",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                Donate Now to Help
              </Typography>
            </Grid>
            <Grid item mt={8}>
              <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="stretch"
                spacing={{ md: 4 }}
              >
                <Grid item xs={12} md={5} px={{ xs: 2, md: 8 }}>
                  <Paper
                    elevation={6}
                    sx={{
                      borderRadius: 6,
                      width: { xs: "100%", md: "430px", lg: "490px" },
                    }}
                  >
                    <Grid
                      container
                      direction="column"
                      justifyContent="center"
                      alignItems="stretch"
                      p={5}
                    >
                      <Grid item textAlign="center">
                        <Typography
                          variant="h5"
                          color="black.800"
                          fontWeight="bold"
                        >
                          Donate Via Card
                        </Typography>
                      </Grid>
                      <Grid item mt={1} textAlign="center">
                        <Typography
                          variant="body1"
                          sx={{
                            color: "black.400",
                            fontWeight: "medium",
                          }}
                        >
                          Donate as much as you like
                        </Typography>
                      </Grid>
                      <Grid item mt={3}>
                        <FormControl fullWidth>
                          <TextField
                            variant="outlined"
                            size="small"
                            className={classes.root}
                            label="Account Number"
                            id="acccount"
                            // error={accountError} value="account"
                            // onChange={(e) => handleChange(e, setAccount, setAccountError)}
                            // helperText={accountError ? "Account is required!" : ""}
                          />
                          <TextField
                            variant="outlined"
                            size="small"
                            className={classes.root}
                            label="Your Name"
                            id="name"
                            sx={{ mt: 2 }}
                            //error={nameError} value={name}
                            //onChange={(e) => handleChange(e, setName, setNameError)}
                            // helperText={nameError ? "Name is required!" : ""}
                          />
                          <TextField
                            variant="outlined"
                            size="small"
                            className={classes.root}
                            label="Card Number"
                            id="cardNo"
                            sx={{ mt: 2 }}
                            //error={cardNoError} value={cardNo}
                            //onChange={(e) => handleChange(e, setCardNo, setCardNoError)}
                            // helperText={cardNoError ? "Card Number is required!" : ""}
                          />
                          <TextField
                            variant="outlined"
                            size="small"
                            className={classes.root}
                            label="Exp Date"
                            id="expDate"
                            sx={{ mt: 2 }}
                            //error={expDateError} value={expDate}
                            //onChange={(e) => handleChange(e, setExpDate, setExpDateError)}
                            // helperText={expDateError ? "Exp Date is required!" : ""}
                          />
                          <TextField
                            variant="outlined"
                            size="small"
                            className={classes.root}
                            label="CVC"
                            id="cvc"
                            sx={{ mt: 2 }}
                            //error={cvcError} value={cvc}
                            //onChange={(e) => handleChange(e, setCvc, setCvcError)}
                            // helperText={cvcError ? "CVC Date is required!" : ""}
                          />
                        </FormControl>
                      </Grid>
                      <Grid item mt={4} textAlign="center">
                        <Grid
                          container
                          direction="row"
                          justifyContent="center"
                          alignItems="center"
                        >
                          <Grid item xs={3}>
                            <img
                              src={visaCard}
                              alt="visa-card"
                              style={{ width: "65%" }}
                            />
                          </Grid>
                          <Grid item xs={3}>
                            <img
                              src={masterCard}
                              alt="master-card"
                              style={{ width: "65%" }}
                            />
                          </Grid>
                          <Grid item xs={3}>
                            <img
                              src={unionPay}
                              alt="union-pay"
                              style={{ width: "65%" }}
                            />
                          </Grid>
                        </Grid>
                      </Grid>

                      <Grid item mt={3} textAlign="center">
                        <Button
                          disableRipple
                          onClick=""
                          sx={{
                            py: 1,
                            px: 3,
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
                          Donate Now
                        </Button>
                      </Grid>
                    </Grid>
                  </Paper>
                </Grid>
                <Grid
                  item
                  xs={0}
                  md={2}
                  py={10}
                  pl={22}
                  display={{ xs: "none", md: "flex" }}
                >
                  <Grid
                    container
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    py={5}
                    pl={4}
                  >
                    <Grid item>
                      <Divider
                        orientation="vertical"
                        style={{
                          height: "500px",
                          width: "1px",
                          border: "2px dashed #a9a9a9",
                          borderColor: "#a9a9a9",
                        }}
                        dashed
                      />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={5}
                  mt={{ xs: 4, md: 0 }}
                  px={{ xs: 2, md: 8 }}
                >
                  <Paper
                    elevation={6}
                    sx={{
                      borderRadius: 6,
                      width: { xs: "100%", md: "430px", lg: "490px" },
                    }}
                  >
                    <Grid
                      container
                      direction="column"
                      justifyContent="center"
                      alignItems="stretch"
                      p={5}
                    >
                      <Grid item textAlign="center">
                        <img
                          src={easyPaisa}
                          alt="easypaisa"
                          style={{ width: "45%" }}
                        />
                      </Grid>
                      <Grid item textAlign="center">
                        <Typography
                          variant="h6"
                          color="black.800"
                          fontWeight="bold"
                        >
                          Donate Via EasyPaisa
                        </Typography>
                      </Grid>
                      <Grid item textAlign="center">
                        <Typography
                          variant="body1"
                          sx={{
                            color: "black.400",
                            fontWeight: "medium",
                          }}
                        >
                          Donate as much as you like
                        </Typography>
                      </Grid>
                      <Grid item mt={3}>
                        <Grid
                          container
                          direction="row"
                          justifyContent="center"
                          alignItems="stretch"
                        >
                          <Grid item xs={5} textAlign="center">
                            <Grid display={{ xs: "none", md: "block" }}>
                              <Typography
                                variant="h6"
                                color="black.600"
                                fontWeight="bold"
                              >
                                Account Number
                              </Typography>
                              <Typography
                                mt={1}
                                variant="subtitle1"
                                color="black.600"
                                fontWeight="medium"
                              >
                                +92 309 0724305
                              </Typography>
                            </Grid>
                            <Grid display={{ xs: "block", md: "none" }}>
                              <Typography
                                variant="subtitle1"
                                color="black.600"
                                fontWeight="bold"
                              >
                                Acc. Number
                              </Typography>
                              <Typography
                                mt={1}
                                variant="subtitle2"
                                color="black.600"
                                fontWeight="medium"
                              >
                                +92 309 0724305
                              </Typography>
                            </Grid>
                          </Grid>
                          <Grid
                            item
                            xs={2}
                            pt={2}
                            pb={1}
                            pl={{ xs: 3, md: 5 }}
                            textAlign="center"
                          >
                            <Divider
                              orientation="vertical"
                              style={{
                                width: "1px",
                                border: "2px dashed #a9a9a9",
                                borderColor: "#a9a9a9",
                              }}
                              dashed
                            />
                          </Grid>
                          <Grid item xs={5} textAlign="center">
                            <Grid display={{ xs: "none", md: "block" }}>
                              <Typography
                                variant="h6"
                                color="black.600"
                                fontWeight="bold"
                              >
                                Account Title
                              </Typography>
                              <Typography
                                mt={1}
                                variant="subtitle1"
                                color="black.600"
                                fontWeight="medium"
                              >
                                SGN Academy
                              </Typography>
                            </Grid>
                            <Grid display={{ xs: "block", md: "none" }}>
                              <Typography
                                variant="subtitle1"
                                color="black.600"
                                fontWeight="bold"
                              >
                                Acc. Title
                              </Typography>
                              <Typography
                                mt={1}
                                variant="subtitle2"
                                color="black.600"
                                fontWeight="medium"
                              >
                                SGN Academy
                              </Typography>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>

                      <Grid item mt={1} textAlign="center">
                        <img
                          src={jazzCash}
                          alt="jazzcash"
                          style={{ width: "35%" }}
                        />
                      </Grid>
                      <Grid item textAlign="center">
                        <Typography
                          variant="h6"
                          color="black.800"
                          fontWeight="bold"
                        >
                          Donate Via JazzCash
                        </Typography>
                      </Grid>
                      <Grid item textAlign="center">
                        <Typography
                          variant="body1"
                          sx={{
                            color: "black.400",
                            fontWeight: "medium",
                          }}
                        >
                          Donate as much as you like
                        </Typography>
                      </Grid>
                      <Grid item mt={3}>
                        <Grid
                          container
                          direction="row"
                          justifyContent="center"
                          alignItems="stretch"
                        >
                          <Grid item xs={5} textAlign="center">
                            <Grid display={{ xs: "none", md: "block" }}>
                              <Typography
                                variant="h6"
                                color="black.600"
                                fontWeight="bold"
                              >
                                Account Number
                              </Typography>
                              <Typography
                                mt={1}
                                variant="subtitle1"
                                color="black.600"
                                fontWeight="medium"
                              >
                                +92 309 0724305
                              </Typography>
                            </Grid>
                            <Grid display={{ xs: "block", md: "none" }}>
                              <Typography
                                variant="subtitle1"
                                color="black.600"
                                fontWeight="bold"
                              >
                                Acc. Number
                              </Typography>
                              <Typography
                                mt={1}
                                variant="subtitle2"
                                color="black.600"
                                fontWeight="medium"
                              >
                                +92 309 0724305
                              </Typography>
                            </Grid>
                          </Grid>
                          <Grid
                            item
                            xs={2}
                            pt={2}
                            pb={1}
                            pl={{ xs: 3, md: 5 }}
                            textAlign="center"
                          >
                            <Divider
                              orientation="vertical"
                              style={{
                                width: "1px",
                                border: "2px dashed #a9a9a9",
                                borderColor: "#a9a9a9",
                              }}
                              dashed
                            />
                          </Grid>
                          <Grid item xs={5} textAlign="center">
                            <Grid display={{ xs: "none", md: "block" }}>
                              <Typography
                                variant="h6"
                                color="black.600"
                                fontWeight="bold"
                              >
                                Account Title
                              </Typography>
                              <Typography
                                mt={1}
                                variant="subtitle1"
                                color="black.600"
                                fontWeight="medium"
                              >
                                SGN Academy
                              </Typography>
                            </Grid>
                            <Grid display={{ xs: "block", md: "none" }}>
                              <Typography
                                variant="subtitle1"
                                color="black.600"
                                fontWeight="bold"
                              >
                                Acc. Title
                              </Typography>
                              <Typography
                                mt={1}
                                variant="subtitle2"
                                color="black.600"
                                fontWeight="medium"
                              >
                                SGN Academy
                              </Typography>
                            </Grid>
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

export default DonatToHelp;
