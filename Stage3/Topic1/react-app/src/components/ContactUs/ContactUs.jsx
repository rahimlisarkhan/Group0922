import Container from 'react-bootstrap/Container';
import styles from './ContactUs.module.css';

export function ContactUs() {
  return (
    <section className={styles.contactUs}>
      <Container>
        <h2>Contact Us</h2>
        <p>Get in touch with our team.</p>
      </Container>
    </section>
  );
}
