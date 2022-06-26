import axios from 'axios'
import React, { useState } from 'react'
import "./Section3.css"

const Section3 = () => {
  const [user, setUser] = useState({ name: "", email: "", message: "" })

  const onchange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  const handleSubmit = async () => {
    const { name, email, message } = user
    const res = await axios.post('https://lobo-backend.herokuapp.com/contact', user);
  }

  return (
    <div className='Section3'>
      <div className="container">
        <div className="left">
          <img src="https://s3-alpha-sig.figma.com/img/28df/a033/c2f86abe1de8bee39459788581881c12?Expires=1656892800&Signature=br7S4K89NVJgu693eyORF~2d0lSRvGXuS8kJ3KyLHspRn-cn36u~mFxaVDek4w8YxXPVd-0WHkCsqiD0JwbAmhzJp9FXyrwhKzANbsC8lbV6jPJHByLL0VQZJDz8a360ymC5TxgHVjr8seejhtaQHB59DjwgrEDqqCvlBRd0R3My-EWPFBDIh3PmUZeVfgiYOx-Qrqq6JhweHQOdx69L8ooQPKJnIvGnLP3fTWHEzAIsELrxvWmzZ8WjOak9o1evzemAMeb-S0c9i-6xCGfpM6P2mPFYHzB6iQs2gBzk5PGlH7oGWW9Wrn-zmEEfAwlW-PzqbTNR6JplGCtG6L7gUw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="img" />

        </div>
        <div className="right">
          <div className="heading">
            <h3>To get the booklist</h3>
            <h4>(kindly fill the form)</h4>
          </div>
          <div>
            <div className="inputBoxes">
              <div className='labelBox'>
                <label className='formLabel'>Full Name:</label>
              </div>
              <input className='formInputs' onChange={onchange} name='name' type="text" minLength={3} required />
            </div>
            <div className="inputBoxes">
              <div className='labelBox'>
                <label className='formLabel' minlength="4">Email Id:</label>
              </div>
              <input className='formInputs' onChange={onchange} name='email' type="email" required />
            </div>
            <div className="inputBoxes">
              <div className='labelBox'>
                <label className='formLabel'>Message (Optional)</label>
              </div>
              <textarea cols="30" rows="4" onChange={onchange} name='message' className='formInputs meggage' ></textarea>
            </div>
            <button className='btn' onClick={handleSubmit}> Submit</button>
          </div>
        </div>
      </div>
      <div className="footer">
        © 2021-2022 Lobo. All Rights Reserved.
      </div>
    </div>
  )
}

export default Section3