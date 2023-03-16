import React, { useState, useEffect } from 'react'
import {RxAvatar} from 'react-icons/rx'
import {BiArrowBack} from 'react-icons/bi'
import {AiFillWarning} from 'react-icons/ai'

import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import { useSelector } from 'react-redux'
import Navbar from './Navbar';
import { Link, useNavigate } from 'react-router-dom'

import { db } from '../firebase'
import { collection, addDoc } from 'firebase/firestore'
import { toast } from 'react-toastify';

import { RESET } from '../redux/action/action'
import { useDispatch } from 'react-redux'

import Loader from '../components/Loader';

const Checkout = () => {
  //Firebase
  const [mail, setMail] = useState("");
  const [country, setCountry] = useState("");
  const [address, setAddress] = useState("");
  const [count, setCount] = useState(false);
  const [checked, setChecked] = useState(false);

  const ordersCollectionRef = collection(db, "shipping-info");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const getdata = useSelector((state) => state.cartreducer.carts);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //Add to firestore
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout( async () => {
    try {
      await addDoc(ordersCollectionRef, {
        mail: mail,
        country: country,
        address: address,
        Totalprice: "$"+ checked,
        Quantity: count + " " +"Products",
      });
      setLoading(false);
      setError(toast.success("Successful payment"));
      navigate("/");
    } catch (error) {
      toast.error(error.message);
      setLoading(false);
    }
  }, 4000);
  };

  //Reset
  const RES = (res) => {
    dispatch(RESET(res))
  }

  //Open and Close Warning
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  //Add format to card - 1234 1234 1234 1234
  const normalizeCardNumber = (value) => {
    return value.replace(/\s/g, "").match(/.{1,4}/g)?.join(" ").substr(0, 19) || ""
  }

  //Price
  const [price,setPrice] = useState(0);
  //eslint-disable-next-line
  const total = () => {
    let price = 0;
    //eslint-disable-next-line
    getdata.map((item) => {
      price += item.price * item.quantity
    });
    setPrice(price);
  }

  useEffect(() => {
    total();
  }, [total]);

  return (
    <>
    { loading ? <Loader /> : 
    <div>
    <Navbar />
    <div className='max-w-[1440px] min-h-screen mx-auto p-4 font-sans text-black dark:text-white'>
      <div className='sm:grid fixed top-[10%] left-1/2 hidden'>
        <div className="flex items-center justify-center text-gray-800 pulse" variant="outlined" onClick={handleClickOpen}>
          <AiFillWarning />
        </div>
      </div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Warning !"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            This is fake checkout page, it's give us basic functionalities, because that please don't write real informations about payments !
          </DialogContentText>
        </DialogContent>
      </Dialog>
      <div className='sm:flex flex-cols justify-evenly sm:translate-y-1/3'>
        <div className='flex flex-col justify-between text-sm'>
          <div>
            <div className='flex gap-4 items-center mb-8'>
              <Link to={"/"}>
                <BiArrowBack size={20} className="cursor-pointer" />
              </Link>
              <RxAvatar size={20}/>
              <p className='bg-orange-400 p-[1px] rounded-md'><span className='text-sm uppercase'>test mode</span></p>
            </div>
            <div className="sm:fixed block min-w-[300px] max-w-[400px] sm:h-[77%] h-[378px] overflow-y-auto">
            {
              getdata.map((item,idx) => {
                return(
                  <div key={idx}>
                    <div className='mb-2'>
                    <p className='text-gray-500'>{item.name}</p>
                    <p className='text-4xl'>${(item.price * item.quantity).toFixed(2)}</p>
                    <p className='text-gray-500'>Qty {item.quantity}, ${item.price} each</p>
                    </div>
                  </div>
                )
              })
            }
            </div>
          </div>

          <div className='text-sm'>
            <p>Total Quantity: <span>{getdata.length} Prodocuts</span></p>
            <p>Subtotal: <span>${price.toFixed(2)}</span></p>
          </div>
        </div>

        <div>
          <h2 className='mb-4 text-2xl'>Shipping information</h2>
          <form className="grid" onSubmit={handleSubmit}>

            <p>Email</p>
            <input type="email" className='outline outline-1 outline-gray-400 rounded-md p-1 text-black'
            onChange={(e) => setMail(e.target.value)} required/>

            <p className='mb-2 mt-4'>Shipping address</p>
            <div className='grid text-black'>
              <input type="text" placeholder='Name' className='outline outline-1 outline-gray-400 rounded-t-md p-1' required />
              <select className='outline outline-1 outline-gray-400 p-1' onChange={(e) => {setCountry(e.target.value)}} required>
                <option>Country</option>
                <option>United State</option>
                <option>United Kingdom</option>
                <option>Japan</option>
                <option>Chine</option>
                <option>Russia</option>
                <option>Canada</option>
                <option>Australia</option>
              </select>
              <input type="text" placeholder='Address' className='outline outline-1 outline-gray-400 rounded-b-md p-1 text-black' required 
              onChange={(e) => {setAddress(e.target.value)}}/>
            </div>

            <span className='text-sm text-gray-500 underline mt-2'>Enter address manualy</span>

            <h2 className='my-4 text-2xl'>Payment details</h2>

            <p>Card information</p>
            <input type="tel" placeholder='1234 1234 1234 1234' className='outline outline-1 outline-gray-400 rounded-md p-1 text-black'
            inputMode='numeric' autoComplete='cc-number' onKeyPress={(e) => !/[0-9]/.test(e.key) && e.preventDefault()} onChange={(e) => {
              const {value} = e.target
              e.target.value = normalizeCardNumber(value)
            }} maxLength={19} required/>
            <div className='flex mt-1'>
              <input type="date" className='outline outline-1 outline-gray-400 rounded-l-md p-1 text-black' required/>
              <input type="text" placeholder='CVC' className='outline outline-1 outline-gray-400  rounded-r-md p-1 text-black'
              onKeyPress={(e) => !/[0-9]/.test(e.key) && e.preventDefault()} maxLength={3} required/>
            </div>

            <div className='p-2 outline outline-1 outline-gray-400 rounded-md my-3'>
              <div className='flex justify-evenly'>
                <div className='flex flex-col justify-center items-center'>
                  <div className='checkbox-wrapper-31'>
                    <input type="checkbox"  value={getdata.length}  onChange={(e) => {setCount(e.target.value)}} />
                    <svg viewBox='0 0 35.6 35.6'>
                      <circle className='background' cx="17.8" cy="17.8" r="17.8"></circle>
                      <circle className='stroke' cx="17.8" cy="17.8" r="14.37"></circle>
                      <polyline className='check' points='11.78 18.12 15.55 22.23 25.17 12.87'></polyline>
                    </svg>
                  </div>
                  <span>Confirm</span>
                </div>
                <div className='flex flex-col justify-center items-center'>
                  <div className='checkbox-wrapper-31'>
                    <input type="checkbox" value={price.toFixed(2)} onChange={(e) => {setChecked(e.target.value)}} />
                    <svg viewBox='0 0 35.6 35.6'>
                      <circle className='background' cx="17.8" cy="17.8" r="17.8"></circle>
                      <circle className='stroke' cx="17.8" cy="17.8" r="14.37"></circle>
                      <polyline className='check' points='11.78 18.12 15.55 22.23 25.17 12.87'></polyline>
                    </svg>
                  </div>
                  <span>Confirm</span>
                </div>
              </div>
              <p className='text-xs text-center text-red-600'>Please confirm these checkboxes to complete your order!</p>
            </div>

            <div className='p-2 outline outline-1 outline-gray-400 rounded-md'>
              <div className='flex items-center'>
                <div className='checkbox-wrapper-31'>
                    <input type="checkbox" />
                    <svg viewBox='0 0 35.6 35.6'>
                      <circle className='background' cx="17.8" cy="17.8" r="17.8"></circle>
                      <circle className='stroke' cx="17.8" cy="17.8" r="14.37"></circle>
                      <polyline className='check' points='11.78 18.12 15.55 22.23 25.17 12.87'></polyline>
                    </svg>
                </div>
                <p className='ml-2'>Save my info for secure 1-click checkout</p>
              </div>
              <span className='text-sm text-gray-500'>Pay faster on this site and thousands others.</span>
            </div>

            <button className='border-none p-2 mt-4 bg-blue-500 text-white' type='submit' onClick={() => {RES(RES)}}>Pay</button>
          </form>
        </div>
      </div>
    </div>
    </div>
    }
    </>
  )
}

export default Checkout