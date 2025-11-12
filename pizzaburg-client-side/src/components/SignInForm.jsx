import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import Lottie from "lottie-react";
import googleIcon from "../assets/lotties/google-login.json";

const SignInForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [loading] = useState(false);

  const togglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  

  // Dummy Google login handler
  const handleGoogleLogin = () => {
    // TODO: Implement Google login logic here
    console.log("Google login clicked");
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-yellow-100 to-orange-200 flex justify-center items-center px-4">
      <div className="bg-white/30 backdrop-blur-md p-10 rounded-2xl shadow-xl w-full max-w-md border border-orange-200 relative">
        <ToastContainer />
        {loading && (
          <div className="absolute inset-0 bg-white/60 flex items-center justify-center rounded-2xl z-10">
            <div className="w-12 h-12 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}

        <h2 className="text-3xl font-bold text-center text-orange-600 mb-6">
          👋 Welcome Back, Foodie!
        </h2>

        <form className="space-y-5 relative z-0">
          {/* Email */}
          <div className="relative">
            <input
              type="email"
              name="email"
              required
              onChange={handleChange}
              className="peer w-full p-3 bg-transparent border-b-2 border-orange-400 outline-none placeholder-transparent focus:border-orange-600"
              placeholder="Email"
            />
            <label className="absolute left-3 top-2 text-orange-600 text-sm transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-orange-600">
              Email
            </label>
          </div>

          {/* Password */}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              required
              onChange={handleChange}
              className="peer w-full p-3 bg-transparent border-b-2 border-orange-400 outline-none placeholder-transparent focus:border-orange-600 pr-10"
              placeholder="Password"
            />
            <label className="absolute left-3 top-2 text-orange-600 text-sm transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-orange-600">
              Password
            </label>

            <div
              className="absolute right-3 top-3 cursor-pointer text-xl text-orange-600"
              onClick={togglePassword}
            >
              {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
            </div>
          </div>

          <div className="text-right text-sm">
            <a
              href="/forgot-password"
              className="text-orange-600 hover:underline"
            >
              Forgot Password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-xl shadow-md transition duration-300"
          >
            {loading ? "Please wait..." : "Sign In"}
          </button>
        </form>

        <div className="flex items-center gap-4 mt-6 justify-center relative z-0">
          <hr className="border-orange-300 w-1/4" />
          <span className="text-gray-700 text-sm">or</span>
          <hr className="border-orange-300 w-1/4" />
        </div>

        <div
          className="mt-4 cursor-pointer flex items-center justify-center gap-2 border border-orange-400 py-2 rounded-xl hover:bg-orange-100 transition"
          onClick={handleGoogleLogin}
        >
          <div className="w-36 h-20 flex items-center justify-center">
            <Lottie animationData={googleIcon} loop={true} />
          </div>
          <span className="font-medium text-orange-700">Continue with Google</span>
        </div>

        <p className="text-center text-sm text-gray-700 mt-4">
          New here?{" "}
          <a
            href="/register"
            className="text-orange-600 font-semibold hover:underline"
          >
            Create an account
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignInForm;

