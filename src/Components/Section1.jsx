import React from 'react'
import "../Style/Section1.css"
import {AiOutlineDown} from 'react-icons/ai';
import {GrCatalogOption} from 'react-icons/gr';

const Section1 = () => {
  return (
    <div className='Section1'>
      <div className="container">
        <div className="top">
          <GrCatalogOption className='toplogo'/>
          <h3>LOBO</h3>

        </div>
        <div className="text">
          <h1>Reading Made Cheap</h1>  
          <p>Borrow books for reading, finish and return, all at price lesser than buying second hand</p>
          <button>Learn More</button>
        </div>
        < AiOutlineDown className="DownArrow"/>
      </div>
    </div>
  )
}

export default Section1