import { Link } from "react-router-dom";
import * as React from 'react';
import Button from '@mui/joy/Button';

import CardContent from '@mui/joy/CardContent';
import CardActions from '@mui/joy/CardActions';
import CircularProgress from '@mui/joy/CircularProgress';
import Typography from '@mui/joy/Typography';
import Divider from '@mui/joy/Divider';
import Card from '@mui/joy/Card';

const HomePageIn = () => {


  return (
    

<Card variant="solid" sx={{ width: 1000,display:"flex",margin:"0 auto",marginTop:"2em" }} size="lg" color="primary" invertedColors>
      <CardContent orientation="horizontal">
     
      
        <CardContent>
        <Typography level="h1" sx={{textAlign:"center"}} >Welcome, we are glad you joined! </Typography>
      
         <Typography level="h3">Congratulations on taking the first step toward financial empowerment. We're thrilled to have you on board.  </Typography>
      <Divider orientation="horizontal" />
      <Typography level="h4">
      Getting Started:
         </Typography>
         <Divider orientation="horizontal" />
         <Card variant="outlined">
          <Typography level="h4">Add Your Expenses:</Typography>
          <Typography level="body1">
          Head to the "Expenses" page to start recording your spending. Simply tap the '+' button to add a new expense, enter the details, choose a category, and you're done! Expense Tracker will handle the rest, providing you with a clear picture of your spending patterns.</Typography>
         </Card >
         <Divider orientation="horizontal" />

         <Card variant="outlined">
         <Typography level="h4"> Create Categories:</Typography>
          <Typography level="body1">
          Customize your expense categories on the "Categories" page. Tailor them to match your lifestyle and spending habits. This makes it easier to track where your money is going and helps you stick to your budget.</Typography>
          
         </Card >
         
         <Card variant="outlined">
         <Typography level="h4">Register Payment Methods:</Typography>
          <Typography level="body1">
          Visit the "Methods" page to register your preferred payment methods. Whether it's credit cards, cash, or other means, keeping this information up-to-date ensures accurate tracking of your financial transactions.</Typography>
         </Card >
         <Card variant="outlined">
         <Typography level="h4">Explore Your Dashboard:</Typography>
          <Typography level="body1">
          Dive into the "Dashboard" to see a comprehensive overview of your yearly expenses, neatly divided by months. Gain valuable insights into your financial health and identify opportunities for savings. 
          </Typography>
          </Card >
        </CardContent>
      </CardContent>
      
      
    </Card>
       
      
    
  );
};
export default HomePageIn;
