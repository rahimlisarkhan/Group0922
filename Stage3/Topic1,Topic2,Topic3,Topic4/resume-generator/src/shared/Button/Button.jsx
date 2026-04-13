import PropTypes from 'prop-types';
import styles from './Button.module.css';

function Button({
  children = null,
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  block = false,
  htmlType = 'button',
  onClick = undefined,
  icon = null,
  iconPosition = 'left',
  className = '',
  ...rest
}) {
  const classes = [
    styles.btn,
    styles[variant],
    styles[size],
    block ? styles.block : '',
    disabled ? styles.disabled : '',
    loading ? styles.loading : '',
    iconPosition === 'right' ? styles.iconRight : '',
    className || '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button
      type={htmlType}
      className={classes}
      onClick={disabled || loading ? undefined : onClick}
      disabled={disabled || loading}
      aria-busy={loading}
      {...rest}
    >
      {loading && <span className={styles.spinner} aria-hidden="true" />}
      {!loading && icon && <span className={styles.icon}>{icon}</span>}
      {children && <span>{children}</span>}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node,
  variant: PropTypes.oneOf(['primary', 'secondary', 'ghost', 'danger', 'link']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  block: PropTypes.bool,
  htmlType: PropTypes.oneOf(['button', 'submit', 'reset']),
  onClick: PropTypes.func,
  icon: PropTypes.node,
  iconPosition: PropTypes.oneOf(['left', 'right']),
  className: PropTypes.string,
};

export default Button;
