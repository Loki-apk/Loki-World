import React from 'react';
import './contactus.css';
import message from '../../assets/message.png';
import mail from '../../assets/mail.png';
import call from '../../assets/call.png';
import office from '../../assets/office.png';
import arrow from '../../assets/arrow.png';

function ContactUs() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    formData.append("access_key", "0a13052e-d9c3-47e5-9393-50106e3214c9"); // Replace with your access key

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      
      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setResult("Error submitting form. Please try again later.");
    }
  };

  return (
    <>
      <div className="contact">
        <div className="contact-col">
          <img src={message} alt="" /> <h3>Send us a message</h3>
          <p>Feel free to reach us any time you want</p>
          <ul>
            <li><img src={mail} alt="" />kediagk07@gmail.com</li>
            <li><img src={call} alt="" />+91 8939379842</li>
            <li><img src={office} alt="" />Navrang Industrial Society,Udhna, Surat</li>
          </ul>
        </div>

        <div className="contact-col">
          <form onSubmit={onSubmit}>
            <input type="hidden" name='access_key' value='0a13052e-d9c3-47e5-9393-50106e3214c9' />
            <label>Name</label>
            <input type="text" name='name' placeholder='Gaurav Kedia' required/>

            <label>Phone Number</label>
            <input type="tel" name='phone-number' placeholder='+91 8939379842' required/>

            <label>Company</label>
            <input type="text" name='company' placeholder='Diamond Textile Machinery'/>
            
            <label>Enter your Message here</label>
            <textarea name="message" rows="10" placeholder='My requirement' required></textarea>
            <button type='submit' className='btn dark-btn'>Submit now <img src={arrow} alt="" /></button>
          </form>
         
          <span>{result}</span>
        </div>
      </div>
    </>
  );
}

export default ContactUs;
