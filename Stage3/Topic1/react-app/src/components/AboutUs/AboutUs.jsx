import Container from 'react-bootstrap/Container';
import styles from './AboutUs.module.css';

export function AboutUs() {
  return (
    <section className={styles.aboutUs}>
      <Container>
        <h2>About Us</h2>
        <p>Learn more about who we are and what we do.</p>
      </Container>
    </section>
  );
}
