import { HiLockClosed, HiMail } from "react-icons/hi"
import { HiUser } from "react-icons/hi2"

const auths = [
  {
    header: 'Google',
    icon: '/google.png',
  },
  {
    header: 'Facebook',
    icon: '/facebook.png',
  },
]

export default function Login() {
  return (
    <div className="flex h-screen w-full bg-outline">
      {/* Left Container - Asset */}
      <div className="h-fit w-fit">
        {/* Vector image */}
        <img
          className="hidden lg:block h-[350px] w-[350px]"
          src="/vector-asset.png"
          alt="vector"
        />
      </div>

      {/* Right Container - Login Form */}
      <div className="h-screen lg:h-fit w-full lg:max-w-[600px] p-5 lg:p-6 lg:rounded-[16px] shadow-intense bg-white">
        <h1 className="font-medium text-2xl">Welcome to {""}<span className="font-bold text-primary">Unstop</span></h1>

        {/* Auth Options */}
        <div className="mt-6 grid gap-y-2 w-full">
          {auths.map((options, index) => (
            <div
              key={index}
              className="flex items-center justify-center gap-x-2 px-4 py-3 rounded-xl shadow-intense border border-outline"
            >
              <img
                className="h-8 w-8"
                src={options.icon}
                alt={options.header}
              />
              <p className="text-base">Login with {options.header}</p>
            </div>
          ))}
        </div>

        {/* Separators */}
        <div className="my-4 w-full flex items-center justify-center gap-x-3">
          <hr className="w-full bg-outline" />
          <p className="text-xs">Or</p>
          <hr className="w-full bg-outline" />
        </div>

        {/* Input Fields */}
        <div className="grid gap-y-3">
          {/* User Name */}
          <div className="relative">
            <input
              type="text"
              placeholder="Your username"
              className="w-full px-14 py-4 bg-fields focus:outline-primary rounded-[16px]"
            />
            {/* Icon */}
            <HiUser className="absolute inset-0 my-auto mx-5 h-6 w-6" />
          </div>

          {/* Email */}
          <div className="relative">
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-14 py-4 bg-fields focus:outline-primary rounded-[16px]"
            />
            {/* Icon */}
            <HiMail className="absolute inset-0 my-auto mx-5 h-6 w-6" />
          </div>

          {/* Password */}
          <div className="relative">
            <input
              type="password"
              placeholder="Enter password"
              className="w-full px-14 py-4 bg-fields focus:outline-primary rounded-[16px]"
            />
            {/* Icon */}
            <HiLockClosed className="absolute inset-0 my-auto mx-5 h-6 w-6" />
          </div>

          {/* User Controls */}
          <div className="mt-3 w-full flex justify-between items-center">
            <div className="flex items-center gap-x-2.5">
              <input
                type="checkbox"
                name="rememberMe"
                id="remember-me"
                className="h-4 w-4 rounded-md checked:bg-primary"
              />
              <h1>Remember me</h1>
            </div>
            <a className="hover:underline text-primary" href="#">Forgot password ?</a>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="mt-6 p-4 rounded-[16px] bg-primary text-white"
          >
            Login
          </button>

          {/* Sign up */}
          <p className="text-sm font-medium text-center mt-4">Don&apos;t have an account? <span className="text-primary hover:underline cursor-pointer">Register</span></p>
        </div>
      </div>
    </div>
  )
}
