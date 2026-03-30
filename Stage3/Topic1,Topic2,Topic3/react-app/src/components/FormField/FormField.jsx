import PropTypes from 'prop-types';
import styles from './FormField.module.css';

export const FormField = ({ label, name, value, onChange, error, type = "text" }) => {
    return (
        <div className={styles.field}>
            {label && <label className={styles.label}>{label}</label>}
            <input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                className={`${styles.input} ${error ? styles.inputError : ''}`}
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
}
