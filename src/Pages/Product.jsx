import { useContext } from "react";
import { ShopContext } from '../Context/ShopContext';
import { useParams } from "react-router-dom";
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay";
import RelatedProducts from "../Components/RelatedProducts/RelatedProducts";

const Product = () => {
  const { all_product} = useContext(ShopContext);
  const { productId } = useParams();
  const product = all_product.find((e) => e.id === Number(productId));
  return (
    <div>
      <ProductDisplay product={product} />
      {/* Pass the product's category to RelatedProducts */}
      <RelatedProducts category={product.category} />
    </div>
  );
}

export default Product;
