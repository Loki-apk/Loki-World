import './machines.css';
import WaterJet from '../../assets/machine1.png';
import Airjet from '../../assets/AirJet.png';
import Rapier from '../../assets/Rapier.png'
import Jaquard from '../../assets/Jaquard.png';
import arrow from '../../assets/arrow.png';
import Mail from '../../assets/mail.png'
import {Link} from 'react-router-dom'

function Machines() {
  return (
    <>
      <div className='machine-home '>
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
             <div className="inquire">
                <Link to = '/machineDetails'><button className='btn'>Know more <img src={arrow} alt="" /></button></Link>
                <Link to= '/contactForm'><button className='btn'>Enquire <img src={Mail} alt="" /></button></Link>
             </div>
            </p>
          </div>
        </div>

        <div className='mach'>
          <img src={Airjet} alt="Machine 2" />
          <div className="machine-info">
            <h3>Air Jet</h3>
            <p className='specification'>
              <ul>
                <li>Lowest Air Consumption</li>
                <li>Used to manufacture Viscous and Cotton Fabrics</li>
                <li>Japnese parts</li>
                <li>Heavy Bulit</li>
              </ul>
             <div className="inquire">
              <Link to = '/machineDetails'><button className='btn'>Know more <img src={arrow} alt="" /></button></Link>
              <Link to= '/contactForm'><button className='btn'>Enquire <img src={Mail} alt="" /></button></Link>
             </div>
            </p>
          </div>
        </div>
        
        <div className='mach'>
          <img src={Rapier} alt="Machine 2" />
          <div className="machine-info">
            <h3>Rapier</h3>
            <p className='specification'>
              <ul>
                <li>6 ton Heavy Machine</li>
                <li>Average 350+ RPM</li>
                <li>Latest European Design</li>
                <li>45000 pick Per-Day production</li>
                <li>30 mins Door Step Service</li>
              </ul>
             <div className="inquire">
              <Link to = '/machineDetails'><button className='btn'>Know more <img src={arrow} alt="" /></button></Link>
              <Link to= '/contactForm'><button className='btn'>Enquire <img src={Mail} alt="" /></button></Link>
             </div>
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
             <div className="inquire">
              <Link to = '/machineDetails'><button className='btn'>Know more <img src={arrow} alt="" /></button></Link>
              <Link to= '/contactForm'><button className='btn'>Enquire <img src={Mail} alt="" /></button></Link>
             </div>
            </p>
          </div>
        </div>
      </div>


    </>
  );
}

export default Machines;
