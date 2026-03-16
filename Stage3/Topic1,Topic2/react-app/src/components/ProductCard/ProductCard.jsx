import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import styles from './ProductCard.module.css';
import { TextHelper } from '../../helpers/Text.helper';
import PropTypes from 'prop-types';
import BellIcon from '../../assets/BellIcon.svg?react';

ProductCard.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  active: PropTypes.bool
}

export function ProductCard(props) {

  const { title, desc, price, active } = props;

  const shortDesc = TextHelper.truncate(desc, 60);

  return (
    <Card className={`${styles.card} ${active ? '' : styles.inactive}`}>
      <Card.Body>
        {title && <Card.Title>{title}</Card.Title>}
        <Card.Text>{shortDesc}</Card.Text>
        <p className={styles.price}>{price}AZN</p>
        {/* <img src={BellIcon} alt="Bell Icon" /> */}
        <BellIcon className={styles.bellIcon} />
        <Button variant="warning" disabled={!active}>
          {active ? 'More' : 'Unavailable'}
        </Button>
      </Card.Body>
    </Card>
  );
}
