import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth , db } from '../../firebase';
import { toast } from 'react-toastify';

import { collection, addDoc } from 'firebase/firestore'

const Register = () => {
  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cpassword, setCPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const users = collection(db, "users");

  const signup = async (e) => {
    e.preventDefault();
    setLoading(true);
    if ( password !== cpassword ) {
      return setError(toast.error("Passwords do not match !"));
    }
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      await addDoc(users, {
        mail: email,
        name: username
      })
      setLoading(false);
      setError(toast.success("Registration Successful"));
      navigate("/Login");
    } catch {
      toast.error(error.message);
      setLoading(false);
    }
  }; 

  return (
    <div className='flex items-center justify-center m-auto p-4 min-h-screen select-none'>
    <div className="bg-gray-50 flex fixed rounded-2xl shadow-lg max-w-3xl p-5 items-center">

    <div className='lg:grid hidden h-2/4 w-1/4 rounded-full bg-black fixed -top-1/4 left-0 z-10'></div>
    <div className='lg:grid hidden h-2/4 w-1/4 rounded-full bg-black fixed -bottom-1/4 -right-0 z-10'></div>

      <div className="md:w-1/2 px-16" id='login-up'>
        <h2 className="font-bold text-2xl">Registration</h2>
        <p className="text-sm mt-4">Register from here quickly and easly</p>

        <form onSubmit={signup} className='flex flex-col gap-6'>
          <input className="p-2 rounded-lg border mt-8" type="text" name="text" placeholder='Name' required
            value={username} onChange={(e) => setUserName(e.target.value)} />
          <input className="p-2 rounded-lg border" type="email" name='email' placeholder='Email' required
            value={email} onChange={(e) => setEmail(e.target.value)} />
          <input className="p-2 rounded-lg border" type="password" name="password" placeholder='Password' required
            value={password} onChange={(e) => setPassword(e.target.value)} />
          <input className="p-2 rounded-lg border" type="password" name="cpassword" placeholder='Confire Password' required
            value={cpassword} onChange={(e) => setCPassword(e.target.value)} />
          <button type='submit' className="bg-black text-white rounded-lg py-2 hover:scale-110 duration-300">Sing up</button>
        </form>

        <p className='mt-3 text-xs border-b border-gray-400 py-4 ' />

        <div className='flex justify-between items-center text-xs mt-3'>
          <p>Already have an account ?</p>
          <Link to={"/Login"}>
            <button className='py-2 px-5 bg-black text-white border rounded-lg hover:scale-110 duration-300'>Singin</button>
          </Link>
        </div>

      </div>

      <div className="w-1/2 md:block hidden">
        <img src="https://images.pexels.com/photos/3050273/pexels-photo-3050273.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          className="rounded-2xl" alt="" />
      </div>
    </div>
    </div>
  )
}

export default Register