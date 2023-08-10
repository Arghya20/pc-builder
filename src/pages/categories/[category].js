import Navbar from "../../components/Navbar";
import ProductCard from "../../components/ProductCard";
import { getCategoryProducts } from "../../data/products";

const CategoryPage = ({ categoryName, products }) => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto py-8">
        <h1 className="text-2xl font-semibold mb-4">
          Products in {categoryName}
        </h1>
        <div className="grid grid-cols-3 gap-4"></div>
      </div>
    </div>
  );
};

export default CategoryPage;
