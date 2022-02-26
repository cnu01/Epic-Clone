import "../MainSlider.css";
import { mainData } from "./MainSliderData";
export function SliderCard({imageUrl,title,index,isCurrentSlide})
{
    // console.log(isCurrentSlide,index);
    return <div className="card">
                    <div className={isCurrentSlide?"card_progress active_progress":"card_progress"}></div>
                    <div className="card_content">
                        <div className="card_image_box">
                            <img src={imageUrl} className="card_image" />
                        </div>
                        <div className="card_title_box">
                            <p>{title}</p>
                        </div>
                    </div>
            </div>
           
            
}