import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Axios from "axios";
import Create from "./Create";
import PieChartExpense from "../template expenses/PieChart";
import BasicTable from "./TableMui";
import CreateMui from "./CreateMui";
import StickyHeadTable from "./TableScrollable";
import "../../styles/ViewMui.css";

const ViewMui = ({ element, id }) => {
  const [view, setView] = useState([]);

  const fetchView = () => {
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjk4MDM2NDQzfQ._fSAHLuKYhvjk17Pv9MDvljwPNU2Ttl7G8w566sUWis";

    Axios.get(`http://localhost:8080/${element}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((response) => {
      setView(response.data);
    });
  };

  useEffect(() => {
    fetchView();
  }, []);

  return (
    <div>
      <CreateMui element={element} />
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
