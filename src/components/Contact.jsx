import React, { useState } from 'react'

import {BsStar} from 'react-icons/bs'
import {SiGithub, SiLinkedin, SiInstagram} from 'react-icons/si'

import { db } from '../firebase'
import { collection, addDoc } from 'firebase/firestore'
import { toast } from 'react-toastify';

const Contact = () => {
const [star,setStar] = useState(0); 

const [error, setError] = useState("");
const ordersCollectionRef = collection(db, "Questions");
const [email, setEmail] = useState("");
const [text, setText] = useState("");

//Add to firestore
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(ordersCollectionRef, {
        question: text,
        email: email
      });
      setError(toast.success("Your message has been sent!"));
      window.location.reload('/')
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className='max-w-[1400px] mx-auto p-4 text-black dark:text-white'>
        <h1 className='text-4xl text-center font-bold uppercase mt-8 mb-2'>Contact Us</h1>
        <p className='text-xl font-medium text-center zim'>Lorem Impuls is something awesome</p>

        <div className='grid gap-8 justify-center my-10'>
            <span className='hax'></span>
            <a href="https://www.instagram.com/" target="_blank" rel='noopener noreferrer'>
                <SiInstagram size={36} className="text-black dark:text-white hover:text-white hover:bg-black hover:rounded-md hover:boxshadow cursor-pointer"/>
            </a>
            <span className='hax'></span>
            <a href="https://github.com/erkanuz" target="_blank" rel='noopener noreferrer'>
                <SiGithub size={36} className="text-black dark:text-white hover:text-white hover:bg-black hover:rounded-md hover:boxshadow cursor-pointer"/>
            </a>
            <span className='hax'></span>
            <a href="https://www.linkedin.com/in/erkan-uz-lil/" target="_blank" rel="noopener noreferrer">
                <SiLinkedin size={36} className="text-black dark:text-white hover:text-white hover:bg-black hover:boxshadow cursor-pointer"/>
            </a>
            <span className='hax'></span>
        </div>

        <div className='text-center text-lg italic'>
            <h3 className='mb-2'>if you have a short question feel free to write us from here any time</h3>
            <h3>We'll try to answer your questions as soon as possible</h3>
        </div>

        <div className='grid justify-center mt-6'>
            <form onSubmit={handleSubmit} className='flex flex-col justify-center gap-2'>
                <div className='sm:flex grid justify-center gap-3'>
                    <input type="email" placeholder='@email' className='sm:w-[200px] w-full h-10 px-2 placeholder:font-bold placeholder:text-white dark:placeholder:text-black placeholder:text-sm bg-black dark:bg-white text-white dark:text-black outline-none' 
                    onChange={(e) => {setEmail(e.target.value)}} required/>
                    <input type="text" placeholder='Type here ...' className='sm:w-[600px] w-full h-10 px-2 placeholder:font-bold placeholder:text-white dark:placeholder:text-black placeholder:text-sm bg-black dark:bg-white text-white dark:text-black outline-none' 
                    onChange={(e) => {setText(e.target.value)}} required/>
                    <button className='cursor-pointer rounded-none inline-block bg-black dark:bg-white text-white dark:text-black px-6 font-bold text-md outline'
                    type='submit'>Send</button>
                </div>
            <div className='flex items-center justify-center sm:justify-start'>
                <h4 className='mr-2'>Stars rate: </h4>
                <ul className='flex gap-2'>
                {[1,2,3,4,5].map((x,idx) => {
                    return(
                        <li key={idx} onClick={() => setStar(x)} onDoubleClick={() => setStar(0)} className="cursor-pointer">
                            <Star yellow={x <= star} />
                        </li>
                    )
                })}
                </ul>
            </div>
            </form>
            <p className='text-[9px] text-red-600 text-center sm:text-start'>Please double click if you want to clear your rate !</p>
        </div>

    </div>
  )
}

const Star = ({yellow}) => {
    return (
        <BsStar className={yellow ? 'text-amber-300' : ''}/>
    )
}

export default Contact