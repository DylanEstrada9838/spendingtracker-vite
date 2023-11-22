import * as React from 'react';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardActions from '@mui/joy/CardActions';
import CircularProgress from '@mui/joy/CircularProgress';
import Typography from '@mui/joy/Typography';

export default function CardInvertedColors({year,total}) {
  return (
    <Card variant="solid" color="primary" invertedColors>
      <CardContent orientation="horizontal">
        
        <CardContent>
          <Typography level="body-md">Total Expenses {year} </Typography>
          <Typography level="h2">$ {total}</Typography>
        </CardContent>
      </CardContent>
    </Card>
  );
}