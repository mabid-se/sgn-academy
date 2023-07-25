import { Box, Container, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import sectionBg from "../../assets/images/SectionBgArt3Light.svg";
import bankPay from "../../assets/images/bank-payment.png";
import wuPay from "../../assets/images/brands/western-union.png";
import riaPay from "../../assets/images/brands/ria-transfer.png";
import paypal from "../../assets/images/brands/paypal.png";

const PaymentMethods = () => {
  return (
    <>
      <Box
        py={{ xs: 6, md: 10 }}
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
            <Grid item>
              <Typography variant="h2" color="black.800" fontWeight="bold">
                Payment Methods
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="body1"
                sx={{
                  color: "black.400",
                  fontWeight: "medium",
                  textAlign: "center",
                }}
              >
                Bank Account, Western Union, Ria Exchange and Paypal
              </Typography>
            </Grid>

            <Grid item mt={8}>
              <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={2}
                display={{ xs: "none", md: "flex" }}
              >
                <Grid item md={2} textAlign="center" px={2}>
                  <img src={bankPay} alt="bankpay" style={{ width: "70%" }} />
                </Grid>
                <Grid item md={1} sx={{ margin: "0 auto" }}>
                  <Divider
                    orientation="vertical"
                    style={{
                      height: "65px",
                      width: "1px",
                      border: "2px dashed",
                      borderColor: "#a9a9a9",
                    }}
                    dashed
                  />
                </Grid>
                <Grid item md={2} textAlign="center" px={2}>
                  <img
                    src={wuPay}
                    alt="western-union"
                    style={{ width: "70%" }}
                  />
                </Grid>
                <Grid item md={1} sx={{ margin: "0 auto" }}>
                  <Divider
                    orientation="vertical"
                    style={{
                      height: "65px",
                      width: "1px",
                      border: "2px dashed",
                      borderColor: "#a9a9a9",
                    }}
                    dashed
                  />
                </Grid>

                <Grid item md={2} textAlign="center" px={2}>
                  <img src={riaPay} alt="ria-pay" style={{ width: "100%" }} />
                </Grid>
                <Grid item md={1} sx={{ margin: "0 auto" }}>
                  <Divider
                    orientation="vertical"
                    style={{
                      height: "65px",
                      width: "1px",
                      border: "2px dashed",
                      borderColor: "#a9a9a9",
                    }}
                    dashed
                  />
                </Grid>

                <Grid item md={3} textAlign="center" px={2}>
                  <img src={paypal} alt="paypal" style={{ width: "90%" }} />
                </Grid>
              </Grid>

              <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={4}
                px={{ xs: 2, sm: 6 }}
                display={{ xs: "flex", md: "none" }}
              >
                <Grid item xs={5} textAlign="center" px={3}>
                  <img src={bankPay} alt="bankpay" style={{ width: "70%" }} />
                </Grid>
                <Grid item xs={2} sx={{ margin: "0 auto" }}>
                  <Divider
                    orientation="vertical"
                    style={{
                      height: "45px",
                      width: "1px",
                      border: "2px dashed",
                      borderColor: "#a9a9a9",
                    }}
                    dashed
                  />
                </Grid>
                <Grid item xs={5} textAlign="center" px={3}>
                  <img
                    src={wuPay}
                    alt="western-union"
                    style={{ width: "70%" }}
                  />
                </Grid>

                <Grid item xs={5} px={3} textAlign="center">
                  <img src={riaPay} alt="ria-pay" style={{ width: "100%" }} />
                </Grid>
                <Grid item xs={2} sx={{ margin: "0 auto" }}>
                  <Divider
                    orientation="vertical"
                    style={{
                      height: "45px",
                      width: "1px",
                      border: "2px dashed",
                      borderColor: "#a9a9a9",
                    }}
                    dashed
                  />
                </Grid>
                <Grid item xs={5} px={3} textAlign="center">
                  <img src={paypal} alt="paypal" style={{ width: "90%" }} />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default PaymentMethods;
