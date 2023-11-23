import { Link } from "react-router-dom";
import * as React from 'react';
import Button from '@mui/joy/Button';

import CardContent from '@mui/joy/CardContent';
import CardActions from '@mui/joy/CardActions';
import CircularProgress from '@mui/joy/CircularProgress';
import Typography from '@mui/joy/Typography';
import Divider from '@mui/joy/Divider';
import Card from '@mui/joy/Card';

const HomePage = () => {
  return (
    

<Card variant="solid" sx={{ width: 1000,display:"flex",margin:"0 auto",marginTop:"2em" }} size="lg" color="primary" invertedColors>
      <CardContent orientation="horizontal">
     
      
        <CardContent>
           <Typography level="h1" sx={{textAlign:"center"}}>Welcome to your Ultimate Expense Tracker! </Typography>
      <Typography level="h3">Are you ready to take control of your finances and make informed decisions about your money? Look no further! Expense Tracker is the perfect companion for managing your expenses seamlessly.</Typography>
      <Divider orientation="horizontal" />
      <Typography level="h4">
          Key Features:
         </Typography>
         <Divider orientation="horizontal" />
         <Card variant="outlined">
          <Typography level="h4">Effortless Expense Tracking:</Typography>
          <Typography level="body1">
           Say goodbye to manual record-keeping. With Expense Tracker, tracking your expenses is as easy as a few taps. Categorize your spending, set budgets, and gain insights into your financial habits.
          </Typography>
         </Card >
         <Divider orientation="horizontal" />

         <Card variant="outlined">
         <Typography level="h4"> Real-time Insights:</Typography>
          <Typography level="body1">
          Get a clear overview of your financial health with real-time insights and beautifully presented analytics. Understand where your money is going and identify opportunities for savings.
          </Typography>
          
         </Card >
         <Card variant="outlined">
         <Typography level="h4">Secure and Private:</Typography>
          <Typography level="body1">
           We prioritize your data security. Rest easy knowing that your financial information is encrypted and stored securely. Your privacy is our top priority.
        </Typography>
         </Card >
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
       
      
    
  );
};
export default HomePage;
