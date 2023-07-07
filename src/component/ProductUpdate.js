import React, {useState } from 'react'

function ProductUpdate() {
    const[data,setData]=useState('');
    const[intvalue,setValue]=useState(0);
    const[productId,setProductId]=useState(0);
function handleSubmit(){
    alert("Product Updated Succesfully")
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id:productId,productName: data,price: intvalue})
        };
        fetch('http://localhost:3070/product/update', requestOptions)
            .then(response => response.json())
            .then(data => console.log(data.id));
}
  return (
    <>
     <div style={{margin:"40px"}}>
        <h3>Enter Product Details To Update</h3>
    <input type='integer' value={productId} onChange={(e)=>setProductId(e.target.value)} className='mx-2' placeholder='Enter The Product Id:'/>
    <input type='string' value={data} onChange={(e)=>setData(e.target.value)} className='mx-2' placeholder='Enter The Product Name:'/>
    <input type='integer' value={intvalue} onChange={(e)=>setValue(e.target.value)} className='mx-2' placeholder='Enter The Product Price'/>
    <button type="button" className="btn btn-dark" onClick={handleSubmit}>Submit</button>
    </div>
    </>
  )
}

export default ProductUpdate