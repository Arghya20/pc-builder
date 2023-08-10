import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <a className="text-white text-xl font-bold">PC Builder</a>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
