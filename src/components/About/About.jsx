import React from 'react'
import "./About.css"
import banner from "../../assets/banner.avif"
import jeep from "../../assets/jeep.avif"
import plane from "../../assets/plane.avif"
import moelester from "../../assets/moelester.avif"
import deeznutz from "../../assets/deeznutz.avif"
import rapeest from "../../assets/rapeest.avif"
import expedia from "../../assets/expedia.svg"
import wasabi from "../../assets/wasabi.svg"
import bank from "../../assets/bank.svg"
import ea from "../../assets/ea.svg"
import extreme from "../../assets/extreme.svg"
import husqvarna from "../../assets/husqvarna.svg"
import japan from "../../assets/japan.svg"
import micro from "../../assets/micro.svg"
import nike from "../../assets/nike.svg"
import Orion from "../../assets/Orion.svg"
import kodansha from "../../assets/kodansha.svg"

const About = () => {
  return (
    <>
    <section className='about-section'>
    <div className="overlay" >
         <h1>About Us</h1>   
    </div> 
    </section>

<section className="aboutmiddle">
     <div className="leftside">
        <div className="topleftflex">
            <div className="experience">
                <img src={jeep} alt="" className='jeep'/>
                <div className="values">
                    <p className="valuehead">WHAT ARE OUR VALUES</p>
                    <p className="valuetext">Our values are centered around prioritizing customer satisfaction, operating with integrity, embracing innovation, supporting sustainability, and respecting diverse cultures.</p>
                </div>
            </div>

            <div className="years">
                    <h1 className='number'>43+ <span className='year'>YEARS</span></h1>
                </div>
        </div>

        <div className="bottomleft">
            <div className="themission">
                <h1 className="missionhead">OUR MISSION</h1>
                <p className="mission">Our mission is to deliver exceptional travel experiences by combining outstanding service, innovative solutions, and a dedication to customer satisfaction. We strive to make each journey memorable while promoting sustainability and respect for diverse cultures.</p>
            </div>
        </div>
    </div>

    <div className="rightside">
        <img src={plane} alt="" className='plane'/>
    </div>
 </section>

 <section className="historysection">
    <p className="product">OUR HISTORY</p>
    <h1 className="excellent">ELEVATING TRAVELLING EXPERIENCE</h1>
    
    <div className="mainhistory">
        <h2 className='genius'>A LIFE CHANGING INNOVATION ON THE HORIZON</h2>
        <p className="content">Travel Smart was established 43 years ago by three visionary founders: Moe Lester, Deez Nutz, and Rap Eest. This innovative trio—two males and one female—embarked on a mission to transform the travel industry with a fresh perspective and a shared passion for exploration. Their collective expertise and forward-thinking ideas sparked the creation of a company that would set new standards in travel planning and touring.

From its early days, Travel Smart stood out for its dedication to delivering exceptional service and personalized travel experiences. The founders' commitment to understanding and anticipating the needs of travelers laid the groundwork for the company's rapid success. By focusing on innovative solutions and adopting cutting-edge technologies, Travel Smart quickly earned a reputation as a leader in the travel industry.

As the travel landscape evolved over the years, so did Travel Smart. We embraced technological advancements, integrated new travel trends, and continuously refined our services to stay ahead of the curve. Our adaptability and commitment to excellence allowed us to grow from a small venture into a prominent name in travel, known for our expertise, reliability, and customer-centric approach.

Throughout our history, we have remained steadfast in our mission to make travel planning seamless and enjoyable. Our journey reflects a dedication to enhancing the travel experience and a relentless pursuit of excellence. Today, Travel Smart stands as a testament to the founders' original vision—a legacy of innovation, growth, and an unwavering commitment to helping travelers explore the world with confidence and ease.

With over four decades of experience, Travel Smart continues to build on its rich heritage, guiding travelers on unforgettable journeys and shaping the future of travel with each passing year.</p>
    </div>
         <h2 className="esteemed">OUR ESTEEMED FOUNDERS</h2>
    <div className="founders">
        <div className="eachfounder">
        <img src={moelester} alt="" className='firstfounder'/>
        <p className="name">MR MOE .D. LESTER</p>
        </div>

        <div className="eachfounder">
        <img src={deeznutz} alt="" className='firstfounder'/>
        <p className="name">MR DEEZ NUTZ</p>
        </div>

        <div className="eachfounder">
        <img src={rapeest} alt="" className='firstfounder'/>
        <p className="name">MRS RAP EEST</p>
        </div>
    </div>
 </section>

 <section className="trust">
    <h1 className="trusthead">TRUST US, OUR AFFILIATES CERTAINLY DO!</h1>

    <div className="partners">
        <img src={expedia} alt="" className='logo'/>
        <img src={wasabi} alt="" className='logo'/>
        <img src={nike} alt="" className='logo'/>
        <img src={ea} alt="" className='logo'/>
        <img src={extreme} alt="" className='logo'/>
        <img src={japan} alt="" className='logo'/>
        <img src={husqvarna} alt="" className='logo'/>
        <img src={micro} alt="" className='logo'/>
        <img src={kodansha} alt="" className='logo'/>
        <img src={bank} alt="" className='logo'/>
        <img src={Orion} alt="" className='logo'/>
    </div>
 </section>
    </>
  )
}

export default About