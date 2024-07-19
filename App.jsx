import { Routes, Route } from "react-router-dom"
import Home from "./Components/Home/home"
import ContactForm from "./ConctactForm/contactForm"
import MachineScreen from "./MachineScreen/machinescreen"
import Masters from "./Master/master"


function App() {
  return(
    <>
    <Routes>
      <Route path="/" element= {<Home/>}/>
      <Route path="/machineDetails" element= {<MachineScreen/>}/>
      <Route path="/master" element = {<Masters/>}/>
      <Route path="/contactForm" element= {<ContactForm/>}/>
    </Routes>
    </>
  )
}

export default App
