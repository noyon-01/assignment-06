import logo from "../../assets/DigiTools.png";
import { LuShoppingCart } from "react-icons/lu";

export default function Navber({ addProduct }) {
  return (
    <>
      <div className="flex justify-between items-center bg-white shadow-sm max-w-7xl mx-auto px-8 py-4">

        <div>
          <img src={logo} alt="" />
        </div>

        <div className="hidden lg:flex">
          <ul className="flex justify-center items-center gap-4 menu menu-horizontal px-1">
            <li className="font-semibold cursor-pointer">
              <a>Products</a>
            </li>
            <li className="font-semibold cursor-pointer">
              <a>Features</a>
            </li>
            <li className="font-semibold cursor-pointer">
              <a>Pricing</a>
            </li>
            <li className="font-semibold cursor-pointer">
              <a>Testimonials</a>
            </li>
            <li className="font-semibold cursor-pointer">
              <a>FAQ</a>
            </li>
          </ul>
        </div>

        <div className="flex justify-center items-center">
          <div className="flex justify-center items-center gap-4">
            <span className="mr-6 flex relative cursor-pointer">
              <LuShoppingCart />
              <div className="badge badge-primary badge-xs absolute left-2.5 bottom-2.5">
                {addProduct.length}
              </div>
            </span>
            <a className="mr-6 font-semibold cursor-pointer hidden md:block">Login</a>
          </div>
          <a className="btn rounded-3xl bg-gradient-to-r from-[#4f39f6] to-[#9514fa] text-white">
            Get Started
          </a>
        </div>

      </div>
    </>
  );
}
