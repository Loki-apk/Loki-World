import './topMachine.css'
import topMachine from "../../assets/machine8.jpg"
import { Link } from 'react-scroll';
function TopMachine(){
    return(
    <>
    <div className="top">
        <img src={topMachine} alt="topMachine" />
        <div className='top-text'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, illum. Tempora possimus exercitationem, laborum reprehenderit asperiores explicabo reiciendis! Dicta quia et illum rem nobis. Aspernatur autem temporibus sint deleniti voluptas.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis recusandae, fugit vel ipsum temporibus soluta unde corrupti porro! Atque ad officiis corrupti architecto a dolores fugit. Laudantium tempore inventore voluptatem?
            </p>
            <Link to = "contact" smooth = {true} offset={-260} duration={500}><button className='btn dark-btn'>Ready to dive in</button></Link>
    </div>
    </div>
    
    </>)
}

export default TopMachine;