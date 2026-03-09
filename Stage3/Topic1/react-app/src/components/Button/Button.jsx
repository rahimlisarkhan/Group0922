// import "./Button.css"
import styles from  "./Button.module.css"


export const Button = () => {

  console.log("styles",styles);

  return (
    // <button className="btn">
    <button className={styles.btn}>
      Button
    </button>
  )
}