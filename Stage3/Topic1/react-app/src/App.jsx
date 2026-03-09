
// import { Button } from './components/Button'
import { Header } from './components/Header'
import { AboutUs } from './components/AboutUs'
import { Products } from './components/Products'
import { ContactUs } from './components/ContactUs'
import { Footer } from './components/Footer'
import { Container } from './components/Container'

export function App() {

  return (
    <>
      <Header />
      <Container>
        <AboutUs />
        <Products />
        <ContactUs />
        <Products />
      </Container>
      <Footer />
    </>

  )
}

// export default App
