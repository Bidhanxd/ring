import ProductItem from "./ProductItem";

export default function Products() {
  return (
    <>
      <section id="latest_products" className="h-screen pt-20">
        <div className="flex justify-center pt-20 pb-3  ">
          <h1 className="text-2xl font-bold ">Latest Products</h1>
        </div>
        <div className="flex justify-center flex-wrap mt-4">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2  lg:grid-cols-3">
            <ProductItem src="/assets/logo.svg" alt="" href="/" />
            <ProductItem src="/assets/rings-home.jpg" alt="" href="/" />
            <ProductItem src="/assets/logo.svg" alt="" href="/" />
          </div>
        </div>
      </section>
    </>
  );
}
