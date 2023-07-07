import React from 'react'
import {useNavigate, Link} from "react-router-dom"

function Products() {
    const navigate = useNavigate();
  return (
   <>
   <h1>WELCOME TO PRODUCT PAGE</h1>
   <button type="button" onClick={()=>{navigate("/products/get")}} className="btn btn-success">Get All Products</button>
   <button type="button" onClick={()=>{navigate("/product/add")}} className="btn btn-primary mx-2">Create Product</button>
   <button type="button" onClick={()=>{navigate("/product/update")}} className="btn btn-secondary mx-2">Update Product</button>
   </>
  )
}

export default Products