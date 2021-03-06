import "./MainSlider.css";
import { mainData } from "./MainSliderData";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Autoplay } from 'swiper';
import { SliderCard } from "./SliderCard";
import { useEffect, useState } from "react";
export function MainSlider()
{
    const [currentSlide,setCurrentSlide]=useState(0);
    return <div id="slider_container">
                {
                    <div id="slider_left">
                        <Swiper
                        onSlideChangeTransitionStart={(slide)=>{
                            setCurrentSlide(currentSlide===mainData.length-1?0:currentSlide+1);
                            // console.log(currentSlide);
                        }}
                        modules={[Autoplay]}
                        spaceBetween={50}
                        slidesPerView={1}
                        loop={true}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                        autoplay={{ delay: 3000 }}
                        // simulateTouch={false}
                        >
                        {
                        mainData.map((slide)=>{
                            return <SwiperSlide><img className="slider_image" src={slide.image} />
                                        <div className="myswiper_content">
                                            <img src={slide.logo} className="myswiper_content_logo" />
                                            <p>{slide.details}</p>
                                            <br/>
                                            <h5>Starting at &#8377; {slide.price}</h5>
                                            <br/>
                                            <button className="myswiper_content_button">Buy Now</button>
                                            <button className="myswiper_content_button wish">
                                            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="15px" height="15px" viewBox="0 0 122.879 122.88" fill="white" enable-background="new 0 0 122.879 122.88">
                                                <g>
                                                    <path d="M17.995,17.995C29.992,5.999,45.716,0,61.439,0s31.448,5.999,43.445,17.995c11.996,11.997,17.994,27.721,17.994,43.444 c0,15.725-5.998,31.448-17.994,43.445c-11.997,11.996-27.722,17.995-43.445,17.995s-31.448-5.999-43.444-17.995 C5.998,92.888,0,77.164,0,61.439C0,45.716,5.998,29.992,17.995,17.995L17.995,17.995z M57.656,31.182 c0-1.84,1.492-3.332,3.333-3.332s3.333,1.492,3.333,3.332v27.383h27.383c1.84,0,3.332,1.492,3.332,3.332 c0,1.841-1.492,3.333-3.332,3.333H64.321v27.383c0,1.84-1.492,3.332-3.333,3.332s-3.333-1.492-3.333-3.332V65.229H30.273 c-1.84,0-3.333-1.492-3.333-3.333c0-1.84,1.492-3.332,3.333-3.332h27.383V31.182L57.656,31.182z M61.439,6.665 c-14.018,0-28.035,5.348-38.731,16.044C12.013,33.404,6.665,47.422,6.665,61.439c0,14.018,5.348,28.036,16.043,38.731 c10.696,10.696,24.713,16.044,38.731,16.044s28.035-5.348,38.731-16.044c10.695-10.695,16.044-24.714,16.044-38.731 c0-14.017-5.349-28.035-16.044-38.73C89.475,12.013,75.457,6.665,61.439,6.665L61.439,6.665z"/>
                                                </g>
                                            </svg>&nbsp; Add To Wishlist</button>
                                        </div>
                                    </SwiperSlide>
                        })
                        }
                        </Swiper>
                    
                  </div>  
                }
                <div id="slider_right">
                    {
                        mainData.map((slide,index)=>{
                            return <SliderCard imageUrl={slide.thumbnail} isCurrentSlide={(currentSlide-1<0?mainData.length-1:currentSlide-1)==index?true:false} index={index} title={slide.title} />
                        })
                    }
                    
                </div>
    </div>
}