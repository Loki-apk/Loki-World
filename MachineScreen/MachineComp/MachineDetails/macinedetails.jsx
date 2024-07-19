import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './machinedetails.css';
import Slider from 'react-slick';
import Title from '../../../Components/Title/title';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Intro2 from '../../../assets/Intro2.mp4';
import WaterJet from '../../../assets/machine1.png';
import Airjet from '../../../assets/AirJet.png';
import Rapier from '../../../assets/Rapier.png';
import Jaquard from '../../../assets/Jaquard.png';
import machine2 from '../../../assets/machine2.jpg';
import machine3 from '../../../assets/machine3.jpg';
import machine4 from '../../../assets/machine4.jpg';

function MachineDetails() {
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
    formData.append("access_key", "2baf141c-e151-42ea-b978-a8182253c1ad");

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
      <div className='container-fluid'>
        <Slider {...settings}>
          <div>
            <div className="overlay"></div>
            <video 
              src={Intro2} 
              autoPlay
              muted
              loop
              alt="Slide 1" />
          </div>
          <div>
            <div className="overlay"></div>
            <img src={machine2} alt="Slide 2" />
          </div>
          <div>
            <div className="overlay"></div>
            <img src={machine3} alt="Slide 3" />
          </div>
          <div>
            <div className="overlay"></div>
            <img src={machine4} alt="Slide 4" />
          </div>
        </Slider>
      </div>

      <Title subTitle='' title='All Looms' />

      <div className='machinedetail container'>
        <div className="looms">
          <div className='mach'>
            <img src={WaterJet} alt="Machine 1" />
            <div className="machine-info">
              <h3>Water Jet</h3>
              <p className='specification'>
                <ul>
                  <li>Double Life</li>
                  <li>Used to manufacture Ployster Fabric</li>
                  <li>Japnese and Korean parts</li>
                  <li>Maintanince Free</li>
                  <li>Heavy Bulit</li>
                </ul>
              </p>
            </div>
          </div>

          <div className='mach'>
            <img src={Airjet} alt="Machine 2" />
            <div className="machine-info">
              <h3>Air Jet</h3>
              <p className='specification'>
                <ul>
                  <li>High Speed</li>
                    <p>New weft insertion, new frame structure and high speed CPU, ensure the running speed maximum 1200RPM.</p>
                  <li>Low energy consumption</li>
                    <p>New weft insertion and main nozzle energy saving optimal design realize less air consumption.</p>
                  <li>Low vibration</li>
                    <p>Using 3D design and computer analysis to optimize the frame structure, including the cross rail connections, and to realize Lightening design and optimum balance of the beating motion. These improvements ensure lower vibration with high-speed operation.</p>
                  <li>Flexibility and wide applicability</li>
                    <p>A full range of standard equipment and a variety of options can weave fabrics that were previously mostly woven by rapier looms, including wide home furnishings fabric, stretch fabric, fabric of different yarn types and counts, airbags, seersucker and fabric with tuck-in selvages.</p>
                  <li>Easy operation & new Electronics</li>
                    <p>Relatively lower machine, upper temple are both good for the operator; a new internet-ready color function panel with enhanced communication capability and a new, faster CPU.</p>
                </ul>
              </p>
            </div>
          </div>
          
          <div className='mach'>
            <img src={Rapier} alt="Machine 2" />
            <div className="machine-info">
              <h3>Rapier</h3>
              <p className='specification'>
                <ul>
                  <li>GUIDED HOOK SYSTEM (GH)</li>
                    <p>Standard solution for spun yarns. The rapier tape on the light-weight Guided Gripper system is perfectly guided by single-piece hooks. Together with a small shed and a small rapier head high production speeds are achieved.</p>
                  <li>FREE FLIGHT SYSTEM (FF)</li>
                    <p>Specially designed for weaving delicate fabrics like saree, dupatta etc, providing maximum warp-friendliness & filling versatility. The Free Flight System is covered by raceboard for gentle treatment of filament warp yarns.</p>
                  <li>STRONG BODY CONSTRUCTION</li>
                    <p>High-pressure cast-iron side frames are connected by sturdy cross-members. The sley conjugated cams with cam followers below the fabrics. The sley with its reed holder balanced by counterweights and provides powerful beat-up.</p>
                  <li>STRONG CAM BEAT-UP</li>
                    <p>Using CAE analysis, we designed a new robust frame structure. By employing the offset rocking shaft with less movement of inertia and a hollow reed holder, beating is well-balanced. Existing force is prevented and about 60% decrease of floor vibration is attained.</p>
                  <li>30 mins Door Step Service</li>
                </ul>
              </p>
            </div>
          </div>

          <div className='mach'>
            <img src={Jaquard} alt="Machine 3" />
            <div className="machine-info">
              <h3>Jacquard</h3>
              <p className='specification'>
                <ul>
                  <li>China's No.1 Selling Jacquard</li>
                  <li>3 Years warranty</li>
                  <li>Dedicated service and support team</li>
                  <li>Based on European Standards</li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="contact-form">
        <h2>Contact Us</h2>
        <form id="contactForm" onSubmit={onSubmit}>
          <input type="text" name="Name" placeholder="Name" />
          <input type="tel" name="Phone Number" placeholder="+91 8294042213" />
          <textarea name="Message" placeholder="Message"></textarea>
          <button type="submit" className="btn dark-btn">Send</button>
          
          {result && <p className="result-message">{result}</p>}
        </form>
      </div>
    </>
  );
}

export default MachineDetails;
