import "../MainSlider.css";
import { mainData } from "./MainSliderData";
export function SliderCard({imageUrl,title,index})
{
    return <div className="card">
                <div className="card_image_box">
                    <img src={imageUrl} className="card_image" />
                </div>
                <div className="card_title_box">
                    <p>Title : {title}</p>
                </div>
    </div>
}