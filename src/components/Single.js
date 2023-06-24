import React from 'react'

function Single(props) {

  return (
    <>
    <div className="my-3">
        <div className="card" style={{height:"250px"}}>
            <img src={props.image} alt="" />
            <h6><p>{props.category}</p></h6>
            <h6><b><p>{props.title}</p></b></h6>
            <p>&#8377; {props.price} /-</p>
        </div>
    </div>
    </>
  )
}

export default Single;