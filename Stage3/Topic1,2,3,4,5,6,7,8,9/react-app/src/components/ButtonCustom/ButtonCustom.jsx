// import "./Button.css"
import { useRef } from "react";
import styles from  "./Button.module.css"
import PropTypes from 'prop-types';

ButtonCustom.propTypes = {
  variant: PropTypes.oneOf(['primary', 'danger', 'success', 'warning', 'secondary']).isRequired,
  loading: PropTypes.bool,
  style: PropTypes.object,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
}

export function ButtonCustom({ style, className, loading, variant = 'primary', disabled, children, onClick }) {

  const dynamicClass = styles[variant];

  return (
    <button className={`${styles.btn} ${dynamicClass} ${className}`} style={style} disabled={loading || disabled} onClick={onClick}>
      {loading ? "Loading..." : children}
    </button>
  )
}


