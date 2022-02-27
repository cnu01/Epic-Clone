import "./wishlist.css"
import Header from "../Header/Header"
import {Navbar} from '../Header/Navbar'
import Footer from '../Footer/Footer'

export function Wishlist() {
    let data = [{img:"https://png.pngtree.com/png-clipart/20200722/original/pngtree-extreme-hunter-gaming-logo-template-for-gamer-png-image_5050960.jpg",title:"Cyber Punk 2022",price:"2000"},
    {img:"https://png.pngtree.com/png-clipart/20200722/original/pngtree-extreme-hunter-gaming-logo-template-for-gamer-png-image_5050960.jpg",title:"Veldomre",price:"2000"}]
    let cart = 1;
    if(cart == 0){
        return(
            <div>
                <Header/>
                <Navbar/>
                <div>
                   <h1 className="Mywish-text">Wishlist</h1>
                </div>
                <div>
                    <span className="css-cvmfyy" aria-hidden="true" data-testid="icon" data-component="Icon">
                    <svg xmlns="http://www.w3.org/2000/svg" class="svg css-w1atjl" viewBox="0 0 45 52">
                    <g fill="none" fill-rule="evenodd">
                    <path d="M4.058 0C1.094 0 0 1.098 0 4.075v35.922c0 .338.013.65.043.94.068.65-.043 1.934 2.285 2.96 1.553.683 7.62 3.208 18.203 7.573 1.024.428 1.313.529 2.081.529.685.013 1.137-.099 2.072-.53 10.59-4.227 16.66-6.752 18.213-7.573 2.327-1.23 2.097-3.561 2.097-3.899V4.075C44.994 1.098 44.13 0 41.166 0H4.058z" fill="currentColor">
                    </path><path stroke="#FFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M14 18l4.91 2.545-2.455 4M25.544 28.705c-1.056-.131-1.806-.14-2.25-.025-.444.115-1.209.514-2.294 1.197M29.09 21.727L25 19.5l2.045-3.5">
                    </path></g></svg></span>
                </div>
                <div>
                    <span>
                        <span className="class-of-wish-empty"><h2 className="class-of-wish-empty">You haven't added anything to your wishlist yet.</h2></span>
                    </span>
                </div>
                <div>
                <span className="class-of-wish-empty  wish-shop-games">Shop for Games & Apps</span>
                </div>
                <Footer/>
                </div>
                
        ) 
    }if(cart !== 0){
        return(
            <div>
                 <Header/>
                <Navbar/>
                 <div>
                 
                    
                </div>
            <div>
            <h1 className="Mycart-text">Wishlist</h1>
            </div >
            <div className="div-for-div-two-divs">
            <div className="div-for-push-grid-main " >
            {data.map((user) => (
                <div className="div-for-push-grid ">
                    <div className="div-for-display-price-img-as-flex">
            <img className="img-Cart-page-push data-for-flex-show" src={user.img} />
            <div className="user data-for-flex-show">{user.title}</div>
            <div className="data-for-flex-show"> { user.price}</div>
            </div>
            <button className="btn-for-not-flex">Remove</button>
            <div className="divNotdisplay"></div>
            </div>
             ))}
            
            </div>
            </div>
            <Footer/>
            </div>
        )
    }
            
    
}
