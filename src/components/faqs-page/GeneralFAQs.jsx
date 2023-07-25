import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import FAQsGeneric from "../FAQsGeneric";

import { data } from "../../data/faqs-data";

const GeneralFAQs = () => {
  const faqList = data.genralFAQsList;
  return (
    <>
      <Box py={3}>
        <Container>
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item>
              <Typography variant="h2" color="black.800" fontWeight="bolder">
                General
              </Typography>
            </Grid>
            <Grid item mt={3} width={{ xs: "90%", md: "60%" }}>
              {faqList.map((faqItem) => (
                <FAQsGeneric data={faqItem} />
              ))}
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default GeneralFAQs;
