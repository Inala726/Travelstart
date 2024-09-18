import './great.css'
import Vmount from "../assets/mountain-img.jpg"
import Vresort from "../assets/house-resort.jpg"

const Great = () => {
    return (
        <>
        <div>
            <section className='hero-great' style={{
            backgroundImage: `url(${Vmount})`,
            backgroundRepeat: "none",
            backgroundSize: "cover",
            backgroundPosition: "bottom"
            }}>
                <div className='overlays'>
                <h1>The Great Outdoors</h1>
                <p>Wander often, Wonder Always </p>
                </div>
               
            </section>
            <section className='explore-div'>
                <div className='world-div'>
                    <h1>Explore the world</h1>
                    <div>
                        <p>We work to provide the most content from athletes </p>
                        <p>Explorers and travelers from around the world, our longterm messages is to educate </p>
                        <p>require and enable all people to aquintanance and wildlife</p>
                    </div>
                </div>

                <div className='locations-div'>
                    <div className='bck-image' style={{
            backgroundImage: `url(${Vresort})`,
            backgroundRepeat: "none",
            backgroundSize: "cover",
            backgroundPosition: "bottom"
            }}>     
                    <p>NaeruyJordon</p>  
                    <p> Norway</p>
                       
                    </div>
                    <div className='bck-image' style={{
            backgroundImage: `url(${Vresort})`,
            backgroundRepeat: "none",
            backgroundSize: "cover",
            backgroundPosition: "bottom"
            }}>     
                    <p>NaeruyJordon</p>  
                    <p> Norway</p>
                       
                    </div>

                 <div className='bck-image' style={{
            backgroundImage: `url(${Vresort})`,
            backgroundRepeat: "none",
            backgroundSize: "cover",
            backgroundPosition: "bottom"
            }}>     
                    <p>NaeruyJordon</p>  
                    <p> Norway</p>
                       
                    </div>

                </div>
                <p className='seemore-txt'>see more</p>
            </section>

            <section className='explore-divs'>
                <div className='world-div'>
                <h1>The Journal</h1>
                <p>Our favourite stories about public places
                 and opportunity for you to get</p>
                <p>involved in protecting your outdoor appearances</p>
                </div>
                <div className='nat-all'>
                    <div className='unforget-div'>
                        <img src={Vresort} alt="" />
                        <p>May 30, 2007</p>
                        <h1>An unforgettable</h1>
                        <div>
                            <p>If you have only day to vast Karmine National Park</p>
                            <p>and you want to make the most out of it</p>
                        </div>
                    </div>

                    <div className='unforget-div'>
                        <img src={Vresort} alt="" />
                        <p>May 30, 2007</p>
                        <h1>An unforgettable</h1>
                        <div>
                            <p>If you have only day to vast Karmine National Park</p>
                            <p>and you want to make the most out of it</p>
                        </div>
                    </div>

                </div>
                <p>All Posts</p>
            </section>

            <section>

            </section>
        </div>
        </>
    )
 }

 export default Great