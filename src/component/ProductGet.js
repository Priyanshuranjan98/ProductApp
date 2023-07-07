import React, { useEffect, useState } from 'react'

function ProductGet() {
    const[data,setData]=useState([]);
    useEffect(()=>{
        fetch("http://localhost:3070/products")
        .then(response=>response.json())
        .then(json=>{
            setData(json)
            console.log(json);
        })
    })
    function deleteHandler(id){
        alert("Product Deleted Sucessfully")
        fetch(`http://localhost:3070/product/delete/${id}`, { method: 'DELETE' })
        .then(() => console.log('Delete successful'));
    }
  return (
    <>
    <h1>Available Products!!!</h1>
    {data.map((elm)=>{
        return(
            <div>
                <h3>{`ID: ${elm.id} Name:${elm.productName}`}</h3>
                <h4>{`Price:${elm.price}`}</h4>
                <button type="button" className="btn btn-danger mx-2" onClick={()=>deleteHandler(elm.id)}>Delete</button>
                <hr/>
            </div>
        )
    })}

    </>
  )
}

export default ProductGet