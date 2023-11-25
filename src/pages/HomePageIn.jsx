import { Link } from "react-router-dom";
import * as React from 'react';
import Button from '@mui/joy/Button';
import bgimage from "../assets/solutions-expense-categories.jpg";
import CardContent from '@mui/joy/CardContent';
import CardActions from '@mui/joy/CardActions';
import CircularProgress from '@mui/joy/CircularProgress';
import Typography from '@mui/joy/Typography';
import Divider from '@mui/joy/Divider';
import Card from '@mui/joy/Card';
import Stepper from "@mui/joy/Stepper";
import Step from "@mui/joy/Step";
import StepIndicator from "@mui/joy/StepIndicator";
import BarChartIcon from '@mui/icons-material/BarChart';
import CategoryIcon from '@mui/icons-material/Category';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import AddCardIcon from '@mui/icons-material/AddCard';

const HomePageIn = () => {


  return (
    

<div style={{
        backgroundImage: `url(${bgimage})`,
        backgroundSize: "cover",
        minHeight: "100vh", // Adjust as needed
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}>
  <Card className="home" variant="outlined" sx={{ width: 1000,display:"flex",margin:"0 auto",marginTop:"2em" }} size="lg" color="primary" invertedColors>
        <CardContent orientation="horizontal">
       
        
          <CardContent>
          <Typography level="h1" sx={{textAlign:"center",color: "#1f2c61"}} >Welcome, we are glad you joined! </Typography>
        
           <Typography level="h3" sx={{ color: "#1f2c61" }}>Congratulations on taking the first step toward financial empowerment. We're thrilled to have you on board.  </Typography>
        <Divider orientation="horizontal" />
        <Typography level="h4">
        Getting Started:
           </Typography>
           <Divider orientation="horizontal" />
           <Stepper orientation="vertical" sx={{ width: 900,display:"flex",gap:"1em" }}>
              <Step
              orientation="vertical"
                indicator={
                  <StepIndicator  color="primary">
                  <LocalAtmIcon/>
                  </StepIndicator>
                }
              ><Card variant="outlined">
            <Typography level="h4" sx={{ color: "#1f2c61" }}>Add Your Expenses:</Typography>
            <Typography level="body1">
            Head to the "Expenses" page to start recording your spending. Simply tap the '+' button to add a new expense, enter the details, choose a category, and you're done! Expense Tracker will handle the rest, providing you with a clear picture of your spending patterns.</Typography>
           </Card >
           <Divider orientation="horizontal" />
                
              </Step>
              <Step orientation="vertical" indicator={<StepIndicator color="primary"><CategoryIcon/></StepIndicator>}>
                <Card variant="outlined">
           <Typography level="h4" sx={{ color: "#1f2c61" }}> Create Categories:</Typography>
            <Typography level="body1">
            Customize your expense categories on the "Categories" page. Tailor them to match your lifestyle and spending habits. This makes it easier to track where your money is going and helps you stick to your budget.</Typography>
            
           </Card >

                
              </Step>
              <Step  orientation="vertical" indicator={<StepIndicator color="primary"><AddCardIcon/></StepIndicator>}>
                {" "}
                <Card variant="outlined">
           <Typography level="h4" sx={{ color: "#1f2c61" }}>Register Payment Methods:</Typography>
            <Typography level="body1">
            Visit the "Methods" page to register your preferred payment methods. Whether it's credit cards, cash, or other means, keeping this information up-to-date ensures accurate tracking of your financial transactions.</Typography>
           </Card >

              </Step>
              <Step  orientation="vertical" indicator={<StepIndicator color="primary"><BarChartIcon/></StepIndicator>}>

                 <Card variant="outlined">
           <Typography level="h4" sx={{ color: "#1f2c61" }}>Explore Your Dashboard:</Typography>
            <Typography level="body1">
            Dive into the "Dashboard" to see a comprehensive overview of your yearly expenses, neatly divided by months. Gain valuable insights into your financial health and identify opportunities for savings. 
            </Typography>
            </Card >
              </Step>
              
            </Stepper>
           
  
           
           
           
          
          </CardContent>
        </CardContent>
        
        
      </Card>
         
</div>
      
    
  );
};
export default HomePageIn;
