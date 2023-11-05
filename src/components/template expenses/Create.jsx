import { useState, useEffect } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import ButtonSubmit from "../ButtonSubmit";
import ButtonCancel from "../ButtonCancel";
const Create = ({ element }) => {
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [methodId, setMethodId] = useState("");
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [methods, setMethods] = useState([]);

  const handleChangeAmount = (e) => {
    setAmount(e.target.value);
  };
  const handleChangeDescription = (e) => {
    setDescription(e.target.value);
  };
  const handleChangeCategoryId = (e) => {
    setCategoryId(e.target.value);
  };
  const handleChangeMethodId = (e) => {
    setMethodId(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjk4MDM2NDQzfQ._fSAHLuKYhvjk17Pv9MDvljwPNU2Ttl7G8w566sUWis";

    Axios.post(
      `http://localhost:8080/${element}`,
      {
        amount: amount,
        description: description,
        categoryId: categoryId,
        methodId: methodId,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
      .then((response) => {
        console.log(response.data);
        setMessage("Created succesfully");
        setIsError(false);
        setTimeout(() => {
          navigate(`/${element}`, { replace: true });
        }, 1500);
      })
      .catch((error) => {
        console.log(error);
        setMessage(error.response.data.message);
        setIsError(true);
      });
  };

  const fetchView = () => {
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjk4MDM2NDQzfQ._fSAHLuKYhvjk17Pv9MDvljwPNU2Ttl7G8w566sUWis";

    Axios.get(`http://localhost:8080/category`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
      });
    Axios.get(`http://localhost:8080/method`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        setMethods(response.data);
      })
      .catch((error) => {
        console.error("Error fetching methods:", error);
      });
  };

  useEffect(() => {
    // Fetch categories and methods from your server using Axios
    fetchView();
  }, []);

  return (
    <div>
      <h2>Add a new {`${element}`}</h2>
      <form onSubmit={handleSubmit}>
        <div class="form-floating mb-3">
          <input
            type="number"
            class="form-control"
            id="amount"
            value={amount}
            onChange={handleChangeAmount}
          />
          <label for="amount"> $ Amount </label>
        </div>
        <div class="form-floating mb-3">
          <input
            type="text"
            class="form-control"
            id="desc"
            value={description}
            onChange={handleChangeDescription}
          />
          <label for="desc">Description (Optional)</label>
        </div>

        <select
          class="form-select form-select-lg mb-3"
          aria-label="Large select example"
          id="category"
          name="category"
          value={categoryId}
          onChange={handleChangeCategoryId}
        >
          <option selected>Select Category</option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>

        <select
          class="form-select form-select-lg mb-3"
          aria-label="Large select example"
          id="category"
          name="method"
          value={methodId}
          onChange={handleChangeMethodId}
        >
          <option selected>Select Method</option>
          {methods.map((method) => (
            <option key={method.id} value={method.id}>
              {method.name}
            </option>
          ))}
        </select>
        <ButtonSubmit element={element} />
        {isError ? (
          <p style={{ color: "red" }}>{message}</p>
        ) : (
          <p style={{ color: "green" }}>{message}</p>
        )}
      </form>
      <ButtonCancel fn={() => navigate(`/${element}`, { replace: true })} />
    </div>
  );
};

export default Create;
