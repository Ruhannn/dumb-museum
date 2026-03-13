import { useLoaderData } from "react-router";
import Hero from "./Components/Hero";
import Products from "./Components/Products";
import Newsletter from "./Components/Newsletter";

function Home() {
  const products = useLoaderData();

  return (
    <main className="space-y-10 px-6 my-10">
      <Hero />
      <Products products={products} />
      <Newsletter/>
    </main>
  );
}

export default Home;
