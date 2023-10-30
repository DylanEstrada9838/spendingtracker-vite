import { useState,useEffect } from 'react'
import Axios from 'axios';
import { useParams,useNavigate } from 'react-router-dom';

const Update= ({element})=>{
  const [name, setName] = useState('')
  const [message, setMessage] = useState('');
  const [isError,setIsError] = useState(false)
  const {id}=useParams()
  const navigate = useNavigate()

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjk4MDM2NDQzfQ._fSAHLuKYhvjk17Pv9MDvljwPNU2Ttl7G8w566sUWis"

   Axios.put(`http://localhost:8080/${element}/${id}`, {name:name},{
    headers: {
      Authorization: `Bearer ${token}`
    }}).then((response)=>{
      console.log(response.data)
      setMessage("Updated succesfully")
      setIsError(false)
      setTimeout(() => {
        navigate(`/${element}`, { replace: true });
      }, 1500);
    }).catch((error)=>{
        console.log(error)
        setMessage("Not updated succesfully")
        setIsError(true)
    })
  }
  return (
    <div>
      <h2>Edit {`${element}`}</h2>
      <form onSubmit={handleSubmit}>
        <div class="form-floating mb-3">
            <input type="text" class="form-control" id="name" placeholder="Example: Gifts" 
            value={name}
            onChange={handleChange}/>
            <label for="name">New {`${element}`} name</label>
        </div>
        <button class="btn btn-primary" type="submit">Edit {`${element}`}</button>
        {isError ?<p style={{color:"red"}}>{message}</p> :<p style={{color:"green"}}>{message}</p> }
      </form>
      <button class="btn btn-danger" onClick={()=>navigate(`/${element}`, { replace: true })}>Cancel</button>
    </div>
  );
};

export default Update