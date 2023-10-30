import { useState,useEffect } from 'react'
import {Link,useNavigate} from 'react-router-dom'
import Axios from 'axios';

const View = ({element})=>{
  const [view, setView] = useState([])
  
  const fetchView = ()=>{
    const token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjk4MDM2NDQzfQ._fSAHLuKYhvjk17Pv9MDvljwPNU2Ttl7G8w566sUWis"

    Axios.get(`http://localhost:8080/${element}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }}).then((response)=>{
      setView(response.data)
      console.log(view)
    })
  }

  useEffect(()=>{
    fetchView();
  },[]);

  return (
    <div>
      <Link to={`create`}>
        <button class="btn btn-primary">
          Add {`${element}`} <i class="bi bi-plus"></i>
        </button>
        </Link>
      <table class="table">
      <thead>
        <tr>
        <th scope="col" >{element}</th>
        </tr>
      </thead>
      <tbody>
      {view.map((elem) => 
      <tr key={elem.id}>
          <td>{elem.name} <div class="dropdown" style={{display:'inline'}}>
                    <button class="btn btn-secondary btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i class="bi bi-gear"></i>
                    </button>
                    <ul class="dropdown-menu">
                    
                              <Link to={`update/${elem.id}`}>
                                <li><a class="dropdown-item">Edit  <i class="bi bi-pencil-square"></i></a></li>
                              </Link >
                            
                        <Link to={`delete/${elem.id}`}>
                          <li><a class="dropdown-item">Delete   <i class="bi bi-trash"></i></a></li>
                        </Link>
                    </ul>
                </div></td>
          
        </tr>
            )}
      </tbody>
      </table>
    </div>
  );
};

export default View;