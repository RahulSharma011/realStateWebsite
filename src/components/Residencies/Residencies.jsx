import React from 'react'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import "swiper/css"
import data from '../../utils/slider.json';
import "./Residencies.css"
import { sliderSettings } from '../../utils/common';

const Residencies = () => {
    return (
        <section className='r-wrapper'>
            <div className='padding innerWidth r-container'>
                <div className="flexColStart r-head">
                    <span className='orangeText'>Best Choices</span>
                    <span className='primaryText'>Popular Residencies</span>
                </div>

                <Swiper {...sliderSettings}>
                    <SliderButton />
                    {
                        data.map((card, i) => (
                            <SwiperSlide key={i}>
                                <div className='flexColStart r-card'>
                                    <img src={card.image} alt="home" />
                                    <span className="secondaryText r-price">
                                        <span style={{ color: "orange" }}>$</span>
                                        <span className='primaryText' >{card.price}</span>
                                    </span>
                                    <span className='primaryText'>{card.name}</span>
                                    <span className='primaryText'>{card.detail}</span>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </section>
    )
}

export default Residencies;

const SliderButton = () => {
    const swiper = useSwiper();
    return (
        <div className="flexCenter r-buttons">
            <button onClick={() => swiper.slidePrev()}>&lt;</button>
            <button onClick={() => swiper.slideNext()}>&gt;</button>
        </div>
    )
}