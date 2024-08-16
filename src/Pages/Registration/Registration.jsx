import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash, FaGithub, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Registration = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },reset
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };
  


  return (
    <div className="flex items-center justify-center min-h-screen  bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-2/6 py-14">
        <h2 className="text-2xl font-semibold text-center pb-4">
          Create your account
        </h2>
        <p className="text-center text-gray-500 pb-6">
          Welcome! Please fill the details to get started.
        </p>


        <div className="grid grid-cols-2 gap-5 pb-6">
            <div className="btn flex items-center gap-2 text-base">
                <FaGithub/>
                <p>GitHub</p>
            </div>
            
            <div className="btn flex items-center gap-2 text-base">
                <FaGoogle/>
                <p>Google</p>
            </div>
            
        </div>

        <div className="text-center text-gray-400 justify-center mb-8 flex items-center gap-5">
            
            <p>Or</p>
            
        </div>

        {/* Form starts here */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control mb-3">
            <label className="label">
              <span>Email address</span>
            </label>
            <input
              type="email"
              placeholder="Email address"
              className={`input input-bordered w-full ${errors.email ? 'border-red-500' : ''}`}
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email address",
                },
              })}
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
          </div>

              <div className="form-control mb-6 relative">
                                    <label className="label">
                                             <span>Password</span>
                                    </label>
                                      <input
                                          type='password'
                                          placeholder="Type Your Password"
                                          className={`input mr-10 input-bordered w-full ${errors.password ? 'border-red-500' : ''}`}
                                          {...register("password", {
                                            required: "Password is required",
                                            minLength: {
                                              value: 6,
                                              message: "Password must be at least 6 characters",
                                            },
                                          })}
                                      />
                                       
                                       {errors.password && (
                                                <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
                                        )}
                                     
                                  </div>

          <button className="btn btn-primary text-base text-white w-full mb-4" type="submit">
            Sign Up
          </button>
        </form>
        {/* Form ends here */}

        <div className="text-center">
          <p className="text-gray-500">
            Already have an account?{" "}
            <Link to="/login" className="text-primary font-bold hover:underline">
              Sign in
            </Link>
          </p>
        </div>

      </div>
    </div>
  );
};

export default Registration;
