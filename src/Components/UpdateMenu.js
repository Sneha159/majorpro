import { useFormik} from "formik";
import * as Yup from 'yup';
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function UpdateMenu(){

    const {id} = useParams();
    const[menu , setMenu]= useState(null);

  const navigate = useNavigate();
   useEffect(()=>{
    axios.get(`http://localhost:5000/menu/${id}`)
    .then(response => {
            setMenu(response.data);
    })
    .catch(error => {
      console.erroe("There was An Error Fetching the Menu data ",error)
    })
 
},[id])
 
    const formik =useFormik({

      initialValues:{
        image:menu?.image ||'',
        name:menu?.name ||'',
        price:menu?.price ||'',
        quantity:menu?.quantity ||'',
        size:menu?.size ||''
      },

      enableReinitialize:true,

      validationSchema: Yup.object({
        image: Yup.string().required("Image url required"),
        name : Yup.string()
                .min(5,'Name must be at least 5 characters')
                .required('Name is Reouired'),
        price: Yup.number()
                 .min(1,'Price must be at greater then 0')
                 .required('Price is Reouired'),
        quantity: Yup.number()
                 .min(1,'Quantity must be at greater then 0')
                 .required('Quantity is Reouired'),
        size: Yup.string().required('Size  is Reouired'),
        


      }),

      onSubmit:(values , {setSubmitting, resetForm , setStatus})=>{
        axios.put(`http://localhost:5000/menu/${id}`,values)
        .then(response=>{
          setStatus('success');
          resetForm();
          navigate('/menu')
        })

        .catch(error=>{
          setStatus('error');
        })

        .finally(()=>{
          setSubmitting(false);
        });
      },

    });


    return(
      <div className="container mt-4">
        <h2>Update Menu</h2>
        <form onSubmit={formik.handleSubmit}>
          <div className="mb-3">
            <label htmlFor="image" className="form-label">Image URL</label>
            <input
              id="image"
              name="image"
              type="text"
              className="form-control"
              onChange={formik.handleChange}
            
              value={formik.values.image}
              />

              {
                formik.touched.image && formik.errors.image ? (
                  <div className="text-danger">{formik.errors.image}</div>
                ):null
              }

          </div>

          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              className="form-control"
              onChange={formik.handleChange}
            
              value={formik.values.name}
              />

              {
                formik.touched.name && formik.errors.name ? (
                  <div className="text-danger">{formik.errors.name}</div>
                ):null
              }

          </div>

          <div className="mb-3">
            <label htmlFor="price" className="form-label">Price</label>
            <input
              id="price"
              name="price"
              type="number"
              className="form-control"
              onChange={formik.handleChange}
            
              value={formik.values.price}
              />

              {
                formik.touched.price && formik.errors.price ? (
                  <div className="text-danger">{formik.errors.price}</div>
                ):null
              }

          </div>

          <div className="mb-3">
            <label htmlFor="quantity" className="form-label">Quantity</label>
            <input
              id="quantity"
              name="quantity"
              type="number"
              className="form-control"
              onChange={formik.handleChange}
            
              value={formik.values.quantity}
              />

              {
                formik.touched.quantity && formik.errors.quantity ? (
                  <div className="text-danger">{formik.errors.quantity}</div>
                ):null
              }

          </div>
          <div className="mb-3">
            <label htmlFor="size" className="form-label">Size</label>
            <input
              id="size"
              name="size"
              type="text"
              className="form-control"
              onChange={formik.handleChange}          
              value={formik.values.size}
              />

              {
                formik.touched.size && formik.errors.size ? (
                  <div className="text-danger">{formik.errors.size}</div>
                ):null
              }

          </div>



              <button type="submit" className="btn btn-primary">
                submit
              </button>

        </form>

      </div>
    )

  }
export  default UpdateMenu;