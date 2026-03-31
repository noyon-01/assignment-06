import circle from "../../assets/circle.png";
import banner from "../../assets/banner.png";
import play from "../../assets/play.png";

export default function Hero() {
  return (
    <div className="max-w-7xl mx-auto md:py-24">
      <div className="hero-content flex justify-between flex-col-reverse md:flex-row-reverse">
        <img
          src={banner}
          className="max-w-sm rounded-lg shadow-2xl w-[350px] h-[450px] md:w-[700px] md:h-[500px]"
        />
        <div className="text-center md:text-left">
          <div className="badge bg-[#E1E7FF] rounded-3xl p-4 mb-4">
            <p className="flex items-center gap-2 font-medium text-[#9514FA]">
              <img className="h-5 w-5" src={circle} />
              New: AI-Powered Tools Available
            </p>
          </div>

          <div>
            <h1 className="text-4xl text-center md:text-left md:text-7xl font-bold md:leading-[80px]">
              Supercharge Your <br /> Digital Workflow
            </h1>
            <p className="py-6 text-[#627382] text-[18px]">
              Access premium AI tools, design assets, templates, and
              productivity <br />
              software—all in one place. Start creating faster today. <br />{" "}
              Explore Products
            </p>
          </div>
          <div className="flex justify-center md:justify-start gap-3 ">
            <button className="btn rounded-3xl bg-gradient-to-r from-[#4f39f6] to-[#9514fa] text-white">
              Explore Products
            </button>
            <button className="btn rounded-3xl text-[#9514FA]">
              <img src={play} />
              Watch Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
