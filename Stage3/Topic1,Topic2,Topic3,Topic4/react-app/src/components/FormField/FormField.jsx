import PropTypes from 'prop-types';
import styles from './FormField.module.css';
import { useState } from 'react';

export const FormField = ({ label, name, value, onChange, onSend, error, type = "text" }) => {
    const [focus, setFocus] = useState(false);

    console.log("focus",focus);
    

    const handleEnter = (e) => {
        if (e.key === "Enter") {
            e.preventDefault();

            console.log("Enter...");
            
            onSend?.();
        }
    }

    return (
        <div className={styles.field}>
            {label && <label className={styles.label}>{label}</label>}
            <input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                onFocus={() => setFocus(true)}
                onBlur={() => setFocus(false)}
                onKeyDown={handleEnter}
                className={`${styles.input} ${error ? styles.inputError : ''} ${focus ? styles.inputFocus : ''}`}
            />
            {error && <span className={styles.error}>{error}</span>}
        </div>
    )
}

FormField.propTypes = {
    label: PropTypes.string,
    name: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    onChange: PropTypes.func.isRequired,
    error: PropTypes.string,
    type: PropTypes.string,
    onSend: PropTypes.func.isOptional,
}
