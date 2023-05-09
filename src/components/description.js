import styles from './description.module.css'
import {Fragment} from 'react'

export default function Details(){
    return(
        <Fragment>
        <h3 className={styles.bmi}>What is BMI?</h3>
        <div className={styles.details}>
            
            <p>Body mass index (BMI) is a person’s weight in 
                kilograms divided by the square of height in meters. BMI is an
            inexpensive and easy screening method for weight category—underweight, 
            healthy weight, overweight, and obesity.
BMI does not measure body fat directly, but BMI is moderately correlated 
with more direct measures of body fat 1,2,3. Furthermore, BMI appears to 
be as strongly correlated with various metabolic and disease 
outcome as are these more direct measures of body fatness 4,5,6,7,8,9.</p>
<img src="./images/bmiImage.jpg" alt=""
height="500px"
width="580px"
border="1px"
aligh-items="right"
/>
        </div>
        </Fragment>
    )
}