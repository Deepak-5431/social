"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";



const Login = () => {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const router = useRouter();


   const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const result = await signIn("credentials",{
        email,
        password,
        redirect: false,
      })
      if(result?.error){
        console.log(result.error)
      }else{
        router.push('/');
      }
   }
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md dark:bg-gray-800">
        
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Sign in to your account
          </h1>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Welcome back! Please enter your details.
          </p>
        </div>

        
        <form onSubmit={handleSubmit} className="space-y-6">
          
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Email address
            </label>
            <div className="mt-1">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 text-gray-900 bg-gray-50 border border-gray-300 rounded-md shadow-sm appearance-none placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder-gray-400"
                placeholder="you@example.com"
              />
            </div>
          </div>

          
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Password
            </label>
            <div className="mt-1">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 text-gray-900 bg-gray-50 border border-gray-300 rounded-md shadow-sm appearance-none placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder-gray-400"
                placeholder="••••••••"
              />
            </div>
          </div>

          
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded dark:border-gray-600 dark:bg-gray-700"
              />
              <label
                htmlFor="remember-me"
                className="ml-2 block text-sm text-gray-700 dark:text-gray-300"
              >
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <a
                href="#"
                className="font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
              >
                Forgot your password?
              </a>
            </div>
          </div>

          
          <div>
            <button
              type="submit"
              className="flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"
            >
              Sign in
            </button>
          </div>
        </form>

        
        <p className="mt-6 text-sm text-center text-gray-600 dark:text-gray-400">
          Don't have an account?{' '}
          <a
            href="/register"
            onClick={(e) => {
              e.preventDefault();
              router.push('/register');
            }}
            className="font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
          >
            register
          </a>
        </p>
      </div>
    </div>
  )
}

export default Login;