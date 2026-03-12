import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { ProductCard } from '../ProductCard';
import styles from './Products.module.css';


export function Products(props) {

  const { data, info } = props;

  const content = data.map((product) => (
            <Col key={product.id} xs={12} sm={6} lg={4}>
              <ProductCard
                title={product.title}
                desc={product.desc}
                price={product.price}
                active={product.is_active}
              />
            </Col>
          ))

  return (
    <section className={styles.products}>
      <Container>
        <h2>Products</h2>
        {info && <p className="mt-3">{info}</p>}
        <Row className="g-4 mt-2">
          {content}
        </Row>
      </Container>
    </section>
  );
}
