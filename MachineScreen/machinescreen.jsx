import Footer from "../Components/Footer/footer"
import MachineDetails from "./MachineComp/MachineDetails/macinedetails"
import Title from "../Components/Title/title"
import Header from "../Components/Header/header"


function MachineScreen(){
return(
    <>
    <Header/>
    <MachineDetails/>
    <div className="container"> 
        <Footer/>
    </div>
    </>
)
}

export default MachineScreen