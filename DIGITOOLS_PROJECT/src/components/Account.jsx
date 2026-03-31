import account from "../assets/user.png";
import packages from "../assets/package.png";
import rocket from "../assets/rocket.png";

export default function Account() {
  return (
    <div className="max-w-7xl mx-auto pt-16 bg-[#F9FAFC] mt-16 flex flex-col justify-center items-center">
      <h1 className="text-5xl font-bold text-center mb-4">
        Get Started in 3 Steps
      </h1>
      <p className="text-[#627382] text-center">
        Start using premium digital tools in minutes, not hours.
      </p>
      <div className="grid grid-cols-3 gap-8 mt-12 pb-20">
        <div className="card bg-base-100 w-90 shadow-sm relative text-center">
          <span className="text-right bg-gradient-to-r from-[#4f39f6] to-[#9514fa] text-white w-8 h-8 absolute right-5 top-5 rounded-full flex justify-center items-center">
            01
          </span>
          <figure>
            <img
              className="bg-[#843bfa1f] p-4 rounded-full mt-18"
              src={account}
            />
          </figure>
          <div className="card-body">
            <h2 className="text-2xl font-bold">Create Account</h2>
            <p className="text-[#627382]">
              Sign up for free in seconds. No credit card <br /> required to get
              started.
            </p>
          </div>
        </div>

        <div className="card bg-base-100 w-90 shadow-sm relative text-center">
          <span className="text-right bg-gradient-to-r from-[#4f39f6] to-[#9514fa] text-white w-8 h-8 absolute right-5 top-5 rounded-full flex justify-center items-center">
            02
          </span>
          <figure>
            <img
              className="bg-[#843bfa1f] p-4 rounded-full mt-18"
              src={packages}
            />
          </figure>
          <div className="card-body">
            <h2 className="text-2xl font-bold">Choose Products</h2>
            <p className="text-[#627382]">
              Browse our catalog and select the tools <br /> that fit your
              needs.
            </p>
          </div>
        </div>

        <div className="card bg-base-100 w-90 shadow-sm relative text-center">
          <span className="text-right bg-gradient-to-r from-[#4f39f6] to-[#9514fa] text-white w-8 h-8 absolute right-5 top-5 rounded-full flex justify-center items-center">
            03
          </span>
          <figure>
            <img
              className="bg-[#843bfa1f] p-4 rounded-full mt-18"
              src={rocket}
            />
          </figure>
          <div className="card-body">
            <h2 className="text-2xl font-bold">Start Creating</h2>
            <p className="text-[#627382]">
              Download and start using your premium <br /> tools immediately.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
