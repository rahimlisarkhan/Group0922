
// import { Button } from './components/Button'
import { Header } from './components/Header'
import { AboutUs } from './components/AboutUs'
import { Products } from './components/Products'
import { ContactUs } from './components/ContactUs'
import { Footer } from './components/Footer'
import { Container } from './components/Container'
import { ParentComponent } from './components/Example/ParentComponent'
import { products } from './constants/product'


export function App() {

  const a = [1, 2, 3, 4, 5];
  const b = 12
  const c = 'Hello World'
  const d = { name: 'John', age: 30 }
  const e = false

  return (
    <>
      <Header />
      <Container>
        <ParentComponent
          list={a}
          age={b}
          fullname={c}
          info={d}
          isMarried={e}
        >
          <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod officiis placeat distinctio vero voluptas consequuntur et necessitatibus earum exercitationem! Aspernatur ducimus labore corporis libero aliquam ipsum eum quidem. Dolor, quaerat.
          </p>
             <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod officiis placeat distinctio vero voluptas consequuntur et necessitatibus earum exercitationem! Aspernatur ducimus labore corporis libero aliquam ipsum eum quidem. Dolor, quaerat.
          </p>   <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod officiis placeat distinctio vero voluptas consequuntur et necessitatibus earum exercitationem! Aspernatur ducimus labore corporis libero aliquam ipsum eum quidem. Dolor, quaerat.
          </p>   <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod officiis placeat distinctio vero voluptas consequuntur et necessitatibus earum exercitationem! Aspernatur ducimus labore corporis libero aliquam ipsum eum quidem. Dolor, quaerat.
          </p>   <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod officiis placeat distinctio vero voluptas consequuntur et necessitatibus earum exercitationem! Aspernatur ducimus labore corporis libero aliquam ipsum eum quidem. Dolor, quaerat.
          </p>
        </ParentComponent>
        <AboutUs  />
        <Products data={products} />
        <ContactUs phone="123-456-7890" />
        <Products info="Lorem ipsum dolor sit amet, consectetur adipiscing elit." data={products} />
      </Container>
      <Footer />
    </>

  )
}

// export default App
