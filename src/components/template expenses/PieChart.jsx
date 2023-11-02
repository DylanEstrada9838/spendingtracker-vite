import { useState,useEffect } from 'react'

import Axios from 'axios';

import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';

const PieChartExpense= ({element,id,value})=>{
  const [view, setView] = useState([])
  
  const fetchView = ()=>{
    const token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjk4MDM2NDQzfQ._fSAHLuKYhvjk17Pv9MDvljwPNU2Ttl7G8w566sUWis"

    Axios.get(`http://localhost:8080/expense/${element}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }}).then((response)=>{
      setView(response.data)
      console.log(view)
    })
  }

  useEffect(()=>{
    fetchView();
  },[]);

  return (
    <PieChart
      series={[
        {
          data: view.map(item => ({
            id: item[id],
            value: item[value],
            label: item[element].name
        }))
        },
      ]}
      width={400}
      height={200}
    />   
                
  );
};

export default PieChartExpense;