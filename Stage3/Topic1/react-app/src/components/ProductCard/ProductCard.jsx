import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import styles from './ProductCard.module.css';
import { TextHelper } from '../../helpers/Text.helper';

export function ProductCard({ title, desc, price }) {


  const shortDesc = TextHelper.truncate(desc, 60);

  return (
    <Card className={styles.card}>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{shortDesc}</Card.Text>
        <p className={styles.price}>${price}</p>
        <Button variant="warning">More</Button>
      </Card.Body>
    </Card>
  );
}
