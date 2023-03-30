import Hero from "@/components/home/Hero";
import Navbar from "@/components/header/Navbar";
import Shop from "@/components/shop/Shop";
import Products from "@/components/products/Products";


export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Shop />
      <Products />
    </>
  );
}
