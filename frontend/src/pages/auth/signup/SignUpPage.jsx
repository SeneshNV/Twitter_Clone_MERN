import React, { useState } from "react";
import XSvg from "../../../components/svgs/x";
import { FaInfo, FaUser } from "react-icons/fa6";
import { FaUnlockAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { Link } from "react-router-dom";

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    fullName: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const isError = false;

  return (
    <div className="max-w-screen-xl mx-auto flex h-screen px-10">
      <div className="flex-1 hidden lg:flex items-center justify-center">
        <XSvg className="lg:w-2/3 fill-white" />
      </div>
      <div className="flex-1 flex flex-col items-center justify-center">
        <form
          className="lg:2/3 mx-auto md:mx-20 flex gap-4 flex-col"
          onSubmit={handleSubmit}
        >
          <XSvg className="w-24 lg:hidden fill-white" />
          <h1 className="text-4xl font-extrabold text-white">Join Today.</h1>
          <div className="flex flex-wrap gap-4 ">
            <label className="input input-bordered flex items-center gap-2 w-full">
              <MdOutlineEmail />
              <input
                type="email"
                className="grow"
                placeholder="Email"
                name="email"
                onChange={handleInputChange}
                value={formData.email}
              />
            </label>
            <label className="input input-bordered flex items-center gap-2 w-full">
              <FaUser />
              <input
                type="text"
                className="grow"
                placeholder="User Name"
                name="username"
                onChange={handleInputChange}
                value={formData.username}
              />
            </label>
            <label className="input input-bordered flex items-center gap-2 w-full">
              <FaInfo />
              <input
                type="text"
                className="grow"
                placeholder="Full Name"
                name="fullName"
                onChange={handleInputChange}
                value={formData.fullName}
              />
            </label>
            <label className="input input-bordered flex items-center gap-2 w-full">
              <FaUnlockAlt />
              <input
                type="password"
                className="grow"
                placeholder="Password"
                name="password"
                onChange={handleInputChange}
                value={formData.password}
              />
            </label>
            <button type="submit" className="btn btn-outline btn-info w-full">
              Sign up
            </button>
            {isError && <p className="text-red-500">Something went wrong</p>}
          </div>
        </form>
        <div className="mx-auto md:mx-20 mt-8">
          <p className="text-white text-lg text-center">
            Already have an account?
          </p>
          <Link to="/login">
            <button className="btn btn-outline btn-neutral w-full mt-2">
              Sign in
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
