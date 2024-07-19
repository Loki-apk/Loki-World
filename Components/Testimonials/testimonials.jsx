import './testimonials.css'
import person1 from '../../assets/testi.png'
import next from'../../assets/next-arrow.png'
import back from'../../assets/back-arrow.png'
import { useRef } from 'react'

function Testimonials(){


    const slider = useRef();
    let tx = 0;

    const slideForward = ()=>{
        if(tx >- 50){
            tx -= 20;
        }

        slider.current.style.transform = `translateX(${tx}%)`;

    }
    
    const slideBackward = ()=>{
        if(tx < 0){
            tx += 20;
        }

        slider.current.style.transform = `translateX(${tx}%)`;
        
    }

    return(
        <div>
            <div className="testi">
                <img src={next} alt="" className='nextbtn' onClick={slideForward}/>
                <img src={back} alt="" className='backbtn'onClick={slideBackward}/>
                <div className="slider">
                    <ul ref={slider}>
                        <li>
                            <div className="slide">
                                <div className="user-info">
                                    <img src={person1} alt="" />
                                    <div>
                                        <h3>Name 1</h3>
                                        <span>Role</span>
                                    </div>
                                </div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat corrupti maxime sint deserunt, nesciunt minima id tenetur error optio architecto voluptas soluta molestias doloremque laboriosam sequi excepturi doloribus harum quae!</p>
                            </div>
                        </li>

                        <li>
                            <div className="slide">
                                <div className='user-info'>
                                    <img src={person1} alt="" />
                                        <div>
                                            <h3>Name 2</h3>
                                            <span>Role</span>
                                        </div>
                                    </div>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis quaerat aliquam fugit temporibus aut similique corrupti suscipit dolores exercitationem quisquam totam dolorum inventore ab doloremque, laudantium repudiandae. Asperiores, porro error?</p>
                            </div>
                        </li>

                        <li>
                            <div className="slide">
                                <div className="user-info">
                                <img src={person1} alt="" />
                                    <div>
                                        <h3>Name 3</h3>
                                        <span>Role</span>
                                    </div>
                                </div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur aspernatur, corporis libero non aperiam repudiandae minima sequi maiores, a cupiditate, voluptatibus molestias perspiciatis vitae sapiente consectetur expedita quae nostrum officia?</p>
                            </div>
                        </li>

                        <li>
                            <div className="slide">
                                <div className="user-info">
                                <img src={person1} alt="" />
                                    <div>
                                        <h3>Name 4</h3>
                                        <span>Role</span>
                                    </div>
                                </div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem nobis doloribus placeat excepturi ratione, nisi inventore temporibus itaque velit libero unde, suscipit eaque, a et ipsam. Dolorum ipsam iusto perspiciatis?</p>
                            </div>
                        </li>

                        <li>
                            <div className="slide">
                                <div className="user-info">
                                <img src={person1} alt="" />
                                    <div>
                                        <h3>Name 5</h3>
                                        <span>Role</span>
                                    </div>
                                </div>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure impedit, pariatur, consectetur consequatur magnam blanditiis sit voluptatum esse, culpa ex id facilis ea beatae. Ex placeat totam est in suscipit?</p>
                            </div>
                        </li>

                        <li>
                            <div className="slide">
                                <div className="user-info">
                                <img src={person1} alt="" />
                                    <div>
                                        <h3>Name 6</h3>
                                        <span>Role</span>
                                    </div>
                                </div>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi quaerat dolores beatae, itaque repellat neque odit earum iste explicabo, nobis ullam totam quos. Ad eveniet adipisci sapiente necessitatibus perferendis alias.</p>
                            </div>
                        </li>
                    </ul>
                </div>
                
            </div>
        </div>
    )
}

export default Testimonials