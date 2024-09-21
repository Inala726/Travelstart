import { useState, useEffect, useRef } from 'react';
import './Homepage.css'
import Nav from '../../Components/Navbar/Nav';


const Homepage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeRunning = 3000;
  const timeAutoNext = 7000;
  const carouselRef = useRef(null);
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    fetch("/data.json") 
      .then((response) => response.json())
      .then((jsonData) => setData(jsonData))
      .catch((error) => console.error("Error fetching JSON:", error));
  }, []);

  useEffect(() => {
    if (searchTerm === "") {
      setFilteredData([]);
    } else {
      const filteredItems = data.filter((item) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) || item.continent.toLowerCase().includes(searchTerm.toLowerCase)
      );
      setFilteredData(results);
    }
  }, [searchTerm, data]);





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
              <Nav/>
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
              {/* <div className="buttons">
                <button className='title-button'>SEE MORE</button>
              </div> */}
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
              The location of this mountain is precise in pemo village.
            </p>
          </div>
          <div className='info1'>
          There are beaches that have very strong Balinese nuances besides the island of the gods, Bali.

            Well, the beach is called Ulung Suso Beach, in Mabonta Village.
          </div>
          <div className='info1'>
          Two waterfalls that are pleasing to the eye are located in East Luwu Regency, namely the Mata Buntu waterfall and the Kali Dingin waterfall. 
          </div>
    </section>

    <section className='card'>
        {}
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

    <section className='blog100'>
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

    <section className='whyus'>
      <div className="whyus-nav">
        <h2>4 Reasons Why you should visit new zealand</h2>
      </div>
      <div className="whyus-card">
          <div className='whyus-card1'>
            <div className='whyus-title'>TRIP OF YOUR DREAM</div>
            <div className='span-split'>
              <span>1. Breathtaking Scenery - From stunning fjords to rolling hills, New Zealand offers incredible landscapes for every nature lover.</span>
              <span>2. Adventure Capital - Known for activities like bungee jumping, skydiving, and hiking, it's a paradise for thrill-seekers.</span>
              <span>3. Rich Māori Culture - Experience authentic Māori traditions, art, and history, adding a cultural depth to your trip.</span>
              <span>4. Unique Wildlife - Spot native species like the kiwi bird, dolphins, and even penguins in their natural habitats.</span>
            </div>
            <div className='whyus-block'>
              <button className='readmore'>Read More</button>
            </div>
          </div>
          <div className='whyus-card2'>
            <div className="cards">
              <div className="card red"></div>
              <div className="card blue"></div>
              <div className="card green"></div>
            </div>

          </div>
      </div>

    </section>


    <section className='last-dimension'>
          <div className="us">WHY US?</div>
          <div className="hobbition">
              <div className="hobbition-info">
                <h2>Hobbision</h2>
                <span>Discover incredible destinations and unbeatable travel deals.
                  Plan your perfect getaway and embark on new adventures.
                  </span>
                  <button className='readmore'>Read More</button>
              </div>


              <div className="hobbition-pic"></div>
          </div>

          <div className="trending">
              <span><h2>Popular tour</h2></span>

              <div className="tour-data">
                  <div className="tour-card">
                    <div className="tc-info">
                      <span>Paris, France </span>
                      <div className="tour-icon"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right-circle" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"/>
                      </svg></div>
                    </div>
                  </div>


                  <div className="tour-card1">
                    <div className="tc-info">
                      <span>Kyoto, Japan </span>
                      <div className="tour-icon"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right-circle" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"/>
                      </svg></div>
                    </div>
                  </div>

                  <div className="tour-card2">
                    <div className="tc-info">
                      <span>Santorini, Greece </span>
                      <div className="tour-icon"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right-circle" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"/>
                      </svg></div>
                    </div>
                  </div>


                  <div className="tour-card3">
                    <div className="tc-info">
                      <span>Machu Picchu, Peru  </span>
                      <div className="tour-icon"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right-circle" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"/>
                      </svg></div>
                    </div>
                  </div>
              </div>
            </div>
          
    </section>
    </div>
  );
};

export default Homepage;