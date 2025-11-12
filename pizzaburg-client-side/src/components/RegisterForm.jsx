import React, { use, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";

const RegisterForm = () => {
  const {createUser} = use(AuthContext)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    branch: "",
  });

  const branches = ["Dhanmondi", "Uttara", "Mirpur", "Chittagong","Khulna", "Sylhet", "Rajshahi"];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

const handleRegister = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.emai.value;
    const password = form.password.value;
    const branch = form.branch.value;
    console.log("Email:", email + " Password:", password + " Branch:", branch);
    
    createUser(email, password)
     .then(result => {
        console.log("User created successfully:", result.user);
      })
     .catch(error => {
        console.error("Error creating user:", error);
      });
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-orange-100 to-yellow-200 flex justify-center items-center px-4">
      <div className="bg-white/30 backdrop-blur-md p-10 rounded-2xl shadow-xl w-full max-w-md border border-orange-200">
        <h2 className="text-3xl font-bold text-center text-orange-600 mb-6">🍕 Join PizzaBurg 🍔</h2>

        <form onSubmit={handleRegister} className="space-y-4">
          <div className="relative">
            <input
              type="text"
              name="name"
              required
              onChange={handleChange}
              className="peer w-full p-3 bg-transparent border-b-2 border-orange-400 outline-none placeholder-transparent focus:border-orange-600"
              placeholder="Full Name"
            />
            <label className="absolute left-3 top-2 text-orange-600 text-sm transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-orange-600">
              Full Name
            </label>
          </div>

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

          <div className="relative">
            <input
              type="password"
              name="password"
              required
              onChange={handleChange}
              className="peer w-full p-3 bg-transparent border-b-2 border-orange-400 outline-none placeholder-transparent focus:border-orange-600"
              placeholder="Password"
            />
            <label className="absolute left-3 top-2 text-orange-600 text-sm transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-orange-600">
              Password
            </label>
          </div>

          <div>
            <label className="block text-orange-600 font-medium mb-1">Select Branch</label>
            <select
              name="branch"
              required
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-white border border-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
            >
              <option value="">Choose Branch</option>
              {branches.map((branch) => (
                <option key={branch} value={branch}>
                  {branch}
                </option>
              ))}
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-xl shadow-md transition duration-300"
          >
            Register Now
          </button>
        </form>

        <p className="text-center text-sm text-gray-700 mt-4">
          Already a member? <a href="/signin" className="text-orange-600 font-semibold hover:underline">Login</a>
        </p>
      </div>
    </div>
  );
};

export default RegisterForm;
