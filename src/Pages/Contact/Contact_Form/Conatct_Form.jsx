import React,{useState} from 'react'
import Button from '../../../Components/Button'

const Conatct_Form = () => {
    const [selectedOption, setSelectedOption] = useState(''); // Initial state

    const handleSelectChange = (event) => {
      setSelectedOption(event.target.value);
    };
  return (
    <>
      <div className="Contact_Form">
        <div className="Form_image">
            <img src="./conatct_map.png" alt="" />
        </div>
        <div className="form_padd">
        <div className="contact_form">
            <div className="user_name">
              <span className="hdr">
                <label htmlFor="fname">First Name</label>
                <input type="text" id="fname" name="firstname" />
              </span>
              <span className="hdr">
                <label htmlFor="lname">Last Name</label>
                <input type="text" id="fname" name="lasttname" />
              </span>
            </div>
            <span>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" />
            </span>
            <div className="col-half">
              <div className="input-group">
                <label htmlFor="question">What can we do for you</label>
                <select value={selectedOption} onChange={handleSelectChange}>
                  <option value="" disabled hidden>
                    Choose
                  </option>
                  <option value="Option 1">Option 1</option>
                  <option value="Option 2">Option 2</option>
                </select>
              </div>
            </div>
            <span>
              <label htmlFor="email">Phone Number</label>
              <input type="phone" id="email" name="email" />
            </span>
            <span>
              <label htmlFor="email">Messsage</label>
              <textarea className="form-control" name="comment"></textarea>
            </span>
            <Button text="Send Message" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Conatct_Form
