import React, { useState } from "react";
import './form.css'


function Form() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState("");
  

  const calculateBmi = () => {
    
    if (weight && height) {
      
        const bmiValue = (weight / (height * height)).toFixed(2);
      setBmi(bmiValue);
    } else {
      setBmi("");
    }
  };

  const handleWeightChange = (event) => {
    setWeight(event.target.value);
  };

  const handleHeightChange = (event) => {
    setHeight(event.target.value);
  };

  return (
    <div className="wrapper">
      <div className="image">
      <img src="./images/chart.jpg" alt="BMI" 
        align-items="left"
        height="500px"
        width="580px"
        border="1px"
        />
      </div>
      
      <div className="form">
        <label>
          Weight (kg):
          <input className="put-value" type="number" value={weight} onChange={handleWeightChange} />
        </label>
       
        <br/>
        <br/>
        
        <label>
          Height (m):
          <input className="put-value" type="number" value={height} onChange={handleHeightChange} />
        </label>
        
       
        <button class="btn" onClick={calculateBmi}>submit</button>
      </div>
     
      {bmi && (
        <div className="result">
          <p>Your BMI is : {bmi}</p>
          <p>{bmi < 18.5 ? "Underweight" : bmi < 25 ? "Normal" : "Overweight"}</p>
        </div>
      )}
    </div>
  );
}

export default Form;

