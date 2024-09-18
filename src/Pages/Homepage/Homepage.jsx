import { useState, useEffect, useRef } from 'react';
import './Homepage.css'

const Homepage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeRunning = 3000;
  const timeAutoNext = 7000;
  const carouselRef = useRef(null);

  const sliderItems = [
    { img: 'https://assets.codepen.io/3685267/timed-cards-5.jpg', title: 'TIME TO TRAVEL'},
    { img: '/src/assets/Images/pexels-kelly-1179532-2509093.jpg', title: 'TIME TO TRAVEL'},
    { img: 'https://assets.codepen.io/3685267/timed-cards-3.jpg', title: 'TIME TO TRAVEL'},
    { img: '/src/assets/Images/pexels-rachel-claire-5531429.jpg', title: 'TIME TO TRAVEL'},
  ];

  useEffect(() => {
    const autoNext = setTimeout(() => {
      showSlider('next');
    }, timeAutoNext);

    return () => clearTimeout(autoNext);
  }, [currentIndex]);

  const showSlider = (type) => {
    let newIndex = currentIndex;
    if (type === 'next') {
      newIndex = (currentIndex + 1) % sliderItems.length;
    } else {
      newIndex = (currentIndex - 1 + sliderItems.length) % sliderItems.length;
    }

    setCurrentIndex(newIndex);

    if (carouselRef.current) {
      carouselRef.current.classList.add(type);
      setTimeout(() => {
        carouselRef.current.classList.remove(type);
      }, timeRunning);
    }
  };

  return (
        <div className="main">
             <div className="carousel" ref={carouselRef}>
      <div className="list">
        {sliderItems.map((item, index) => (
          <div key={index} className="item" style={{ display: index === currentIndex ? 'block' : 'none' }}>
            <img src={item.img} alt={item.title} />
            <div className="content">
              <div className="title">{item.title}</div>
              <div className="des">
              Discover incredible destinations and unbeatable travel deals.
              Plan your perfect getaway and embark on new adventures.
              Let us turn your dream vacation into reality
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="thumbnail">
        {sliderItems.map((item, index) => (
          <div key={index} className="item" onClick={() => setCurrentIndex(index)}>
            <img src={item.img} alt={item.title} />
            <div className="content">
              <div className="title">TIME TO TRAVEL</div>
              <div className="description">Description</div>
            </div>
          </div>
        ))}
      </div>
      {/* <div className="time"></div> */}
    </div>

    <section className='info'>
          <div className='info1'>
            <p>Mount Kelimutu is a volcano located 
              on Flores island, NTT Province,indonesia.
              The location of this mountain is precise in pemo village
              Lake Matano is an ancient tectonic lake that was formed from the movement of the earth’s crustal plates at the end of the Pliocene.
            </p>
          </div>
          <div className='info1'>
          There are beaches that have very strong Balinese nuances besides the island of the gods, Bali.

Well, the beach is called Ulung Suso Beach, in Mabonta Village, Burau District, East Luwu.
          </div>
          <div className='info1'>
          Two waterfalls that are pleasing to the eye are located in East Luwu Regency, namely the Mata Buntu waterfall and the Kali Dingin waterfall, both located in Wasuponda sub-district, only in different villages. 
          </div>
    </section>

    <section className='card'>
        <div className="favourite-tour">
        <p>Find your favourite tour</p>
        <h2>In Our Small town, east luwu</h2>
        </div>
        <div className="town-east">
          <div className='tour1'>
            <span>TOUR 1</span>
            <p>There will be a small</p>
          </div>
          <div className='tour2'>
          <span>TOUR 2</span>
          <p>There will be a small</p>
          </div>
          <div className='tour3'>
          <span>TOUR 3</span>
          <p>There will be a small</p>
          </div>
          <div className='tour4'>
          <span>TOUR 4</span>
          <p>There will be a small</p>
          </div>
        </div>
    </section>

    <section className='bottom-line'>
            <div className='line'></div>
            <div className='line'></div>
    </section>

    <section className='blog'>
            <div className="blog1">

              <div className="blog-card">
                <div className="media-content">
                    
                </div>

                <span className='date'>May 1, 2023</span>

                <div className="information">
                    <h2><a href="#" className='cs_post_title cs_semibold cs_fs_32'>The Benefits of Mindfulness Meditation for Stress and  Anxiety</a></h2>
                </div>
            </div>

            <div className="blog-card">
                <div className="media-content1">
                    
                </div>

                <span className='date'>May 1, 2023</span>

                <div className="information">
                    <h2><a href="#" className='cs_post_title cs_semibold cs_fs_32'>Healthy Eating on a Budget: Tips and Strategies</a></h2>
                </div>
            </div>

            <div className="blog-card">
                <div className="media-content2">
                    
                </div>

                <span className='date'>May 1, 2023</span>

                <div className="information">
                    <h2><a href="#" className='cs_post_title cs_semibold cs_fs_32'>The Importance of Regular Cancer Screenings and Early Detection</a></h2>
                </div>
            </div>
              </div>
    </section>

    <section className='blog'>
            <div className="blog1">
            <div className="blog-play">
                <div className="billboard">
                    
                </div>

                <span className='date'>May 1, 2023</span>

                <div className="information">
                    <h2><a href="#" className='cs_post_title cs_semibold cs_fs_32'>The Importance of Regular Cancer Screenings and Early Detection</a></h2>
                </div>
            </div>


            <div className="blog-play1">
                <div className="billboard1">
                    
                </div>

                <span className='date'>May 1, 2023</span>

                <div className="information">
                    <h2><a href="#" className='cs_post_title cs_semibold cs_fs_32'>The Importance of Regular Cancer Screenings and Early Detection</a></h2>
                </div>
            </div>
            </div>
    </section>


    <section className='bash'>
          <div className="room">
            <div className="room1">
              <div className="check">
                <h1>TRAVEL AND ENJOY YOUR HOLIDAY</h1>
              </div>
              <div className="check1">
                <p>The Raja Ampat Islands are group of islands located in the western part of the Birds Head
                  Peninsula on the island of New Guinea.
                  Administratively, the cluster under Raja Ampat 
                  Regency and Soron city
                </p>
              </div>
            </div>
            <div className="room2">
              <div className="videocard">
              <video src="/src/assets/Images/istockphoto-1151597371-640_adpp_is.mp4" className='vi' autoPlay loop muted></video>
              </div>
            </div>
          </div>
    </section>
    </div>
  );
};

export default Homepage;