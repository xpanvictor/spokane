import React from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

const Login = () => {
	return (
		<MainLayout>
			<main className="px-5 md:px-16 xl:px-52">
				<div className="md:grid grid-cols-2 shadow mt-6 mb-16 md:h-600 pb-8 md:pb-0">
					<div className="hidden md:flex flex-col justify-center px-5 lg:px-10 bg-form-bg text-white">
						<h1 className="text-4xl lg:text-5xl font-bold pb-7">
							Login
						</h1>
						<p className="text-xl lg:text-2xl leading-8">
							Login now and keep on enjoying our amazing real
							estate services.
						</p>
					</div>
					<div className="pt-5 md:pt-10 px-3 md:px-6">
						<h4 className="font-bold text-center md:text-left text-2xl lg:text-3xl mb-5">
							Login to your account
						</h4>
						<button className="flex items-center rounded-xl justify-center gap-4 border input-box text-center">
							<span>
								<FcGoogle size={25} />
							</span>
							<span className="tracking-tight">
								Sign in with Google{" "}
							</span>
						</button>
						<p className="py-5 text-center font-medium text-lg text-secondary">
							- OR -
						</p>
						<form className="">
							<input
								className="input-box italic mb-4 outline-gray-400 bg-purple-50"
								type="email"
								placeholder="Email Address"
							/>
							<input
								className="input-box italic bg-purple-50 outline-gray-400"
								type="password"
								placeholder="Password"
							/>
							<button className="btn text-white h-btn font-bold bg-pur md:text-lg mt-8 w-full">
								Login
							</button>
						</form>
						<p className="text-secondary mt-4">
							Don't have an account?{"  "}
							<Link
								className="text-pur font-medium md:text-lg"
								to="/signup"
							>
								Sign Up
							</Link>
						</p>
						<p className="text-pur font-medium md:text-lg mt-3">
							<Link exact to="/">Forgot Password?</Link>
						</p>
					</div>
				</div>
			</main>
		</MainLayout>
	);
};

export default Login;
