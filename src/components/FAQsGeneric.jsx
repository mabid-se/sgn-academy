import { ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

const FAQsGeneric = (props) => {
  const styles = {
    rounded: {
      borderTop: 0,
      borderRadius: 12,
      borderTopLeftRadius: 12,
      borderTopRightRadius: 12,
      "&:first-child": {
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
      },
      "&:last-child": {
        borderBottomLeftRadius: 12,
        borderBottomRightRadius: 12,
      },
      "&.Mui-expanded": { borderTop: 0 },
    },
  };

  const [expanded, setExpanded] = useState(1);

  const faqsHandler = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <>
      <Accordion
        key={props.data.id}
        expanded={expanded === props.data.id}
        onChange={faqsHandler(props.data.id)}
        elevation={4}
        style={styles.rounded}
        sx={{ my: 1 }}
      >
        <AccordionSummary
          expandIcon={<ExpandMore color="black.600" fontSize="large" />}
        >
          <Typography
            variant="subtitle1"
            mx={2}
            color="black.600"
            fontWeight={700}
          >
            {props.data.faqQuestion}
          </Typography>
        </AccordionSummary>

        <AccordionDetails
          sx={{
            backgroundColor: "white.800",
            borderBottomLeftRadius: 12,
            borderBottomRightRadius: 12,
          }}
        >
          <Typography variant="body1" mt={1} mx={2} color="black.400">
            {props.data.faqAnswer}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default FAQsGeneric;
