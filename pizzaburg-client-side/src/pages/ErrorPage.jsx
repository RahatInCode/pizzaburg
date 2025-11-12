
import React from "react";
import Lottie from "lottie-react";
import errorAnimation from "../assets/lotties/error404.json"; // Get from lottiefiles.com

const ErrorPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center text-center px-4">
      <div className="w-full max-w-md">
        <Lottie animationData={errorAnimation} loop={true} />
      </div>
      <h1 className="text-6xl font-bold text-orange-600 mt-4">404</h1>
      <p className="text-xl mt-2 text-gray-700">Oops! Page not found.</p>
      <p className="text-md text-gray-500 mb-6">
        The page you are looking for doesn't exist or has been moved.
      </p>
      <a href="/" className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition duration-300">
        Go Back Home
      </a>
    </div>
  );
};

export default ErrorPage;
