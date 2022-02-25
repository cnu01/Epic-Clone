import { ThemeProvider } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import styles from "./signup.module.css";

const SignupPage = () => {
  const user = useSelector((state) => state.user);
  const [data, setData] = useState({
    displayName: "",
    email: "",
    firstName: "",
    lastName: "",
  });

  const handleInput = (e) => {
    setData((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.icon}>
        <img
          src="https://raw.githubusercontent.com/mansisindhu/epic-games/f4eed54dfd6e0d2bc890518366b048ec20b2b72e/public/icons/Epic_Games_white.svg"
          alt="logo"
        />
      </div>
      <div className={styles.form}>
        <p>Sign Up</p>
        <div className={styles.names}>
          <TextField
            required
            style={{ width: "100%" }}
            label="First Name"
            onChange={handleInput}
            name="firstName"
            defaultValue={user.firstName}
          />

          <TextField
            required
            style={{ width: "100%" }}
            label="Last Name"
            defaultValue={user.lastName}
            name="lastName"
            onChange={handleInput}
          />
        </div>

        <TextField
          required
          style={{ width: "100%" }}
          label="Display Name"
          name="displayName"
          autoComplete={false}
        />

        <TextField
          disabled
          required
          style={{ width: "100%" }}
          label="email"
          name="email"
        />

        <div className={styles.checkboxes}>
          <div className={styles.checkbox}>
            <Checkbox
              sx={{
                padding: 0,

                color: "gray",
                "& .MuiSvgIcon-root": { fontSize: 28 },
              }}
            />
            <p>
              I would like to receive news, surveys and special offers from Epic
              Games.
            </p>
          </div>

          <div className={styles.checkbox}>
            <Checkbox
              sx={{
                padding: 0,
                color: "gray",
                "& .MuiSvgIcon-root": { fontSize: 28 },
              }}
            />
            <p>
              I have read and agree to the{" "}
              <span className={styles.underline}>terms of service</span>
            </p>
          </div>
        </div>
        <div>
          <button>CONTINUE</button>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
