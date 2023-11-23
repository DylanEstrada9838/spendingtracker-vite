import { useState, useEffect } from "react";
import Axios from "axios";
import PieChartExpense from "../template expenses/PieChart";
import TableScrollable from "./TableScrollable";
import "../../styles/ViewMui.css";
import tokenInterceptor from "../../functions/tokenInterceptor";
import CreateModal from "./CreateModal";
import BaseUrl from "../../functions/baseUrl";

const ViewMui = ({ element, id }) => {
  const [view, setView] = useState([]);

  tokenInterceptor();

  const fetchView = () => {
    Axios.get(`${BaseUrl}/${element}`).then((response) => {
      setView(response.data);
    });
  };

  useEffect(() => {
    fetchView();
  }, []);

  return (
    <div>
      
      <div class="view-mui" >
        <CreateModal element={element} class="buttonExpense" />
        <TableScrollable
          element={element}
          rows={view.map((item) => ({
            id: item.id,
            [element]: ` - $ ${item.amount.toFixed(2)}`,
            date:`${(item.date).substring(0,10)}`,
            category: item.category.name,
            method: item.method.name,
          }))}
        />
      </div>
    </div>
  );
};

export default ViewMui;
