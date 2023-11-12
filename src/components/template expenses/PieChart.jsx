import { useState, useEffect } from "react";
import Axios from "axios";
import * as React from "react";
import { PieChart } from "@mui/x-charts/PieChart";
import tokenInterceptor from "../../functions/tokenInterceptor";

const PieChartExpense = ({ element, id, value }) => {
  const [view, setView] = useState([]);
  tokenInterceptor();
  const fetchView = () => {
    Axios.get(`http://localhost:8080/expense/${element}`, {}).then(
      (response) => {
        setView(response.data);
      }
    );
  };

  useEffect(() => {
    fetchView();
  }, []);

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Total expenses by {element} </h2>
      <PieChart
        series={[
          {
            data: view.map((item) => ({
              id: item[id],
              value: item[value],
              label: item[element].name,
            })),
          },
        ]}
        width={400}
        height={200}
      />
    </div>
  );
};

export default PieChartExpense;
