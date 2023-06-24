import React, { useEffect, useState } from 'react'
import Single from './Single';

function Allproducts({addToCart}) {
    const [products,setProducts]=useState([]);

    const fetchData= async ()=> {
        let data= await fetch('https://fakestoreapi.com/products');
        let parsedData= await data.json();
        setProducts(parsedData);
        console.log(products);
    }
    useEffect(()=>{
        fetchData();
        // eslint-disable-next-line
    },[]);

  return (
    <>
    <div className="container">
        <div className="row">
        {products.map((element)=>{
            return <div className="col-md-4" key={element.id}>
                <>
                <Single image={element.image} id={element.id} category={element.category} title={element.title} description={element.description} price={element.price}/>
                <button className='btn btn-primary' onClick={()=>{addToCart(element)}}>Add to cart</button>
                </>
            </div>
        })}
        </div>
    </div>
    </>
  )
}

export default Allproducts;