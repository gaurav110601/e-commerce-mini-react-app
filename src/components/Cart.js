import React from 'react'
import Single from './Single';

function Cart({cartItems}) {

    const Total = () => {
        let totalPrice = 0;
        for (const item of cartItems) {
          totalPrice += item.price;
        }
        return totalPrice.toFixed(2);
      };

  return (
    <>
    <div className="container">
        <div className="row">
        {cartItems.map((element)=>{
            return <div className="col-md-4" key={element.id}>
                <>
                <Single image={element.image} id={element.id} category={element.category} title={element.title} description={element.description} price={element.price}/>
                </>
            </div>
        })}
        </div>
    </div>
    <h2>Total Price : &#8377;{Total()}/-</h2>
    </>
  )
}

export default Cart;