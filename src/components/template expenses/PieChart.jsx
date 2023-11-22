import { useState, useEffect } from "react";
import Axios from "axios";
import * as React from "react";
import { PieChart } from "@mui/x-charts/PieChart";
import tokenInterceptor from "../../functions/tokenInterceptor";

const PieChartExpense = ({ element, id, value,year,data }) => {
 

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Expenses/{`${element} ${year}`} </h2>
      <PieChart
        series={[
          {
            data: data.map((item) => ({
              id: item[id],
              value: item[value],
              label: item[element].name,
            })),
            innerRadius: 50,
            outerRadius: 100,
      paddingAngle: 2,
      cornerRadius: 2,
      
          },
          
        ]}
        width={430}
        height={320}
        
      />
    </div>
  );
};

export default PieChartExpense;
