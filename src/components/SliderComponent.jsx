// SliderComponent.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation,A11y } from 'swiper/modules';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './SliderComponent.css'


const SliderComponent = ({ slidesData }) => {

    slidesData = [
        {
            id: 1, src: "images/slider1.jpg", caption_title: "WELCOME TO ZFCANADA IMMIGRATION", caption_heading_1: "Pioneering Your Pathway to Success", caption_heading_2: "with Expertise", caption_heading_3: "in Study and Work Permits", caption_subheading: "Unlock the Door to Canada with Our Immigration Excellence", caption_button:"Get Started", timestamp: 1625230057635 },
        {
            id: 2, src: "images/slider2.jpg", caption_title: "AT ZFCANADA   ", caption_heading_1: " Elevating Your Future with ", caption_heading_2: " Expert Express Entry and PNP Strategies ", caption_heading_3: "Your Fast Track to Canadian Residency", caption_subheading: "Expert Guidance Through Every Step of Your Immigration Journey", caption_button: "Get Started", timestamp: 1625230157635
        },
        { id: 3, src: "images/slider3.jpg", caption_title: "WELCOME TO ZFCANADA IMMIGRATION", caption_heading_1: "Empowering Your Startup Vision", caption_heading_2: "Dream Come True ", caption_heading_3: "with Expert Services", caption_subheading: "Transforming Ambition into Reality with Tailored Immigration Solutions", caption_button: "Get Started", timestamp: 1625230257635 },
        // More slides...
    ];
    
   

    const sortedSlides = slidesData.sort((a, b) => b.timestamp - a.timestamp);
    return (
        <div className="slider-container">
            <Swiper
                modules={[Autoplay, Navigation, A11y]}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                spaceBetween={0}
                slidesPerView={1}
                
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
            >
                {sortedSlides.map((slide) => (
                    <SwiperSlide key={slide.id} style={{position: "relative"} }>
                        <img src={slide.src} alt={`Slide ${slide.id}`}  />
                        <div className="slide-caption">
                            <h2 className="caption-title">{slide.caption_title}</h2>
                            <h1 className="caption-heading_1">{slide.caption_heading_1}</h1>
                            <h1 className="caption-heading_2">{slide.caption_heading_2}</h1>
                            <h1 className="caption-heading_3">{slide.caption_heading_3}</h1>
                            <p className="caption-subheading">{slide.caption_subheading}</p>
                            <button className="caption-button">{slide.caption_button}</button>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default SliderComponent;
