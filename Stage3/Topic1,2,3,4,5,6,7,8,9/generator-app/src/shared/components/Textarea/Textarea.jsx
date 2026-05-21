import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Textarea.module.css';

const RESIZE_CLASS = {
  none: 'noResize',
  vertical: '',
  horizontal: 'horizontal',
  both: 'both',
};

function Textarea({
  value = undefined,
  defaultValue = '',
  onChange = undefined,
  placeholder = '',
  disabled = false,
  readOnly = false,
  size = 'md',
  status = undefined,
  label = '',
  helperText = '',
  name = '',
  id = '',
  required = false,
  maxLength = undefined,
  showCount = false,
  rows = 4,
  resize = 'vertical',
  className = '',
  ...rest
}) {
  const [internalValue, setInternalValue] = useState(defaultValue);

  const isControlled = value !== undefined;
  const currentValue = isControlled ? value : internalValue;

  const handleChange = (e) => {
    if (!isControlled) setInternalValue(e.target.value);
    onChange?.(e);
  };

  const wrapClasses = [
    styles.textareaWrap,
    styles[size],
    status ? styles[status] : '',
    disabled ? styles.disabled : '',
  ]
    .filter(Boolean)
    .join(' ');

  const textareaClasses = [
    styles.textarea,
    RESIZE_CLASS[resize] ? styles[RESIZE_CLASS[resize]] : '',
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
        <textarea
          id={id}
          name={name}
          className={textareaClasses}
          value={currentValue}
          placeholder={placeholder}
          disabled={disabled}
          readOnly={readOnly}
          maxLength={maxLength}
          required={required}
          rows={rows}
          onChange={handleChange}
          aria-invalid={status === 'error'}
          {...rest}
        />
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

Textarea.propTypes = {
  value: PropTypes.string,
  defaultValue: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  readOnly: PropTypes.bool,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  status: PropTypes.oneOf(['error', 'warning', 'success']),
  label: PropTypes.string,
  helperText: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  required: PropTypes.bool,
  maxLength: PropTypes.number,
  showCount: PropTypes.bool,
  rows: PropTypes.number,
  resize: PropTypes.oneOf(['none', 'vertical', 'horizontal', 'both']),
  className: PropTypes.string,
};

export default Textarea;
