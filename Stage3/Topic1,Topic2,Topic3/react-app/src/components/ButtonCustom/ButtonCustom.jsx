// import "./Button.css"
import styles from  "./Button.module.css"
import PropTypes from 'prop-types';

ButtonCustom.propTypes = {
  variant: PropTypes.oneOf(['primary', 'danger', 'success', 'warning', 'secondary']).isRequired,
  loading: PropTypes.bool,
  style: PropTypes.object,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool
}

export function ButtonCustom({ style, className, loading, variant = 'primary', disabled, children }) {

  const dynamicClass = styles[variant];

  return (
    // <button className="btn">
    <button className={`${styles.btn} ${dynamicClass} ${className}`} style={style} disabled={loading || disabled}>
      {loading ? "Loading..." : children}
    </button>
  )
}


