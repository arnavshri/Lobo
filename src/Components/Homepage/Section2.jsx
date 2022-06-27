import React from 'react'
import "./Section2.css"
import magnifine from "../../Assets/Homepage/magnifine.png"
import cart from "../../Assets/Homepage/cart.png"
import book from "../../Assets/Homepage/book.png"


const Section2 = () => {
  return (
    <div className='section2'>
      <div className="section2_container">
        <div className="section2_heading">
          <h1 className="heading">Get your books in 3 easy steps</h1>
        </div>
        <div className="section2_cards">
          <div className="card">
            <h1 className="card_heading">Find your Book</h1>
            <div className="card_img">
              <img src={magnifine} alt="find" />
            </div>
            <p className="card_desc">Go throught our large database & choose book you want to read </p>
          </div>
          <div className="card">
            <h1 className="card_heading">Select and Order</h1>
            <div className="card_img">
              <img src={cart} alt="cart" />
            </div>
            <p className="card_desc">Order by paying a weekly rate and a shipment address for book delivery </p>
          </div>
          <div className="card">
            <h1 className="card_heading">Read and Return</h1>
            <div className="card_img">
              <img src={book} alt="book" />
            </div>
            <p className="card_desc">Take your time to read the book and then return it to the owner</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section2