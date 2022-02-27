import styles from "./Footer.module.css";
import facebook from "./facebook.svg";
import twitter from "./twitter.svg";
import youtube from "./youtube.svg";
import epic from "./epic-games.svg";
import unreal from "./unreal-engine.svg";
const Footer = () => {
    return (
        <>
            
            <div className={styles.footer}>
            <br/>
                <div className={styles.main}>
                    <div className={styles.icon_header}>
                        <div className={styles.social_links}>
                            <img src={facebook} alt="facebook" />
                            <img src={twitter} alt="twitter" />
                            <img src={youtube} alt="youtube" />
                        </div>
                    </div>

                    <div className={styles.lang_div}>
                        <div className={styles.cont}>
                            <div className={styles.resources}>
                                <p className={styles.footer_heading}>Resources</p>
                                <div className={styles.links}>
                                    <p>Support-A-Creator</p> <p>Company</p>
                                    <p>Store EULA </p>
                                    <p>Publish on Epic Games</p>
                                    <p>Fan art Policy</p>
                                    <p>Russian</p> <p>Polish</p>
                                    <p>Online Services</p>
                                    <p>Careers</p> <p>UX Research</p>
                                    <p>Community Rules</p>
                                </div>
                            </div>

                            <div className={styles.epicgames}>
                                <p className={styles.footer_heading}>Made By Epic Games</p>
                                <div className={styles.links}>
                                    <p>Battle Breakers</p> <p>Shadow Complex</p> <p> Fortnite</p>
                                    <p>Spyjinx</p>
                                    <p>Wolfstride</p> <p>Unspottable</p> <p>Shadow tactics</p>
                                    <p>Dead by daylight</p>
                                    <p>ChromaGun</p> <p>Chivalry</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <p className={styles.bottom_text}>
                        © 2021, Epic Games, Inc. All rights reserved. Epic, Epic Games, the
                        Epic Games logo, Fortnite, the Fortnite logo, Unreal, Unreal Engine,
                        the Unreal Engine logo, Unreal Tournament, and the Unreal Tournament
                        logo are trademarks or registered trademarks of Epic Games, Inc. in
                        the United States of America and elsewhere. Other brands or product
                        names are the trademarks of their respective owners. Non-US
                        transactions through Epic Games International, S.à r.l.
                    </p>

                    <div className={styles.bottom_footer}>
                        <div className={styles.left}>
                            <p>Terms of Service</p>
                            <p>Privacy Policy</p>
                            <p>Store Refund Policy</p>
                        </div>

                        <div className={styles.right}>
                            <img src={epic} alt="epicGamesLogo" />
                            <img src={unreal} alt="unreal" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;
