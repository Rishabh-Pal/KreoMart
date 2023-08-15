
'use client';
import ProductList from "@/components/Product/ProductList"

const Products = () => {
  return (
    <ProductList />
  );
};

// export async function getServerSideProps() {
//   try {
//     const products = await fetchProducts();
//     return {
//       props: {
//         products,
//       },
//     };
//   } catch (error) {
//     console.error('Error fetching products:', error);
//     return {
//       props: {
//         products: [],
//       },
//     };
//   }
// }

export default Products