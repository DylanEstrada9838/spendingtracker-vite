import { Link } from "react-router-dom";
import * as React from "react";
import Button from "@mui/joy/Button";
import Stepper from "@mui/joy/Stepper";
import Step from "@mui/joy/Step";
import StepIndicator from "@mui/joy/StepIndicator";
import CardContent from "@mui/joy/CardContent";
import CardActions from "@mui/joy/CardActions";
import CircularProgress from "@mui/joy/CircularProgress";
import Typography from "@mui/joy/Typography";
import Divider from "@mui/joy/Divider";
import Card from "@mui/joy/Card";
import bgimage from "../assets/solutions-expense-categories.jpg";
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

const HomePage = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${bgimage})`,
        backgroundSize: "cover",
        minHeight: "100vh", // Adjust as needed
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card
        className="home"
        variant="outlined"
        sx={{
          width: 1200,
          display: "flex",
          margin: "0 auto",
          height:800,
          marginTop:8
          
        }}
        size="lg"
        color="primary"
        invertedColors
      >
        <CardContent orientation="horizontal">
          <CardContent>
            <Typography
              className="typing-text"
              level="h1"
              sx={{ color: "#1f2c61" }}
            >
              Welcome to your Ultimate Expense Tracker!{" "}
            </Typography>
            <Typography level="h3">
              Are you ready to take control of your finances and make informed
              decisions about your money? Look no further! Expense Tracker is
              the perfect companion for managing your expenses seamlessly.
            </Typography>
            <Divider orientation="horizontal" />
            <Typography level="h4">Key Features:</Typography>

            <Stepper orientation="horizontal" sx={{ width: 1150,display:"flex",gap:"1em" }}>
              <Step
              orientation="vertical"
                indicator={
                  <StepIndicator  color="primary">
                    <AttachMoneyIcon/>
                  </StepIndicator>
                }
              >
                <Card variant="outlined">
                  <Typography level="h4" sx={{ color: "#1f2c61" }}>
                    Effortless Expense Tracking:
                  </Typography>
                  <Typography level="body1">
                    Say goodbye to manual record-keeping. With Expense Tracker,
                    tracking your expenses is as easy as a few taps. Categorize
                    your spending, set budgets, and gain insights into your
                    financial habits.
                  </Typography>
                </Card>
              </Step>
              <Step orientation="vertical" indicator={<StepIndicator color="primary"><QueryStatsIcon/></StepIndicator>}>
                <Card variant="outlined">
                  <Typography level="h4" sx={{ color: "#1f2c61" }}>
                    {" "}
                    Real-time Insights:
                  </Typography>
                  <Typography level="body1">
                    Get a clear overview of your financial health with real-time
                    insights and beautifully presented analytics. Understand
                    where your money is going and identify opportunities for
                    savings.
                  </Typography>
                </Card>
              </Step>
              <Step  orientation="vertical" indicator={<StepIndicator color="primary"><VpnKeyIcon/></StepIndicator>}>
                {" "}
                <Card variant="outlined">
                  <Typography level="h4">Secure and Private:</Typography>
                  <Typography level="body1" sx={{ color: "#1f2c61" }}>
                    We prioritize your data security. Rest easy knowing that
                    your financial information is encrypted and stored securely.
                    Your privacy is our top priority.
                  </Typography>
                </Card>
              </Step>
            </Stepper>

            <Divider orientation="horizontal" />
          </CardContent>
        </CardContent>
        <CardActions>
          <Link to={`/sign-in`}>
            <Button variant="solid" size="sm">
              Sign-In
            </Button>
          </Link>
          <Link to={`/sign-up`}>
            <Button variant="solid" size="sm">
              Sign-Up
            </Button>
          </Link>
        </CardActions>
      </Card>
    </div>
  );
};
export default HomePage;
