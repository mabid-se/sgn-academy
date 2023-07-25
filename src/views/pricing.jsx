import React from "react";

import HeroSectPricing from "../components/pricing-page/HeroSectPricing";
import PaymentMethods from "../components/pricing-page/PaymentMethods";
import RegAndPayment from "../components/pricing-page/RegAndPayment";
import SecurityComp from "../components/pricing-page/SecurityComp";
import StillConfused from "../components/pricing-page/StillConfused";

const Pricing = () => {
  return (
    <>
      <HeroSectPricing />
      <RegAndPayment />
      <PaymentMethods />
      <SecurityComp />
      <StillConfused />
    </>
  );
};

export default Pricing;
