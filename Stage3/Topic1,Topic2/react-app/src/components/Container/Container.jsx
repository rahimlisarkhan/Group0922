import BootstrapContainer from 'react-bootstrap/Container';
import styles from './Container.module.css';

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
