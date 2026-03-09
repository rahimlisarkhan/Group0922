import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { ProductCard } from '../ProductCard';
import styles from './Products.module.css';

const products = [
  { id: 1, title: 'Product One',   desc: 'A great product for everyday use. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',   price: 29.99 },
  { id: 2, title: 'Product Two',   desc: 'High quality and durable material. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',   price: 49.99 },
  { id: 3, title: 'Product Three', desc: 'Best value for money on the market. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',  price: 19.99 },
];

export function Products() {

  const content = products.map((product) => (
            <Col key={product.id} xs={12} sm={6} lg={4}>
              <ProductCard
                title={product.title}
                desc={product.desc}
                price={product.price}
              />
            </Col>
          ))

  return (
    <section className={styles.products}>
      <Container>
        <h2>Products</h2>
        <Row className="g-4 mt-2">
          {content}
        </Row>
      </Container>
    </section>
  );
}
