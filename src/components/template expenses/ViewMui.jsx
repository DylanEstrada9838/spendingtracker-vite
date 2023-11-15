import { useState, useEffect } from "react";
import Axios from "axios";
import PieChartExpense from "../template expenses/PieChart";
import TableScrollable from "./TableScrollable";
import "../../styles/ViewMui.css";
import tokenInterceptor from "../../functions/tokenInterceptor";
import CreateModal from "./CreateModal";

const ViewMui = ({ element, id }) => {
  const [view, setView] = useState([]);

  tokenInterceptor();

  const fetchView = () => {
    Axios.get(`http://localhost:8080/${element}`).then((response) => {
      setView(response.data);
    });
  };

  useEffect(() => {
    fetchView();
  }, []);

  return (
    <div>
      <CreateModal element={element} />
      <div class="view-mui">
        <TableScrollable
          element={element}
          rows={view.map((item) => ({
            id: item.id,
            [element]: item.amount,
            category: item.category.name,
            method: item.method.name,
          }))}
        />
        <PieChartExpense element={"category"} id={id} value="totalAmount" />
        <PieChartExpense element={"method"} id={id} value="totalAmount" />
      </div>
    </div>
  );
};

export default ViewMui;
