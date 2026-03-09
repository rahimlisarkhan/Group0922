import Container from 'react-bootstrap/Container';
import styles from './Footer.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <p>&copy; {new Date().getFullYear()} MyApp. All rights reserved.</p>
      </Container>
    </footer>
  );
}
