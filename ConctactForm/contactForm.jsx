import './contactForm.css';
import React from 'react';
import arrow from "../assets/arrow.png";
import Footer from '../Components/Footer/footer';
import Header from '../Components/Header/header';
import image1 from '../assets/hero.jpg';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';
import image4 from '../assets/image4.jpg';
import Slider from 'react-slick';

function ContactForm() {

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);
    formData.append("access_key", "2baf141c-e151-42ea-b978-a8182253c1ad"); // replace with the key as needed  0a13052e-d9c3-47e5-9393-50106e3214c9(sir)  2baf141c-e151-42ea-b978-a8182253c1ad(mine)

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
        console.error("Error", data);
        setResult(data.message);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setResult("Error submitting form. Please try again later.");
    }
  };

  return (
    <>
      <Header />
      <div className='container-fluid'>
        <Slider {...settings}>
          <div>
            <div className="overlay"></div>
            <img src={image1} alt="Slide 1" />
          </div>
          <div>
            <div className="overlay"></div>
            <img src={image2} alt="Slide 2" />
          </div>
          <div>
            <div className="overlay"></div>
            <img src={image3} alt="Slide 3" />
          </div>
          <div>
            <div className="overlay"></div>
            <img src={image4} alt="Slide 4" />
          </div>
        </Slider>
      </div>
      <div className="support">
        <form id="contactForm" onSubmit={onSubmit}>
          <label>Name</label>
          <input type="text" name='name' placeholder='Jon Snow' required />

          <label>Phone Number</label>
          <input type="tel" name='phone-number' placeholder='+91 8294042213' required />

          <label>Company</label>
          <input type="text" name='company' placeholder='ABC company' />

          <label>Enter your Message here</label>
          <textarea name="message" rows="10" placeholder='My requirement'></textarea>
          <button type='submit' className='btn dark-btn'>
            Submit now <img src={arrow} alt="arrow" />
          </button>
          {result && <p className="result-message">{result}</p>}
        </form>
      </div>
      <div className="container">
        <Footer />
      </div>
    </>
  );
}

export default ContactForm;
