import PropTypes from 'prop-types';
import { Text } from '@/shared/Typography';
import styles from './SectionTitle.module.css';

function SectionTitle({ children = null, className = '' }) {
  return (
    <Text strong className={[styles.sectionTitle, className].filter(Boolean).join(' ')}>
      {children}
    </Text>
  );
}

SectionTitle.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default SectionTitle;
