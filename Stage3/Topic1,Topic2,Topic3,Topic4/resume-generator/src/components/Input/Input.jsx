import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Input.module.css';

function Input({
  value = undefined,
  defaultValue = '',
  onChange = undefined,
  placeholder = '',
  disabled = false,
  readOnly = false,
  size = 'md',
  status = undefined,
  prefix = null,
  suffix = null,
  label = '',
  helperText = '',
  type = 'text',
  name = '',
  id = '',
  required = false,
  maxLength = undefined,
  showCount = false,
  className = '',
  ...rest
}) {
  const [internalValue, setInternalValue] = useState(defaultValue ?? '');

  const isControlled = value !== undefined;
  const currentValue = isControlled ? value : internalValue;

  const handleChange = (e) => {
    if (!isControlled) setInternalValue(e.target.value);
    onChange?.(e);
  };

  const wrapClasses = [
    styles.inputWrap,
    styles[size],
    status ? styles[status] : '',
    disabled ? styles.disabled : '',
  ]
    .filter(Boolean)
    .join(' ');

  const helperClasses = [styles.helperText, status ? styles[status] : '']
    .filter(Boolean)
    .join(' ');

  return (
    <div className={[styles.wrapper, className].filter(Boolean).join(' ')}>
      {label && (
        <label htmlFor={id} className={styles.label}>
          {label}
          {required && <span className={styles.required}>*</span>}
        </label>
      )}

      <div className={wrapClasses}>
        {prefix && <span className={styles.prefix}>{prefix}</span>}
        <input
          id={id}
          name={name}
          type={type}
          className={styles.input}
          value={currentValue}
          placeholder={placeholder}
          disabled={disabled}
          readOnly={readOnly}
          maxLength={maxLength}
          required={required}
          onChange={handleChange}
          aria-invalid={status === 'error'}
          {...rest}
        />
        {suffix && <span className={styles.suffix}>{suffix}</span>}
      </div>

      {(helperText || showCount) && (
        <div className={styles.footer}>
          {helperText && <span className={helperClasses}>{helperText}</span>}
          {showCount && maxLength && (
            <span className={styles.count}>
              {currentValue.length} / {maxLength}
            </span>
          )}
        </div>
      )}
    </div>
  );
}

Input.propTypes = {
  value: PropTypes.string,
  defaultValue: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  readOnly: PropTypes.bool,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  status: PropTypes.oneOf(['error', 'warning', 'success']),
  prefix: PropTypes.node,
  suffix: PropTypes.node,
  label: PropTypes.string,
  helperText: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  required: PropTypes.bool,
  maxLength: PropTypes.number,
  showCount: PropTypes.bool,
  className: PropTypes.string,
};

export default Input;
