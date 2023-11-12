import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Axios from "axios";
import PieChartExpense from "../template expenses/PieChart";
import StickyHeadTable from "./TableScrollable";
import "../../styles/ViewMui.css";
import tokenInterceptor from "../../functions/tokenInterceptor";
import CreateModal from "./CreateModal";


const ViewMui = ({ element, id }) => {
  const [view, setView] = useState([]);

  tokenInterceptor();

  const fetchView = () => {
    Axios.get(`http://localhost:8080/${element}`,)
    .then((response) => {
      setView(response.data);
    });
  };

  useEffect(() => {
    fetchView();
  }, []);

  return (
    <div>
      <CreateModal element={element}/>
      <div class="view-mui">
        <StickyHeadTable
          element={element}
          rows={view.map((item) => ({ id: item.id, [element]: item.name }))}
        />
        <PieChartExpense element={element} id={id} value="totalAmount" />
      </div>
    </div>
  );
};

export default ViewMui;
