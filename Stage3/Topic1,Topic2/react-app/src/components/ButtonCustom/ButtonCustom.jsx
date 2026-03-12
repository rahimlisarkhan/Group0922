// import "./Button.css"
import styles from  "./Button.module.css"


export const ButtonCustom = (props) => {

  const { style, className, loading,variant} = props

  const dynamicClass = styles[variant];

  return (
    // <button className="btn">
    <button className={`${styles.btn} ${dynamicClass} ${className}`} style={style} disabled={loading}>
      {loading ? "Loading..." : props.children}
    </button>
  )
}