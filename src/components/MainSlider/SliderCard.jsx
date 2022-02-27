import "./MainSlider.css";
import { mainData } from "./MainSliderData";
export function SliderCard({imageUrl,title,index,isCurrentSlide})
{
    // console.log(isCurrentSlide,index);
    return <div className="gyan_slider_card">
                    <div className={isCurrentSlide?"gyan_slider_card_progress active_progress":"gyan_slider_card_progress"}></div>
                    <div className="gyan_slider_card_content">
                        <div className="gyan_slider_card_image_box">
                            <img src={imageUrl} className="gyan_slider_card_image" />
                        </div>
                        <div className="gyan_slider_card_title_box">
                            <p>{title}</p>
                        </div>
                    </div>
            </div>
           
            
}