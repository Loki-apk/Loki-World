import React from 'react';
import './intro.css';
import arrow from '../../assets/arrow.png';
import { Link } from 'react-scroll';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image1 from '../../assets/hero.jpg';
import image2 from '../../assets/image2.jpg';
import image3 from '../../assets/image3.jpg';
import image4 from '../../assets/image4.jpg';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import introv from '../../assets/Intro.mp4'
import intro2 from '../../assets/Intro2.mp4'
import intro3 from '../../assets/Intro3.mp4'

function Intro() {
    var settings={
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 10000,
    };

    return (
        <section className='homeSlider'>
            <div className='container-fluid'>

                <Slider {...settings}>

                <div>
                    <div className="overlay"></div>
                        <video 
                        src={introv}
                        autoPlay
                        muted 
                        loop
                        alt={image2} />
                    </div>
                    <div>
                    <div className="overlay"></div>
                        <img src={image1} alt="" />
                    </div>
                    
                    <div>
                    <div className="overlay"></div>
                        <img src={image3} alt="" />
                    </div>
                    <div>
                    </div>
                </Slider>
            </div>

            <div className="intro-text">
                <h1>Diamond Textile Machinery</h1>
                <p>WATERJET AIRJET RAPIER LOOMS</p>
                <p>Premium Quality and Service</p>
               <Link to='contact' smooth = {true} offset={-260} duration={500}> <button className='btn dark-btn'>Inquire Now <img src={arrow} alt="" /></button></Link>
            </div>

            
        </section>
       
    );
}

export default Intro;
