import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash, FaGithub, FaGoogle } from "react-icons/fa";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
   
  };
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-semibold text-center mb-4">
          Create your account
        </h2>
        <p className="text-center text-gray-500 pb-6">
          Welcome! Please fill in the details to get started.
        </p>

        <div className="grid grid-cols-2 gap-5 pb-6">
            <div className="btn flex items-center gap-2">
                <FaGithub/>GitHub
            </div>
            
            <div className="btn flex items-center gap-2">
                <FaGoogle/>Google
            </div>
            
        </div>

        <div className="text-center text-gray-400 mb-4">or</div>

        {/* Form starts here */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text">Email address</span>
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

          {/* <div className="form-control mb-6">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Password"
              className={`input input-bordered w-full ${errors.password ? 'border-red-500' : ''}`}
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
          </div> */}
              <div className="relative">
                                      <input
                                          type={showPassword ? 'text' : 'password'}
                                          placeholder="Type Your Password"
                                          className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring focus:ring-pink-300 pr-10 bg-[#E3E7ED]"
                                          {...register('password', { required: true })}
                                      />
                                      <div className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer" onClick={togglePasswordVisibility}>
                                          {showPassword ? <FaEyeSlash className="text-gray-400 text-xl" /> : <FaEye className="text-xl text-gray-400" />}
                                      </div>
                                  </div>

          <button className="btn btn-primary w-full mb-4" type="submit">
            Continue
          </button>
        </form>

        <div className="text-center">
          <p className="text-gray-500">
            Already have an account?{" "}
            <a href="#" className="text-primary hover:underline">
              Sign in
            </a>
          </p>
        </div>

      </div>
    </div>
  );
};

export default Login;
