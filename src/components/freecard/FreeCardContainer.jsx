import "./freeCardContainer.css";

const FreeCardContainer = () => {
  return (
    <>
 
    <div className="outer">
      <div className="container">
        <div className="upper">
          <div className="icon_div ">
            <img src="https://epic-games-clone.vercel.app/icons/gift.svg" alt="giftIcon" />
            <p>Free Games</p>
          </div>

          <div>
            <button id="view" className="btn">VIEW MORE</button>
          </div>
        </div>

        <div className="lower">
          <div className="games_card">
            <div className="image_div">
              <img
                className="banner"
                src="https://cdn2.unrealengine.com/egs-brothersataleoftwosons-starbreezestudiosab-g1a-00-1920x1080-52c529b5044f.jpg"
                alt="freeCardImages"
              />
              <div className="free">Free Now</div>
            </div>

            <div className="content">
              <p className="heading1">Marvel's Guardians of the Galaxy</p>
              <p className="subheading">Free Now - Dec 19 at 09:30 PM</p>
            </div>
          </div>

          <div className="games_card">
            <div className="image_div">
              <img
                className="banner"
                src="https://cdn1.epicgames.com/ef361cdf19514595a8cb0945fb66962e/offer/EGS_AgorgeousindielovelettertoclassicJRPGs_DreamsUncorporatedSYCK_S1-2560x1440-8c27d8ecb673f1438c6a4b0da48ff880.jpg?h=480&resize=1&w=854"
                alt="freeCardImages"
              />
              <div className="free">Coming Soon</div>
            </div>

            <div className="content">
              <p className="heading1">Outer Wilds Updated Edition</p>
              <p className="subheading">Free Now - Dec 09 at 11:11 AM</p>
            </div>
          </div>
        </div>
      </div>
      </div>
      
    </>
  );
};

export default FreeCardContainer;