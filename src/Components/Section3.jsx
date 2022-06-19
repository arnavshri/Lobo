import React from 'react'
import "../Style/Section3.css"

const Section3 = () => {
  return (
    <div className='Section3'>
      <div className="container">
        <div className="left">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp24hO3de4RVq7S_PksxlDYQRDstyLNDtMJw&usqp=CAU" alt="img" />
          
        </div>
        <div className="right">
          <div className="heading">
            <h3>To get the booklist</h3>
            <h4>(kindly fill the form)</h4>
          </div>
          <form>
            <div className="inputBoxes">
              <div className='labelBox'>
                <label className='formLabel'>Full Name:</label>
              </div>  
              <input className='formInputs' type="text" minLength={3} required />
            </div>
            <div className="inputBoxes">
              <div className='labelBox'>
                <label className='formLabel' minlength="4">Email Id:</label>
              </div>
              <input className='formInputs' type="email" required />
            </div>
            <div className="inputBoxes">
              <div className='labelBox'>
                <label className='formLabel'>Message (Optional)</label>
              </div>
              <textarea cols="30" rows="4" className='formInputs meggage' ></textarea>
            </div>
            <button className='btn'> Submit</button>
          </form>
        </div>
      </div>
      <div className="footer">
        © 2021-2022 Lobo. All Rights Reserved.
      </div>
    </div>
  )
}

export default Section3