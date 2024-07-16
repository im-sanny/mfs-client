import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div className="h-screen flex items-center justify-center">
        <div className="w-full max-w-sm mx-auto overflow-hidden rounded-lg  ">
          <div className="px-6 py-4">
            <h3 className="mt-3 text-3xl font-medium text-center text-black ">
              Welcome Back
            </h3>

            <p className="mt-1 text-lg text-center text-gray-900 dark:text-gray-400">
              Login
            </p>

            <form>
              <div className="w-full mt-4">
                <input
                  className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                  type="email"
                  placeholder="Email / Mobile"
                  aria-label="Email / Mobile"
                />
              </div>

              <div className="w-full mt-4">
                <input
                  className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg  dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                  type="number"
                  placeholder="Pin"
                  aria-label="Pin"
                />
              </div>

              <div className="flex items-center justify-center mt-4">
                <button className="px-6 w-full py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                  Sign In
                </button>
              </div>
            </form>
          </div>

          <div className="flex items-center justify-center py-4 text-center ">
            <span className="text-sm text-black ">
              Don&apos;t have an account?{" "}
            </span>

            <a
              href="#"
              className="mx-2 text-sm font-bold text-blue-500 dark:text-blue-400 hover:underline"
            >
              <Link to={"/registration"}>Register</Link>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
