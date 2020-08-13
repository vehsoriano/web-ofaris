import React, { useState } from 'react';
import Swiper from 'react-id-swiper';

import arrowLeft from '../assets/images/arrow-left.svg';
import arrowRight from '../assets/images/arrow-right.svg';

const clients = [
  {
    img: require('../assets/images/clients-image-1.png'),
    title: 'Code metro',
    info: 'CodeMetro provides powerful ABA Therapy Software that allows users to optimize time and operate more efficiently on scheduling, billing, clinical data collection, compliance, and payroll. Ofaris assists with long term staff augmentation, providing qualified developers, quality assurance resources, and scrum masters. The success of their involvement has led to an exclusive staffing arrangement and trust since 2015 with multiple teams.',
    logo: require('../assets/images/client-code-metro.png')
  },
  {
    img: require('../assets/images/clients-image-2.png'),
    title: 'Mutual CL',
    info: 'Mutual CL contact us with a large number of road accidents.Develop a mobile application to alert the dangerous points of the routes by sounds. We choose sound method because the driver have to be focused in the road and not in the smartphone. Technologies: Mobile application developed in Ionic with Cordova, .NET API, Google maps for geolocation. (GPS based for the Offline mode)',
    logo: require('../assets/images/client-mutual.png')
  },
  {
    img: require('../assets/images/clients-image-3.png'),
    title: 'Paramedic Connect',
    info: 'Reduce costs generated by face-to-face visits between doctors and patients. Develop a mobile application for users, and web application for doctors with a real-time video streaming. Technologies: Mobile application developed in Ionic with Cordova, .NET Core API, WebRTC for the stream.',
    logo: require('../assets/images/client-connect.png')
  }
]

const Clients = () => {
  const [swiper, updateSwiper] = useState(null);

  const goNext = () => {
    if (swiper !== null) {
      swiper.slideNext();
    }
  };

  const goPrev = () => {
    if (swiper !== null) {
      swiper.slidePrev();
    }
  };

  return (
    <section className="section-clients" id="clients">
      <div className="container">
        <h2 className="section-title">&lt; Our Clients &gt;</h2>
        <div className="container-wrapper">
          <div className="wrapper-clients">
            <div className="holder-clients-swiper">
              <Swiper getSwiper={updateSwiper}>
                {
                  clients.map((item, i) => {
                    return(
                      <div className="holder-clients" key={i}>
                        <div className="holder-image" style={{ backgroundImage: `url(${item.img})` }} >
                            {/* <img src={ ClientImage } className="client-image" alt="Client Logo"/> */}
                        </div>
                        <div className="holder-info">
                          <p className="info-title">{item.title}</p>
                          <p className="info-desc">{item.info}</p>
                          <div className="holder-info-logo">
                            <img src={ item.logo } className="client-logo" alt="Client Logo"/>
                          </div>
                        </div>
                      </div>
                    )
                  })
                }
              </Swiper>
            </div>
            <div className="holder-swiper-button">
              <button onClick={goPrev} className="swiper-button left">
                <img src={arrowLeft} alt="Arrow Left"/>
              </button>
              <button onClick={goNext} className="swiper-button right">
                <img src={arrowRight} alt="Arrow Left"/>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Clients;
