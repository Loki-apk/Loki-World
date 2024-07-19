
import ContactUs from "../Contact Us/contactus";
import Footer from "../Footer/footer";
import Intro from "../Intro/intro";
import Machines from "../Machines/machines";
import Testimonials from "../Testimonials/testimonials";
import Title from "../Title/title";
import WhyUs from "../Why us/why";
import HomeHeader from "../Home Header/homeHead";
function Home(){
    return(
        <>
        <HomeHeader/>
        <Intro/>
        <Title subTitle="machines" title="Explore the Machines"/>
        <Machines/>
        <div className="container">
            
            
            <Title subTitle="Why us" title="You know the difference"/>
            <WhyUs/>

            {/* <Title subTitle="Testimonials" title="What you will hear about us"/>
            <Testimonials/> */}

            <Title subTitle="Contact Us" title="Don't miss out"/>
            
            <ContactUs/>
            
            <Footer/>
        </div>
        </>
    )
}

export default Home