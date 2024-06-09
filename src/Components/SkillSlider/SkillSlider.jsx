import React from 'react'
import Slider from "react-slick";

export default function SkillSlider() {
    const settings = {
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed:0,
        cssEase: "linear",
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          }
        ]
      };
  return <>
  <div className="slider-container">
  <Slider {...settings}>

          <div>
            <img src="./html.svg" className='projchange' alt="html" />
            <p>HTML</p>
          </div>
          <div>
            <img src="./css.svg" className='projchange' alt="css" />
            <p>CSS</p>
          </div>
          <div>
            <img src="./bootstrap.svg" className='projchange' alt="bootstrap" />
            <p>Bootstrap</p>
          </div>
          <div>
            <img src="./tailwind-css.svg" className='projchange' alt="redux" />
            <p>Tailwind</p>
          </div>
          <div>
            <img src="./javascript.svg" className='projchange' alt="javascript" />
            <p>JavaScript</p>
          </div>
          <div>
            <img src="./jquery-original-wordmark.svg" className='projchange' alt="javascript" />
            <p>JQuery</p>
          </div>
          <div>
            <img src="./react.svg" className='projchange' alt="react" />
            <p>ReactJs</p>
          </div>
          <div>
            <img src="./redux.svg" className='projchange' alt="redux" />
            <p>Redux</p>
          </div>
          <div>
            <img src="./nextjs (1).svg" className='projchange' alt="redux" />
            <p>NextJs</p>
          </div>
          <div>
            <img src="./material-ui.svg" className='projchange' alt="redux" />
            <p>Material UI</p>
          </div>
          <div>
            <img src="./images.png" className='projchange' alt="redux" />
            <p>Daisy UI</p>
          </div>
          </Slider>
  
          
        </div>
        
  </>
}
