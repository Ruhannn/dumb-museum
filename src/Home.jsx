import { useLoaderData } from "react-router";
import Hero from "./Components/Hero";
import Products from "./Components/Products";

function Home() {
  const products = useLoaderData();
  console.log(products);
  return (
    <main className="space-y-10 px-6">
      <Hero />
      <Products products={products} />
    </main>
  );
}

export default Home;
