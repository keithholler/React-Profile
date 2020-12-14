import React, { Component } from "react";
import { CERTS } from "../shared/cert";
import "bootstrap/dist/css/bootstrap.min.css";
// import Swiper core and required components
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Mousewheel,
  Autoplay,
  EffectCube,
  EffectCoverflow,
} from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/effect-cube/effect-cube.scss";
import "swiper/components/effect-coverflow/effect-coverflow.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";

// install Swiper components
SwiperCore.use([
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Mousewheel,
  Autoplay,
  EffectCube,
  EffectCoverflow,
]);

class Certificates extends Component {
  constructor(props) {
    super(props);
    this.state = {
      certs: CERTS,
      width: window.innerWidth
    };
  }

  render() {
    
    const certcards = this.state.certs.map((cert) => {
      return (
        <SwiperSlide key={cert.id} className="swiper-slide text-center">
          {cert.name}
          <a className="inner" href={cert.image}>
            <img src={cert.image2} 
            alt={cert.name}
            />
          </a>
        </SwiperSlide>
      );
    });

    if(this.state.width <=1000 ){
      return (
        <div className="container" id="Certifications">
          <div className="row row-content">
            <div className="col-12 mx-auto">
              <h2 className="text-white text-center">Certifications</h2>
            </div>
          </div>
          <div className="row row-content-topborder">
            <div className="col mx-auto">
              {/* <!-- Swiper --> */}
              <div className="swiper-container mx-auto">
                <div className="swiper-wrapper mx-auto">
                
                  <Swiper
                    spaceBetween={50}                    
                    slidesPerView={1}
                    mousewheel={true}
                    loop={true}
                    autoplay={true}
                    effect={"coverflow"}
                    rotate={50}
                    depth={100}
                    speed={2000}
                    navigation={true}
                    pagination={{ clickable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log("slide change")}
                  >
                    {certcards}
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }else{
    return (
      <div className="container" id="Certifications">
        <div className="row row-content">
          <div className="col-12 mx-auto">
            <h2 className="text-white text-center">Certifications</h2>
          </div>
        </div>
        <div className="row row-content-topborder">
          <div className="col mx-auto">
            {/* <!-- Swiper --> */}
            <div className="swiper-container mx-auto">
              <div className="swiper-wrapper mx-auto">
              
                <Swiper
                  spaceBetween={50}
                  
                  slidesPerView={2}
                  mousewheel={true}
                  loop={true}
                  autoplay={true}
                  effect={"coverflow"}
                  rotate={50}
                  depth={100}
                  speed={2000}
                  navigation={true}
                  pagination={{ clickable: true }}
                  onSwiper={(swiper) => console.log(swiper)}
                  onSlideChange={() => console.log("slide change")}
                >
                  {certcards}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
    }
  }
}

export default Certificates;
