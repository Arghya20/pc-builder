import Link from "next/link";

const FeaturedCategory = ({ categoryName }) => {
  return (
    <div className="border p-4 mb-4">
      <h2 className="text-xl font-semibold">{categoryName}</h2>
    </div>
  );
};

export default FeaturedCategory;
