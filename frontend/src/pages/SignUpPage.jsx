const SignUpPage = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-gradient-to-r from-purple-300 to-purple-400 p-4">
      <div className="flex flex-col md:flex-row w-full max-w-5xl bg-white rounded-2xl shadow-lg overflow-hidden">
        
        {/* Left Section */}
        <div className="md:w-1/2 w-full bg-gradient-to-b from-purple-500 to-purple-700 p-10 text-white relative flex flex-col justify-center items-center">
          {/* Decorative shapes */}
          <div className="absolute top-5 left-5 w-16 h-16 border-2 border-white rounded-full opacity-20 hidden md:block"></div>
          <div className="absolute top-10 right-10 w-10 h-10 border-2 border-white rounded-full opacity-20 hidden md:block"></div>
          
          <h1 className="text-3xl font-bold mb-4 text-center">Welcome here!</h1>
          <p className="text-lg opacity-90 text-center">
            You can sign up to access the most amazing clothes in the world.
          </p>
        </div>

        {/* Right Section */}
        <div className="md:w-1/2 w-full p-10 flex flex-col justify-center">
          <h2 className="text-3xl font-semibold text-gray-700 mb-6 text-center md:text-left">Sign Up</h2>
          
          <input
            type="text"
            placeholder="Username"
            className="border border-gray-300 rounded-full px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
           <input
            type="email"
            placeholder="Email"
            className="border border-gray-300 rounded-full px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          <input
            type="password"
            placeholder="Password"
            className="border border-gray-300 rounded-full px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />

          <button className="bg-gradient-to-r from-purple-400 to-purple-600 text-white rounded-full py-2 font-semibold hover:opacity-90 transition">
            Sign Up
          </button>

          <p className="text-sm mt-6 text-center text-gray-500">
            Exisiting User?{" "}
            <a href="/login" className="text-purple-500 hover:underline">
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
