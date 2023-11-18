import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { useState, useEffect } from "react";
import tokenInterceptor from "../../functions/tokenInterceptor";
import Axios from "axios";
import dayjs from 'dayjs';
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";


export default function StackedBarChart({element}) {
    const [view, setView] = useState([]);
    const [year,setYear] = useState(dayjs().year())
    const handleChange = (e) => {
      setYear(e.target.value);
      console.log(year)
      
    };
  tokenInterceptor();
  const fetchView = () => {
    Axios.get(`http://localhost:8080/expense/${element}/${year}`, {
    }).then(
      (response) => {
        setView(response.data);
      });

  };

  useEffect(() => {
    fetchView();
  }, [year]);
  const years=[dayjs().year()-1,dayjs().year()]
  console.log(years)
  const extractData = () => {
    const categoryData = {};

    view.forEach((entry) => {
      const categoryName = entry.category.name;
      const monthIndex = entry.month - 1; // Months are 1-indexed in the API response

      if (!categoryData[categoryName]) {
        categoryData[categoryName] = Array(12).fill(0); // Initialize an array for each category
      }

      categoryData[categoryName][monthIndex] += entry.totalAmount;
    });

    const xLabels = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];

    const series = Object.entries(categoryData).map(([label, data], index) => ({
      data,
      label,
      id: `id-${index}`,
      stack: 'total',
    }));

    return { series, xLabels };
  };

  const { series, xLabels } = extractData();

  return (
   <div>
     <TextField
           id="year"
           select
           label="Select a year"
           size="small"
           value={year}
           onChange={handleChange}
           sx={{ m: 1, minWidth: 120 }}
         >
           {years.map((option,index) => (
             <MenuItem key={index} value={option}>
               {option}
             </MenuItem>
           ))}
         </TextField>
     <BarChart
       width={1000}
       height={500}
       series={series}
       xAxis={[{ data: xLabels, scaleType: 'band' }]}
     />
   </div>
  );
}