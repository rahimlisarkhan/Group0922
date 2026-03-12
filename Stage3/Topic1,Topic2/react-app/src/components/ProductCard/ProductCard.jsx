import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import styles from './ProductCard.module.css';
import { TextHelper } from '../../helpers/Text.helper';

export function ProductCard(props) {

  const { title, desc, price, active } = props;

  const shortDesc = TextHelper.truncate(desc, 60);

  return (
    <Card className={`${styles.card} ${active ? '' : styles.inactive}`}>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{shortDesc}</Card.Text>
        <p className={styles.price}>{price}AZN</p>
        <Button variant="warning" disabled={!active}>
          {active ? 'More' : 'Unavailable'}
        </Button>
      </Card.Body>
    </Card>
  );
}
