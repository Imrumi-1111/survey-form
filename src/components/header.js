import React from "react";
import styles from "./header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      
        <div className="header-title">
        <h2>BMI Calculator</h2>

        <br/>

        <img src="./images/BMI metre.jpg"alt="BMI"
        border = "1px"
        height= "500px"
        width= "580px"
        allign-items="right"
        />
        </div>
      <h2>Calculate your BMI using BMI calculator</h2>
    </header>
  );
};

export default Header;
