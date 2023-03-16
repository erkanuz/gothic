import React, { useEffect, useState } from 'react'
import { Badge, Avatar, Menu, MenuItem, ListItemIcon, Divider} from '@mui/material'

import {CiLogout} from 'react-icons/ci'
import {HiMenu, HiHome} from 'react-icons/hi'
import {GiMoonBats} from 'react-icons/gi'
import {FaNewspaper} from 'react-icons/fa'
import {AiFillCloseCircle, AiFillTag, AiOutlineUser, AiFillInfoCircle} from 'react-icons/ai'
import {FiSearch, FiShoppingCart} from 'react-icons/fi'
import {MdFavorite, MdHelp, MdCircleNotifications, MdRemoveShoppingCart, MdLogout} from 'react-icons/md'

import { useDispatch, useSelector } from 'react-redux'
import { Link, NavLink, useNavigate } from 'react-router-dom'

import { ADD, DELETE, REMOVE, RESET } from '../redux/action/action'

import { toast } from 'react-toastify'

import Data from './Data'

import { signOut } from 'firebase/auth'
import useAuth from '../components/useAuth'
import { auth } from '../firebase'

const Navbar = () => {
  const [openNavbar, setOpen] = useState(false);
  const [theme, setTheme] = useState("light");
  const [price,setPrice] = useState(0);

  const {cureentUser} = useAuth();
  const navigate = useNavigate()

  const getdata = useSelector((state) => state.cartreducer.carts);
  const dispatch = useDispatch();

  //Logout
  const logout = () => {
    signOut(auth).then(() => {
      toast.success('Logged out')
      navigate('/');
    }).catch(err => {
      toast.error(err.message)
    })
  }

  //Theme
  useEffect(() => {
    (theme === "dark") ? document.documentElement.classList.add("dark") : document.documentElement.classList.remove("dark")
  }, [theme]);

  const Switcher = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  }

  //Cart
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  }

  //User
  const [anchor, setAnchor] = useState(null);
  const user = Boolean(anchor);

  const handleOpen = (e) => {
    setAnchor(e.currentTarget);
  };

  const handleCloses = () => {
    setAnchor(null);
  }

  //Search
  const [input, setInput] = useState("");

  //Price
  
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

  //Add
  const send = (i) => {
    dispatch(ADD(i));
  }

  //Delete
  const remove = (item) => {
    dispatch(DELETE(item));
  }

  //Remove
  const DLT = (id) => {
    dispatch(REMOVE(id));
    toast.error("Product has been deleted", {
      position: 'top-right', pauseOnHover: false, closeOnClick: true,
  });
  }

  //Reset
  const RES = (res) => {
    dispatch(RESET(res))
  }

  return (
      <div className='w-full select-none shadow-lg dark:shadow-cyan-300/100 font-serif'>
      <div className='header fixed z-20 shadow w-full bg-white dark:bg-black'>
        <div className='mx-auto flex justify-between items-center p-4 container'>
          <div className='flex items-center gap-2'>
              <div onClick={() => setOpen(!open)} className='cursor-pointer text-black dark:text-white'><HiMenu size={30} /></div>
              <h1 className='md:flex hidden text-2xl sm:text-3xl lg:text-4xl px-2 text-black dark:text-white'>GHOTIC</h1>
              
              <label className='lg:flex relative items-center justify-between w-[170px] h-9 bg-gray-200 rounded-full p-1 text-sm cursor-pointer hidden'>
                <input type="checkbox" className='w-0 h-0 cursor-pointer header-input' onClick={Switcher}/>
                <span className='absolute inset-0 slider' />
              </label>
          </div>

          <div>
            <div className='flex items-center bg-gray-200 rounded-full px-2 w-[200px] sm:w-1/4 md:w-[300px] lg:w-[500px]'>
              <FiSearch size={20} />
              <input type="search" placeholder='Search by name' className='bg-transparent p-1 italic w-full focus:outline-none'
                onChange={(e) => setInput(e.target.value)} value={input} />
            </div>
            {input.length !== 0 && (
            <div className='fixed w-[200px] sm:w-1/4 md:w-[300px] lg:w-[500px] gap-6 mt-2 h-32 bg-black dark:bg-white shadow-lg overflow-hidden overflow-y-auto'>
              {Data.filter((item) => {
                const n = input.toLowerCase();
                const full = item.name.toLocaleLowerCase();
                return n && full.startsWith(n);
              }).map((item) => (
                <div key={item.id} className="flex justify-between w-full px-4 h-10 items-center text-white dark:text-black hover:bg-gray-400 font-sans">
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                </div>
              ))}
            </div>
            )}
          </div>

        <div className='flex items-center gap-6'>
          <Badge badgeContent={getdata.length} color="primary" showZero id="basic-button" aria-controls={open ? 'basic-menu' : undefined} aria-haspopup="true" aria-expanded={open ? 'true' : undefined} onClick={handleClick}>
            <Avatar sx={{ width: 30, height: 30, bgcolor: 'black' }} className="bg-black dark:bg-white text-white dark:text-black cursor-pointer">
              <FiShoppingCart size={17} color="action" className='mr-1'/>
            </Avatar>
          </Badge>

          <Avatar sx={{ width: 30, height: 30, bgcolor: 'black' }} className="bg-black dark:bg-white text-white dark:text-black cursor-pointer"
          aria-controls={user ? 'account-menu' : undefined} aria-haspopup="true" aria-expanded={user ? 'true' : undefined} onClick={handleOpen}><AiOutlineUser /></Avatar>
        </div>

          <Menu anchorEl={anchor} id="account-menu" open={user} onClose={handleCloses} onClick={handleCloses}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: 'visible',
                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                mt: 1.5,
                '& .MuiAvatar-root': {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                '&:before': {
                  content: '""',
                  display: 'block',
                  position: 'absolute',
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: 'background.paper',
                  transform: 'translateY(-50%) rotate(45deg)',
                  zIndex: 0,
                },
              },
            }}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
          >
            <MenuItem>
              <Avatar /> {cureentUser ? cureentUser.email : 'Profile'}
            </MenuItem>
            <Divider />
            { cureentUser ? 
            <MenuItem onClick={logout}>
              <ListItemIcon><CiLogout /></ListItemIcon>
              Logout
            </MenuItem> : 
            <MenuItem onClick={handleCloses}>
              <NavLink to={'/Login'}>
              <ListItemIcon><MdLogout fontSize="small" /></ListItemIcon>
              Log In
              </NavLink>
            </MenuItem>
            }
          </Menu>

        <Menu id='basic-menu' anchorEl={anchorEl} open={open} onClose={handleClose} MenuListProps={{'aria-labelledby' : 'basic-button',}} className="mt-2 px-4">
          {
            getdata.length ? 
            <div className='p-8 select-none'>
              <span>Shopping Bag</span> <br></br>
              <span className='sm:text-[10px] text-[9px] text-red-500'>Click the info button on the image for product details, to do this please hover the image</span>
              <p className='text-xs border-b border-gray-400 mt-2' />
              {
                getdata.map((item,idx) => {
                  return(
                    <div key={idx}>
                      <div className='grid mt-4'>
                        <div className="flex content-between justify-center">
                          <div className='relative items-center justify-center overflow-hidden grayscale-0 hover:grayscale transition-all group'>
                            <img src={item.image} alt="" className='h-[125px] w-[90px] object-cover rounded-lg mr-4' />
                            <NavLink to={`/details/${item.id}`}>
                            <AiFillInfoCircle className='absolute text-white text-xl top-1/2 left-[45%] -translate-x-1/2 -translate-y-1/2 gap-2 hidden group-hover:block duration-700 delay-100' />
                            </NavLink>
                          </div>

                          <div className='grid gap-6'>

                            <div className="flex items-center justify-between sm:text-xl text-sm">
                              <h3>{item.name}</h3>
                              <AiFillCloseCircle size={25} className='cursor-pointer' onClick={() => {DLT(item.id)}}/>
                            </div>

                            <div className="flex flex-col sm:flex-row items-center gap-6 sm:w-[300px] w-full">

                              <div className='flex items-center'>
                                <button className='flex items-center justify-center w-6 h-6 bg-black text-white rounded transition hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300'
                                onClick={ item.quantity <= 1 ? () => DLT(item.id) :() => remove(item)}>-</button>
                                <span className='inline-block text-md w-9 text-center'>{item.quantity}</span>
                                <button className='flex items-center justify-center w-6 h-6 bg-black text-white rounded transition hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300'
                                onClick={() => send(item)}>+</button>
                              </div>

                              <div className='flex items-center md:text-lg xs:text-sm gap-6'>
                                <p className='text-gray-500'>${(item.price).toFixed(2)}</p>
                                <p>${(item.price * item.quantity).toFixed(2)}</p>
                              </div>

                            </div>

                          </div>
                          
                        </div>
                      </div>
                    </div>
                  )
                })
              }
                <p className='text-xs border-b border-gray-400 mt-2' />
                <div className='flex justify-between'>
                <p>Total price: ${price.toFixed(2)}</p>
                <button className='p-0 border-none text-red-500' onClick={() => {RES(RES)}}>Reset Cart</button>
                </div>
                <Link to={"/Checkout"}>
                <button className='flex justify-center w-full bg-black text-white rounded-none outline outline-red-600 mt-2'>Checkout</button>
                </Link>
            </div> :

            <div className='card_details flex justify-center items-center'>
              <i className='absolute top-2 right-2 cursor-pointer' onClick={handleClose}><AiFillCloseCircle size={20}/></i>
              <div className='flex p-6'>
                <MdRemoveShoppingCart size={25} />
                <p className='text-xl'>Your cart is empty</p>
              </div>
            </div>
          }
        </Menu>
        </div>
        {openNavbar ? <div className='fixed w-full h-screen z-10 top-0 left-0 bg-black/80'></div> : ''}
        
        <div className={openNavbar ? 'grid fixed w-[300px] h-[98vh] z-10 rounded-2xl m-2 top-0 left-0 bg-white duration-700' 
                             : 'grid fixed w-[300px] h-[98vh] z-10 rounded-2xl m-2 top-0 left-[-100%] bg-white duration-700'}>
            <AiFillCloseCircle onClick={() => setOpen(!openNavbar)} size={30} className="absolute right-4 top-5 cursor-pointer"/>
            <div></div>
            <h2 className='text-2xl text-center p-4'>GHOTIC</h2>

            <div className="edication_data">

              <div>
                <h3 className="font-bold">Home</h3>
                <div className="flex items-center justify-center text-gray-800 relative pulse">
                  <Link to={"/"}>
                  <HiHome size={15} className="cursor-pointer" /></Link>
                </div>
              </div>

              <div>
                <span className="inline-block w-4 h-4 bg-black rounded-full"></span>
                <span className="line"></span>
              </div>

            </div>

            <div className="edication_data">
              <div></div>

              <div>
                <span className="inline-block w-4 h-4 bg-black rounded-full"></span>
                <span className="line"></span>
              </div>

              <div>
                <h3 className="font-bold">Notification</h3>
                <div className="flex items-center justify-center text-gray-800 relative pulse">
                  <Link to={"/NotFound"}>
                  <MdCircleNotifications size={25} className="cursor-pointer" />
                  </Link>
                </div>
              </div>

            </div>

            <div className="edication_data">

              <div>
                <h3 className="font-bold">Promotion</h3>
                <div className="flex items-center justify-center text-gray-800 relative pulse">
                  <Link to={"/Promotion"}>
                  <AiFillTag size={20} className="cursor-pointer"/>
                  </Link>
                </div>
              </div>

              <div>
                <span className="inline-block w-4 h-4 bg-black rounded-full"></span>
                <span className="line"></span>
              </div>

            </div>

            <div className="edication_data">
              <div></div>

              <div>
                <span className="inline-block w-4 h-4 bg-black rounded-full"></span>
                <span className="line"></span>
              </div>

              <div>
                <h3 className="font-bold">Favourites</h3>
                <div className="flex items-center justify-center text-gray-800 relative pulse">
                  <Link to={"/Favourites"}>
                  <MdFavorite size={20} className="cursor-pointer" />
                  </Link>
                </div>
              </div>

            </div>

            <div className="edication_data">

              <div>
                <h3 className="font-bold">About us</h3>
                <div className="flex items-center justify-center text-gray-800 relative pulse">
                  <Link to={"/About"}>
                    <FaNewspaper size={17} className="cursor-pointer" />
                  </Link>
                </div>
              </div>

              <div>
                <span className="inline-block w-4 h-4 bg-black rounded-full"></span>
                <span className="line"></span>
              </div>

            </div>

            <div className="edication_data">
              <div></div>

              <div>
                <span className="inline-block w-4 h-4 bg-black rounded-full"></span>
              </div>

              <div>
                <h3 className="font-bold">Dark Mode</h3>
                <div className="flex items-center justify-center text-gray-800 relative pulse">
                  <GiMoonBats size={20} onClick={Switcher} className="cursor-pointer" />
                </div>
              </div>

            </div>

            <div className='w-full p-4 text-center relative'>
              <MdHelp size={40}  className="absolute bg-white border-[10px_solid_blue] rounded-[50%] top-[-5px] right-1/2 translate-x-[50%] z-10"/>
              <div className='relative p-4 bg-black rounded-[10px] overflow-hidden text-white'>

                <h3 className='my-4 text-xl'>Help Center</h3>
                <p className='text-sm text-justify pb-4'>Having trouble in GHOTIC, please contact us from for more questions.</p>
                <div className='flex justify-center'>
                  <button className='block relative overflow-hidden text-center rounded-none outline outline-white'>
                    <span className='text-md text-white dark:text-black italic relative z-10'>Go to help center</span>
                    <div className='w-[300px] h-[300px] bg-[#4973ff] shadow-[inset_0_0_50px_rgba(0_0_0_.5)] absolute -top-20 left-0 transition-all liquid'></div>
                  </button>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
  )
}

export default Navbar