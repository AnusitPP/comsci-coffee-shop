import { Link, useLocation } from "react-router";

function Header() {
  const location = useLocation();

  return (
    <nav className="bg-black text-white p-4">
      <div className="flex flex-row space-x-2 justify-center text-[26px] font-bold">
        <img src="/public/images/logo.png" alt="logo" className="flex flex-row h-12 w-12 rounded-3xl border-radius-50%"/>
        <h1>ComSci Coffee Shop</h1>
      </div>
      <ul className="text-[18px] flex flex-row justify-center space-x-5 mt-4">
        <li>
          <Link 
            to="/" 
            className={`hover:text-gray-500 px-2 py-1 ${ 
              location.pathname === "/" ? "border-b-2 border-white font-bold" : ""}`}>
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className={`hover:text-gray-500 px-2 py-1 ${
              location.pathname === "/about"? "border-b-2 border-white font-bold": ""}`}>
            About Us
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
