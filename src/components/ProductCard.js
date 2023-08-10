import Link from "next/link";

const ProductCard = ({ product }) => {
//   const { id, image, productName, category, price, status, rating } = product;

  return (
    <div className="border p-4 mb-4">
      {/* <img src={image} alt={productName} className="w-full h-32 object-contain" /> */}
      <h2 className="text-xl font-semibold">{productName}</h2>
      <p>Category: {category}</p>
      <p>Price: {price}</p>
      <p>Status: {status}</p>
      <p>Rating: {rating} Stars</p>
      {/* Add a link to the product detail page */}
    </div>
  );
};

export default ProductCard;
