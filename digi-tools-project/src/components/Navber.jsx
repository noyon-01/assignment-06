import logo from "../assets/DigiTools.png";
import { LuShoppingCart } from "react-icons/lu";

export default function Navber({ addProduct }) {
  return (
    <div className="navbar bg-base-100 shadow-sm max-w-7xl mx-auto px-8">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
        </div>
        <img src={logo} alt="" />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li className="font-semibold">
            <a>Products</a>
          </li>
          <li className="font-semibold">
            <a>Features</a>
          </li>
          <li className="font-semibold">
            <a>Pricing</a>
          </li>
          <li className="font-semibold">
            <a>Testimonials</a>
          </li>
          <li className="font-semibold">
            <a>FAQ</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <span className="mr-4 flex relative">
          <LuShoppingCart />
          <div className="badge badge-primary badge-xs absolute left-2.5 bottom-2.5">{addProduct.length}</div>
        </span>
        <a className="mr-4" href="">
          Login
        </a>
        <a className="btn">Get Started</a>
      </div>
    </div>
  );
}
