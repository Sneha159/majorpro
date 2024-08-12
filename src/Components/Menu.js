import { useEffect, useState } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

function Menu(){

const [menu , setMenu] = useState([])
const navigate = useNavigate();
useEffect(() =>{

  fetchMenu();
},[])

const fetchMenu = () => {

  axios.get('http://localhost:5000/menu')
  .then(response => {
    setMenu(response.data);
  })
  .catch(error =>{
    console.error("There was an error fetching the menu data",error)
  })
    
  }

  const handleDelete = (id) =>{
    axios.delete(`http://localhost:5000/menu/${id}`)
    .then(response => {
      fetchMenu();
    })
    .catch(error =>{
      console.error("There was an error deleting the menu data",error)
  })
  }
  return (
    <div className="container mt-4">
      <h1>Menu Component</h1>
      <div className="row">
        
        {menu.map(menu =>(

          <div className="col-md-4" key={menu.id}>
            <div className="card mb-4">
                      <img src={menu.image} height={300}  className="card-img-top" alt="due to internet connection it will take few minutes"/>
                      <div className="card-body">
                        <h5 className="card-title">{menu.name}</h5>
                        <p className="card-text">price: ${menu.price}</p>
                        <p className="card-text">Size: {menu.size}</p>
                        <p className="card-text">Quantity: {menu.quantity}</p>
                        <p className="card-text">AddToCart: {menu.addtocart}</p>
                        <button className="btn btn-danger me-2" onClick={()=> handleDelete(menu.id)}>DELETE</button>
                        <button className="btn btn-warning " onClick={()=> navigate(`/update-menu/${menu.id}`)}>UPDATE</button>
                      </div>
                  
            </div>
          </div>
        ))}
      </div>
      
    </div>
  )
}

export default Menu;  
 