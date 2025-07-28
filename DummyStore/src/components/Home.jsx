import { Link } from "react-router-dom";
import { BsCart4 } from "react-icons/bs";

function Home() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4">
      <div className="flex gap-3 text-4xl md:text-5xl font-bold mb-4 text-blue-600">
        <h1>Welcome to <span  className="text-red-400">D</span>ummy<span className="text-red-400">S</span>tore</h1>
        <BsCart4 />
      </div>
      <p className="text-gray-600 text-lg md:text-xl mb-8">
        Discover the best products at unbeatable prices.
      </p>
      <Link to="/products">
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg transition-all duration-200">
          Start Shopping
        </button>
      </Link>
    </div>
  );
}

export default Home;
