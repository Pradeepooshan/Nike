import Nav from "./components/Nav"
import {  Footer, Hero, PopularProducts, SpecialOffer, Subscribe } from "./sections"

const App = () => (
  <main className="relative">
    <Nav />

    <section className="xl:padding-l wide:paddind-r padding-b">
      <Hero />
    </section>

    <section className="padding">
      <PopularProducts />
    </section>

    <section className="padding-x py-10 ">
      <SpecialOffer />
    </section>

    <section className="padding-x sm:py-32 py-16 w-full">
      <Subscribe />
    </section>

    <section className="bg-black padding-x padding-t pb-8">
      <Footer />
    </section>

  </main>
)

export default App