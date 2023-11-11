import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Axios from "axios";
import ButtonCreate from "../ButtonCreate";
import PieChartExpense from "./PieChart";

const View = ({ element }) => {
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
      <ButtonCreate element={element} />
      <table class="table">
        <thead>
          <tr>
            <th scope="col">{element}</th>
            <th>Category</th>
            <th>Method</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {view.map((elem) => (
            <tr key={elem.id}>
              <td>
                {" "}
                $ {elem.amount.toFixed(2)}{" "}
                <div class="dropdown" style={{ display: "inline" }}></div>
              </td>
              <td>{elem.category.name}</td>
              <td>{elem.method.name}</td>
              <td>
                <button
                  class="btn btn-secondary btn-sm dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i class="bi bi-gear"></i>
                </button>
                <ul class="dropdown-menu">
                  <Link to={`update/${elem.id}`}>
                    <li>
                      <a class="dropdown-item">
                        Edit <i class="bi bi-pencil-square"></i>
                      </a>
                    </li>
                  </Link>

                  <Link to={`delete/${elem.id}`}>
                    <li>
                      <a class="dropdown-item">
                        Delete <i class="bi bi-trash"></i>
                      </a>
                    </li>
                  </Link>
                </ul>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default View;
