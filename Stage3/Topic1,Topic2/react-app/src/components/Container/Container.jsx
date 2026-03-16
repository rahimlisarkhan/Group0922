import BootstrapContainer from 'react-bootstrap/Container';
import styles from './Container.module.css';
import PropTypes from 'prop-types';

Container.propTypes = {
  children: PropTypes.node.isRequired
}

export function Container(props) {

  const { children } = props;

  return (
    <main className={styles.container}>
      <BootstrapContainer>
        {children}
      </BootstrapContainer>
    </main>
  );
}
