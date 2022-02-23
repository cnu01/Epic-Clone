import "../MainSlider.css";
import { mainData } from "./MainSliderData";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Autoplay } from 'swiper';
import { SliderCard } from "./SliderCard";
export function MainSlider()
{
  
    return <div id="slider_container">
                {
                    <div id="slider_left">
                        <Swiper
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
                            return <SwiperSlide><img className="slider_image" src={slide.image} /></SwiperSlide>
                        })
                        }
                        </Swiper>
                    
                  </div>  
                }
                <div id="slider_right">
                    {
                        mainData.map((slide,index)=>{
                            return <SliderCard imageUrl={slide.image} index={index} title={(index+1)} />
                        })
                    }
                    
                </div>
    </div>
}