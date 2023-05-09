import styles from './section.module.css'
import { ImMenu } from "react-icons/im";


export default function Section(){
    const option = [
        'WNO',
        'Home',
        'About us',
        'Contact us',
]
return(
    <div className={styles.option}>
        <img src ="whologo.jpg"
      height="60rem"
      width="60rem"
      align-items="left"
      />
    {
        option.map(items=>(
            <p>{items}</p>))
    }
    <ImMenu
            className={styles.menu}
            //onClick={handleClick}
            />
    </div>
)
}