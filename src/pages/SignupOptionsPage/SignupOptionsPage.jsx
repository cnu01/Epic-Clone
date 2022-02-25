import styles from "./signup-options.module.css";

const SignupOptionsPage = () => {
  const login = () => {
    window.location.href = ``;
  };

  return (
    <div className={styles.container}>
      <div className={styles.icon}>
        <img
          src="https://raw.githubusercontent.com/mansisindhu/epic-games/f4eed54dfd6e0d2bc890518366b048ec20b2b72e/public/icons/Epic_Games_white.svg"
          alt="logo"
        />
      </div>

      <p className={styles.heading}>
        Choose how to sign in to your Epic Account
      </p>

      <div className={styles.options}>
        <div className={styles.option}>
          <img
            src="https://raw.githubusercontent.com/mansisindhu/epic-games/f4eed54dfd6e0d2bc890518366b048ec20b2b72e/public/social-icons/Epic_Games.svg"
            alt="epic-games"
          />
          <p className={styles.text}>SIGN IN WITH EPIC GAMES</p>
        </div>
        <div className={styles.option}>
          <img
            src="https://raw.githubusercontent.com/mansisindhu/epic-games/f4eed54dfd6e0d2bc890518366b048ec20b2b72e/public/social-icons/Facebook.svg"
            alt="logo-img"
          />
          <p className={styles.text}>SIGN IN WITH FACEBOOK</p>
        </div>
        <div
          onClick={login}
          className={[styles.option, styles.abled].join(" ")}
        >
          <img
            src="https://raw.githubusercontent.com/mansisindhu/epic-games/f4eed54dfd6e0d2bc890518366b048ec20b2b72e/public/social-icons/Google.svg"
            alt="logo-img"
          />
          <p className={styles.text}>SIGN IN WITH GOOGLE</p>
        </div>
        <div className={styles.option}>
          <img
            src="https://raw.githubusercontent.com/mansisindhu/epic-games/f4eed54dfd6e0d2bc890518366b048ec20b2b72e/public/social-icons/Nintendo.svg"
            alt="logo-img"
          />
          <p className={styles.text}>SIGN IN WITH NINTENDO ACCOUNT</p>
        </div>
        <div className={styles.option}>
          <img
            src="https://raw.githubusercontent.com/mansisindhu/epic-games/f4eed54dfd6e0d2bc890518366b048ec20b2b72e/public/social-icons/Xbox.svg"
            alt="logo-img"
          />
          <p className={styles.text}>SIGN IN WITH XBOX LIVE</p>
        </div>
        <div className={styles.option}>
          <img
            src="https://raw.githubusercontent.com/mansisindhu/epic-games/f4eed54dfd6e0d2bc890518366b048ec20b2b72e/public/social-icons/Playstation_Network.svg"
            alt="logo-img"
          />
          <p className={styles.text}>SIGN IN WITH PLAYSTATION NETWORK</p>
        </div>
        <div className={styles.option}>
          <img
            src="https://raw.githubusercontent.com/mansisindhu/epic-games/f4eed54dfd6e0d2bc890518366b048ec20b2b72e/public/social-icons/Apple.svg"
            alt="logo-img"
          />
          <p className={styles.text}>SIGN IN WITH APPLE</p>
        </div>
        <div className={styles.option}>
          <img
            src="https://raw.githubusercontent.com/mansisindhu/epic-games/f4eed54dfd6e0d2bc890518366b048ec20b2b72e/public/social-icons/Steam.svg"
            alt="logo-img"
          />
          <p className={styles.text}>SIGN IN WITH STEAM</p>
        </div>
      </div>
      <p className={styles.footer}>
        Don't have an Epic Games account?{" "}
        <span className={styles.underline}>Sign Up</span>
      </p>
    </div>
  );
};

export default SignupOptionsPage;
