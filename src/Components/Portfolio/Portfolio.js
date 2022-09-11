import React, { useContext } from "react";
import './Portfolio.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import Portfolio1 from "../../img/portfolio-1.png";
import Portfolio2 from "../../img/portfolio-2.png";
import Portfolio3 from "../../img/portfolio-3.png";
import Portfolio4 from "../../img/portfolio-4.png";
import Portfolio5 from "../../img/portfolio-5.png";
import Portfolio6 from "../../img/portfolio-6.jpg";
import 'swiper/css';
import { themeContext } from "../../Context";

function Portfolio() {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return (
        <div className="portfolio" id="Portfolio">
            {/* heading */}
            <span style={{ color: darkMode ? 'white' : '' }}>Son Projeler</span>
            <span>Portfolyo</span>
            {/* slider */}
            <Swiper
                grabCursor={true}
                breakpoints={{
                    0: {
                        spaceBetween : 0,
                        slidesPerView : 1
                    },
                    360: {
                        spaceBetween : 10,
                        slidesPerView : 0.85
                    },
                    380: {
                        spaceBetween : 10,
                        slidesPerView : 0.9
                    },
                    400: {
                        spaceBetween : 10,
                        slidesPerView : 0.9
                    },
                    436: {
                        spaceBetween : 10,
                        slidesPerView : 1
                    },
                    480: {
                        spaceBetween : 10,
                        slidesPerView : 1.1
                    },
                    540: {
                        spaceBetween : 10,
                        slidesPerView : 1
                    },
                    768: {
                        spaceBetween : 10,
                        slidesPerView : 2
                    },
                    920: {
                        spaceBetween : 10,
                        slidesPerView : 2
                    },
                    1000: {
                        spaceBetween : 10,
                        slidesPerView : 2.2
                    },
                    1100: {
                        spaceBetween : 10,
                        slidesPerView : 2.4
                    },
                    1200: {
                        spaceBetween : 10,
                        slidesPerView : 2.7
                    },
                    1300: {
                        spaceBetween : 10,
                        slidesPerView : 2.9
                    },
                    1400: {
                        spaceBetween : 10,
                        slidesPerView : 3.2
                    },
                    1500: {
                        spaceBetween : 10,
                        slidesPerView : 3.4
                    },
                    1600: {
                        spaceBetween : 10,
                        slidesPerView : 4.2
                    }
                }}
                className='portfolio-slider'
            >
                <SwiperSlide>
                    <img src={Portfolio1} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Portfolio2} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Portfolio3} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Portfolio4} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Portfolio5} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Portfolio6} alt="" />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Portfolio