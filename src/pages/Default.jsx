import { Link } from "react-router-dom";

const Default = () => {
  return (
    <>
      <div
        className="h-[100vh] grid place-items-center"
        style={{
          backgroundImage: "linear-gradient(45deg, #93a5cf 0%, #e4efe9 100%)",
        }}
      >
        <div className="text-center">
          <h1 className="text-7xl font-bold mb-4 bg-gradient-to-r from-green-500 via-teal-500 to-yellow-300 text-transparent bg-clip-text animate-gradient">
            Welcome to Nikash
          </h1>
          <p className="text-2xl">Your Trusted Mobile Finance Service</p>
          <div className="flex justify-center gap-4 mt-5">
            <button className="btn rounded-3xl px-4 hover:bg-teal-50 font-semibold text-lg bg-slate-400 p-2">
              <Link to={"/login"}>Login</Link>
            </button>
            <button className="btn rounded-3xl px-4 hover:bg-teal-50 font-semibold text-lg bg-slate-400 p-2">
              Registration
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Default;
