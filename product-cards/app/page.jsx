import ProductCardBasic from "../components/producr-card-basic";
// import ProductCard from "../components/Product-card";
import ProductCardBrutalist from "../components/product-card-brutalist";
import ProductCardCompact from "../components/product-card-compact";
import ProductCardGlassmorphism from "../components/product-card-glassmorphism";
import ProductCardLuxury from "../components/product-card-luxury";
import ProductCardMinimal from "../components/product-card-minimal";
import ProductCardModern from "../components/product-card-modern";
import ProductCardNeon from "../components/product-card-neon";

async function getProductsData() {
  const res = await fetch("https://dummyjson.com/products");
  if (!res.ok) {
    throw new Error("Failed to fetch");
  }
  return res.json();
}



export default async function Home() {
  const data = await getProductsData();
  const products = data.products;  

  return (
    <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 my-8 sm:my-10">
      <div
        className="
        grid 
        grid-cols-1
        sm:grid-cols-2
        md:grid-cols-3
        lg:grid-cols-3
        xl:grid-cols-3
        gap-6 sm:gap-8 md:gap-10 lg:gap-12
      ">
        <ProductCardBrutalist product={products[0]} />
        <ProductCardGlassmorphism product={products[0]} />
        <ProductCardLuxury product={products[0]} />
        <ProductCardMinimal product={products[0]} />
        <ProductCardModern product={products[0]} />
        <ProductCardNeon product={products[0]} />
        <ProductCardBasic product={products[0]} />
        {/* <ProductCard product={products[0]} /> */}
      </div>
      <div className="mt-12">
        <ProductCardCompact product={products[0]} />
      </div>
    </div>
  );
}











