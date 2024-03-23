import React from 'react'
import './Contact.css'
import Title from '../Title/Title'
import message from '../../Assets/message.png'
import msg from '../../Assets/msg.jpg'
import phone from '../../Assets/phone.png'
import location from '../../Assets/location.png'

export const Contact = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "55e36a5f-110b-4cef-8333-8f3185e44483");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      console.log("Success",data);
      setResult(data.message);
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };   

  return (
    <div class='contact-container'>
      <div className='contact-content-in'>
            <Title subTitle='Contact us' title='FEEL FREE TO ASK DOUTS'/>
            <div className='container-bottom'>
                <div className="contact-col">
                  <h3>Send us a message <img src={message} alt=""/> </h3>
                  <p>Fintech Innovators
                    <br/>
                    Innovating and collaborating financial world with technology.
                  </p>
                  <ul className='cont-info'>
                    <li><img scr={msg} alt=""/>fintechinnovators@gmail.com</li>
                    <li><img scr={phone} alt=""/>7972781897</li>
                    <li><img scr={location} alt=""/>Walchand college of engineering,Sangli</li>
                  </ul>
                </div>
                <div classname="contact-col">
                  <form onSubmit={onSubmit} className='con-field'>
                    <label className='contact-field'>Your name</label>
                    <input className='contact-field-input' type="text" name='name' placeholder='Entert your name' required/>
                    <label className='contact-field'>Phone number</label>
                    <input className='contact-field-input' type="tel" name='phone' placeholder='Enter your mob number' required/>
                    <label className='contact-field'>Write your Message</label>
                    <textarea className='contact-field-input' name="message" roes="6" placeholder="Enter your message" required></textarea>
                    <button type='submit' className='btn'>Submit</button>
                  </form>
                    <span>{result}</span>
                </div>
            </div>
      </div>
    </div>
  )
}

export default Contact ;