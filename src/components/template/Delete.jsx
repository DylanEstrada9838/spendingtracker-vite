import { useState,useEffect } from 'react'
import Axios from 'axios';
import { useParams,useNavigate } from 'react-router-dom';

const Delete= ({element})=>{
  const [message, setMessage] = useState('');
  const [isError,setIsError] = useState(false)
  const {id}=useParams()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    const token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjk4MDM2NDQzfQ._fSAHLuKYhvjk17Pv9MDvljwPNU2Ttl7G8w566sUWis"

   Axios.delete(`http://localhost:8080/${element}/${id}`,{
    headers: {
      Authorization: `Bearer ${token}`
    }}).then((response)=>{
      console.log(response.data)
      setMessage("Deleted Succesfully")
      setIsError(false)
      setTimeout(() => {
        navigate(`/${element}`, { replace: true });
      }, 1500);
    }).catch((error)=>{
        console.log(error)
        setMessage("Record not deleted succesfully or record does not exist")
        setIsError(true)
    })
  }
  return (
    <div>
      <h2>Delete {`${element}`}</h2>
      <form onSubmit={handleSubmit}>
        <p>Are you sure you want to delete {`${element}`}?</p>
        <button class="btn btn-primary" type="submit">Delete</button>
        
        {isError ?<p style={{color:"red"}}>{message}</p> :<p style={{color:"green"}}>{message}</p> }

      </form>
      <button class="btn btn-danger" onClick={()=>navigate(`/${element}`, { replace: true })}>Cancel</button>
    </div>
  );
};

export default Delete