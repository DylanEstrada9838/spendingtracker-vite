import { useState, useEffect } from "react";
import Axios from "axios";
import PieChartExpense from "../template expenses/PieChart";
import TableScrollable from "./TableScrollable";
import "../../styles/ViewMui.css";
import tokenInterceptor from "../../functions/tokenInterceptor";
import CreateModal from "./CreateModal";
import BaseUrl from "../../functions/baseUrl";
import CircularProgress from '@mui/material/CircularProgress';
import bgimage from "../../assets/solutions-expense-categories.jpg";

const ViewMui = ({ element, id }) => {
  const [view, setView] = useState([]);
  const [loading,setLoading] = useState(false);

  tokenInterceptor();

  const fetchView = () => {
    Axios.get(`${BaseUrl}/${element}`).then((response) => {
      setView(response.data);
        setLoading(true);
    });
  };

  useEffect(() => {
    fetchView();
  }, []);

  return (
   
      <div style={{
        backgroundImage: `url(${bgimage})`,
        backgroundSize: "cover",
        minHeight: "100vh",
        // Adjust as needed
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap:"2em",
    
      }} >
        <CreateModal element={element} class="buttonExpense" />
        {loading ?<TableScrollable
          element={element}
          rows={view.map((item) => ({
            id: item.id,
            [element]: ` - $ ${item.amount.toFixed(2)}`,
            date:`${(item.date).substring(0,10)}`,
            category: item.category.name,
            method: item.method.name,
          }))}
        />:<CircularProgress sx={{display:"flex",margin:"0 auto"}}/>}
      </div>
    
  );
};

export default ViewMui;
