import React from 'react'
// import { useState } from 'react';
// import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from './ExampleCarouselImage';

// function ControlledCarousel() {
//   const [index, setIndex] = useState(0);

//   const handleSelect = (selectedIndex) => {
//     setIndex(selectedIndex);
//   };
// }

// export default ControlledCarousel;

const Cards = () => {
  return (
  <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
  <div>
    <div>
      <div className="card mt-3" style={{ "width": "18rem", "maxHeight": "360px" }}>
        <img src="https://images.unsplash.com/photo-1588428894220-ae6af96e8c2d?q=80&w=1457&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></img>
        <div className="card-body">
          <h5 className="card-title">momo</h5>
          <p className="card-text">its important text</p>
          <div className='container w-100' style={{ display: "flex", flexDirection: "column" }}>
            <select className='m-2 h-100 bg-success rounded'>
              {Array.from(Array(10), (e, i) => {
                return (
                  <option key={i + 1} value={i + 1}>{i + 1} </option>
                )
              })}
            </select>
            <select className='m-2 h-100 bg-success rounded'>
              <option value="half">Half</option>
              <option value="Full">Full</option>
            </select>
            <div className='d-inline h-100 fs-5'>Total price</div>
          </div>
         </div>
        </div>
      </div>
    </div>
  </div>

  )
}

export default Cards;