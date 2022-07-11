import axios from 'axios'
import React, { useState } from 'react'
import "./Section3.css"

const Section3 = () => {
  const [user, setUser] = useState({ name: "", email: "", message: "" })
  const [isSubmit, setIsSubmit] = useState('Submit')

  const onchange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  const handleSubmit = async () => {
    setIsSubmit('Submitting')
    const { name, email, message } = user
    const res = await axios.post('https://lobo-backend.herokuapp.com/contact', user);
    setUser({ name: " ", email: " ", message: " " })
    // alert("We have Registered Your Message.")
    setIsSubmit('Submitted')
  }

  return (
    <div className='Section3'>

      <div className="heading">
        <h3>To get the booklist</h3>
        <h4>(kindly fill the form)</h4>
      </div>
      <div className="container">
        <div className="left">

        </div>
        <div className="right">
          <div className="inputBoxes">
            <div className='labelBox'>
              <label className='formLabel'>Full Name:</label>
            </div>
            <input className='formInputs' onChange={onchange} value={user.name} name='name' type="text" minLength={3} required />
          </div>
          <div className="inputBoxes">
            <div className='labelBox'>
              <label className='formLabel' minlength="4">Email Id:</label>
            </div>
            <input className='formInputs' onChange={onchange} value={user.email} name='email' type="email" required />
          </div>
          <div className="inputBoxes">
            <div className='labelBox'>
              <label className='formLabel'>Message (Optional)</label>
            </div>
            <textarea cols="30" rows="6" onChange={onchange} value={user.message} name='message' className='formInputs meggage' ></textarea>
          </div>
          <button className='btn' onClick={handleSubmit}>{isSubmit}</button>
        </div>

      </div>
      <div className="footer">
        © 2021-2022 Lobo. All Rights Reserved.
      </div>
    </div>
  )
}

export default Section3