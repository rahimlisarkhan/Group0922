import BootstrapContainer from 'react-bootstrap/Container';
import styles from './Container.module.css';

export function Container({ children }) {
  return (
    <main className={styles.container}>
      <BootstrapContainer>
        {children}
      </BootstrapContainer>
    </main>
  );
}
