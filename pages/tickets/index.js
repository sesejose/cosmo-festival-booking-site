import React, { useRef } from "react";
import Tickets from "../../components/Booking/Tickets";
import Acommodation from "../../components/Booking/Accommodation";
import Personal from "../../components/Booking/Personal";
import Payment from "../../components/Booking/Payment";
import Thanks from "../../components/Booking/Thanks";
import Context from "../../components/Context";
import { useContext } from "react";
// Routing
// import ReactDOM from "react-dom";
import { ReactDOM } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Anchor from "../../components/Anchor";
import Link from "next/link";

// Mobile Steper
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";

// Fonts
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Accommodation from "../../components/Booking/Accommodation";

const steps = [
  {
    label: <h1>Tickets</h1>,
    description: <Tickets></Tickets>,
  },
  {
    label: <h1>Accommodation</h1>,
    description: <Accommodation></Accommodation>,
  },
  {
    label: <h1>Personal Information</h1>,
    description: <Personal></Personal>,
  },
  {
    label: <h1>Pay with Credit Card</h1>,
    description: <Payment></Payment>,
  },
  {
    label: <h1>Your tickets!</h1>,
    description: <Thanks></Thanks>,
  },
];

function Pages(props) {
  const context = useContext(Context);
  const ticketsRef = useRef();
  const accommodationRef = useRef();
  const personalRef = useRef();
  const paymentRef = useRef();
  const thanksRef = useRef();

  //Steps
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = steps.length;
  // Handle functions onClick
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <>
      <section id="pages">
        <div className="container-page">
          <Box>
            {/* <Paper>
            <Typography className="white">{steps[activeStep].label}</Typography>
          </Paper> */}
            <Box>{steps[activeStep].description}</Box>
            <MobileStepper
              className="nav-steps"
              variant="text"
              steps={maxSteps}
              activeStep={activeStep}
              position="static"
              nextButton={
                <Button className="btn-steps" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
                  Next
                  {theme.direction === "rtl" ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
                </Button>
              }
              backButton={
                <Button className="btn-steps" onClick={handleBack} disabled={activeStep === 0}>
                  {theme.direction === "rtl" ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                  Back
                </Button>
              }
            />
          </Box>
        </div>
      </section>
    </>
  );
}

export default Pages;

// ReactDOM.render(
//   <BrowserRouter>
//     <Pages></Pages>
//   </BrowserRouter>,
//   document.getElementById("root")
// );
