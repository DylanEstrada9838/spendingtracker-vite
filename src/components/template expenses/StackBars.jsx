import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import { useState, useEffect } from "react";
import tokenInterceptor from "../../functions/tokenInterceptor";
import Axios from "axios";
import dayjs from "dayjs";
import { TextField, MenuItem } from "@mui/material";
import CardInvertedColors from "../Paper";
import PieChartExpense from "./PieChart";
import BaseUrl from '../../functions/baseUrl';
import CircularProgress from '@mui/material/CircularProgress';

export default function StackedBarChart({ element }) {
  const [view, setView] = useState([]);
  const [year, setYear] = useState(dayjs().year());
  const [total,setTotal] = useState("");
  const [PieChart,setPieChart] = useState([])
  const [loading,setLoading] = useState(false);

  const handleChange = (e) => {
    setYear(e.target.value);
    console.log(year);
  };

  tokenInterceptor();

  const fetchView = () => {
    Axios.get(`${BaseUrl}/expense/${element}/month/${year}`, {}).then(
      (response) => {
        setView(response.data);
        setLoading(true);
      }
    );

    Axios.get(`${BaseUrl}/expense/total/${year}`, {}).then(
      (response)=>{
        console.log(response.data)
        setTotal(response.data[0].totalAmount ? response.data[0].totalAmount.toFixed(2) : "0.00")
      }
    )
    Axios.get(`${BaseUrl}/expense/${element}/${year}`, {}).then(
      (response) => {
        setPieChart(response.data);
      }
    );
  };

  useEffect(() => {
    fetchView();
  }, [year]);

  const years = [dayjs().year() - 1, dayjs().year()];

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
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const series = Object.entries(categoryData).map(([label, data], index) => ({
      data,
      label,
      id: `id-${index}`,
      stack: "total",
    }));

    return { series, xLabels };
  };

  const { series, xLabels } = extractData();

  return (
     loading ?<div style={{display:"flex",alignItems:"flex-start",background:"white",padding:"20px",borderRadius:"20px"}}>
      <TextField
        id="year"
        select
        label="Select a year"
        size="small"
        value={year}
        onChange={handleChange}
        sx={{ m: 1, minWidth: 120 }}
      >
        {years.map((option, index) => (
          <MenuItem key={index} value={option}>
            {option}
          </MenuItem>
        ))}
     
        </TextField>
        <div style ={{display:"flex",flexDirection:"column",alignItems:"stretch",gap:"1em",textAlign:"center"}}>
          <CardInvertedColors year={year} total={total}  />
          <PieChartExpense element={element} id={"CategoryId"} value="totalAmount" year={year} data={PieChart}/> 
        </div>
        <BarChart
          width={910}
          height={500}
          series={series.reverse()}
          xAxis={[{ data: xLabels, scaleType: "band" }]}
        />
      
    </div>:<CircularProgress sx={{display:"flex",margin:"0 auto"}}/>
        
  );
}
