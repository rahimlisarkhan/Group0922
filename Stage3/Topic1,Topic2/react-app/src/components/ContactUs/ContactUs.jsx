import Container from 'react-bootstrap/Container';
import styles from './ContactUs.module.css';

export function ContactUs({ phone }) {
  return (
    <section className={styles.contactUs}>
      <Container>
        <h2>Contact Us</h2>
        <p>Get in touch with our team.</p>
        {phone ? <p>Phone: {phone}</p> : <p>Phone number not available.</p>}
      </Container>
    </section>
  );
}
