import { useSelector } from "react-redux";
import styles from "../../styles/styles";
import ProductCard from "../products/ProductCard";

function Products() {
  const { allProducts, isLoading } = useSelector((state) => state.product);


if(isLoading){
  return (
    <>
    <h1>LOADING...</h1>
    </>
  )
}

  if (allProducts?.length === 0) {
    return (
      <div className="w-full flex justify-center py-20 text-xl">
        No products found
      </div>
    );
  }

  return (
    <div className={`${styles.section} pb-20 flex flex-col`}>
      <div className=" flex flex-row justify-center flex-wrap gap-x-5 800px:grid 800px:grid-cols-3 1300px:grid-cols-4 gap-5">
        {allProducts &&
          allProducts.map((product) => <ProductCard product={product} />)}
      </div>
    </div>
  );
}

export default Products;
