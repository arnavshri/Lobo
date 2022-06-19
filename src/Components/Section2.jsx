import React from 'react'
import "../Style/Section2.css"
import {FcSearch} from 'react-icons/fc';
import {FaShoppingCart} from 'react-icons/fa';
import {GiWhiteBook} from 'react-icons/gi';
import {HiOutlineArrowNarrowRight} from 'react-icons/hi';
import {GrCatalogOption} from 'react-icons/gr';





const Section2 = () => {
  return (
    <div className='Section2'>
      <div className="container">
        <div className="heading">
          <GrCatalogOption className='toplogo'/>
          <h2>GET YOUR BOOKS IN 3 EASY STEPS</h2>
        </div>
        <div className="boxContainer">
          <div className="box">
            <FcSearch className='logoes'/>
            <h3>Find your book</h3>
            <p>Go throught our large database and choose book you want to read</p>
          </div>
          <HiOutlineArrowNarrowRight className='arrows'/>
          <div className="box">
            <FaShoppingCart className='logoes'/>
            <h3>Select and Order</h3>
            <p>Order by paying a weekly rate and a shipment address for book delivery</p>
          </div>
          <HiOutlineArrowNarrowRight className='arrows'/>
          <div className="box">
            <GiWhiteBook className='logoes'/>
            <h3>Read and Return</h3>
            <p>Take your time to read the book and then return it to the owner</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section2