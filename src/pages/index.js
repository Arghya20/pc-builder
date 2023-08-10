import Navbar from "../components/Navbar";
import FeaturedProduct from "../components/FeaturedProduct";
import FeaturedCategory from "../components/FeaturedCategory";
import { featuredProducts, featuredCategories } from "../data/products";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto py-8">
        <h1 className="text-2xl font-semibold mb-4">Featured Products</h1>
        <div className="grid grid-cols-2 gap-4"></div>
        <h1 className="text-2xl font-semibold mb-4 mt-8">
          Featured Categories
        </h1>
        <div className="grid grid-cols-2 gap-4"></div>
      </div>
    </div>
  );
};

export default HomePage;
