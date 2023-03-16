import React, { useState } from 'react'
import {FcGoogle} from 'react-icons/fc'

import { signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../../firebase';
import { toast } from 'react-toastify';

import Loader from '../Loader';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const SingIn = async (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(async () => {
      try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        setLoading(false);
        toast.success("Login Successful");
        navigate("/Checkout");
      } catch (error) {
        setLoading(false);
        toast.error(error.message);
      }
    }, 4000);
  }

  return (
    <>
    { loading ? <Loader /> : 
    <div className='flex items-center justify-center m-auto p-4 min-h-screen select-none'>
    <div className="bg-gray-50 flex fixed rounded-2xl shadow-lg max-w-3xl p-5 items-center">

    <div className='lg:grid hidden h-2/4 w-1/4 rounded-full bg-black fixed -top-1/4 left-0 z-10'></div>
    <div className='lg:grid hidden h-2/4 w-1/4 rounded-full bg-black fixed -bottom-1/4 -right-0 z-10'></div>

    <div className="md:w-1/2 px-16">
      <h2 className="font-bold text-2xl">Login</h2>
      <p className="text-sm mt-4">Welcome again and nice shopping !</p>

      <form onSubmit={SingIn} className="flex flex-col gap-4">
        <input className="p-2 rounded-lg border mt-8" type="text" name="email" placeholder="Email"
        value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input className="p-2 rounded-lg border" type="password" name="password" placeholder="Password"
        value={password} onChange={(e) => setPassword(e.target.value)} required/>
        <button type='submit' className="bg-black text-white w-full rounded-lg py-2 hover:scale-110 duration-300">Login</button>
      </form>

      <div className="mt-10 grid grid-cols-3 items-center text-gray-400">
        <hr className="border-gray-400" />
        <p className="text-center">OR</p>
        <hr className="border-gray-400" />
      </div>

      <button className="flex justify-center items-center bg-black text-white py-2 w-full rounded-lg mt-5 hover:scale-110 duration-300"><FcGoogle className='text-2xl mr-3'/>Login with Google</button>

      <p className='mt-5 text-xs border-b border-gray-400 py-4 '>Forgot your password ?</p>

      <div className='flex justify-between items-center text-xs mt-3'>
        <p>If you don't have an account.. </p>
        <Link to={"/Register"}>
        <button className='py-2 px-5 bg-black text-white border rounded-lg hover:scale-110 duration-300'>Register</button>
        </Link>
      </div>
    </div>

    <div className="w-1/2 md:block hidden">
      <img src="https://images.pexels.com/photos/3050273/pexels-photo-3050273.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
      className="rounded-2xl" alt="" />
    </div>
  </div>
  </div>
  }
  </>
  )
}

export default Login