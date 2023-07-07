import React, { useEffect, useState } from 'react'

function ProductAdd() {
    const[data,setData]=useState('');
    const[intvalue,setValue]=useState(0);
function handleSubmit(){
    alert("Product Added Succesfully")
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ productName: data,price: intvalue})
        };
        fetch('http://localhost:3070/products/add', requestOptions)
            .then(response => response.json())
            .then(data => console.log(data.id));
}

  return (
    <>
    <div style={{margin:"40px"}}>
        <h3>Enter Product Details</h3>
    <input type='string' value={data} onChange={(e)=>setData(e.target.value)} className='mx-2' placeholder='Enter The Product Name:'/>
    <input type='integer' value={intvalue} onChange={(e)=>setValue(e.target.value)} className='mx-2' placeholder='Enter The Product Price'/>
    <button type="button" className="btn btn-dark" onClick={handleSubmit}>Submit</button>
    </div>
    </>
  )
}


export default ProductAdd