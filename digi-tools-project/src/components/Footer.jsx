import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <div className="max-w-7xl mx-auto">
      <footer className="footer sm:footer-horizontal bg-black text-white p-25">
        <p>
          <h1 className="text-5xl font-bold mb-4">DigiTools</h1>
          <p>
            Premium digital tools for creators, <br /> professionals, and
            businesses. Work smarter <br /> with our suite of powerful tools.
          </p>
        </p>
        <nav>
          <h6 className="footer-title">Product</h6>
          <a className="link link-hover">Features</a>
          <a className="link link-hover">Pricing</a>
          <a className="link link-hover">Templates</a>
          <a className="link link-hover">Integrations</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About</a>
          <a className="link link-hover">Blog</a>
          <a className="link link-hover">Careers</a>
          <a className="link link-hover">Press</a>
        </nav>
        <nav>
          <h6 className="footer-title">Resources</h6>
          <a className="link link-hover">Documentation</a>
          <a className="link link-hover">Help Center</a>
          <a className="link link-hover">Community</a>
          <a className="link link-hover">Contact</a>
        </nav>
        <nav>
          <h6 className="footer-title">Social Links</h6>
          <div className="flex justify-center items-center gap-3">
            <a className="text-xl text-black p-1.5 rounded-full bg-white">
              <FaInstagram />
            </a>
            <a className="text-xl text-black p-1.5 rounded-full bg-white">
              <FaFacebookSquare />
            </a>
            <a className="text-xl text-black p-1.5 rounded-full bg-white">
              <FaSquareXTwitter />
            </a>
          </div>
        </nav>
      </footer>

      <div className="w-full h-[1px] bg-gray-700"></div>

      <footer className="footer flex justify-between items-center bg-black text-white p-6 max-w-7xl px-24 mx-auto">
        <p>© {new Date().getFullYear()} 2026 Digitools. All rights reserved.</p>
        <div className="flex justify-center items-center gap-5">
          <p className="text-[#627382]">Privacy Policy</p>
          <p className="text-[#627382]">Terms of Service</p>
          <p className="text-[#627382]">Cookies</p>
        </div>
      </footer>
    </div>
  );
}
