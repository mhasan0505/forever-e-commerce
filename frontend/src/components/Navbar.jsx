import { Link, NavLink } from 'react-router-dom'
import { assets } from '../assets/assets'
function Navbar() {
  return (
    <div className="flex items-center justify-between py-5 font-medium" >
        <img src={assets.logo} alt="logo" className='w-36' />
        <ul className='hidden sm:flex gap-5 text-sm text-grey-700'>
          <NavLink to="/" className="flex flex-col items-center gap-1">
            <p>HOME</p>
            <hr  className='w-2/4 border-none h-[3.5px] bg-red-700 hidden'/>
          </NavLink>
          <NavLink to="/collection" className="flex flex-col items-center gap-1">
            <p>COLLECTION</p>
            <hr  className='w-2/4 border-none h-[3.5px] bg-red-700 hidden'/>
          </NavLink>
          <NavLink to="/about" className="flex flex-col items-center gap-1">
            <p>ABOUT</p>
            <hr  className='w-2/4 border-none h-[3.5px] bg-red-700 hidden'/>
          </NavLink>
          <NavLink to="/contact" className="flex flex-col items-center gap-1">
            <p>CONTACT</p>
            <hr  className='w-2/4 border-none h-[3.5px] bg-red-700 hidden'/>
          </NavLink>
        </ul>
        <div className='flex items-center gap-6'>
          <img src={assets.search_icon} className='w-5 cursor-pointer' alt="" />
          <div className='group relative'>
            <img className='w-5 cursor-pointer' src={assets.profile_icon} alt="" />
            <div className='group-hover:block absolute hidden dropdown-menu right-0 pt-4'>
              <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded   '>
                <p className='cursor-pointer hover:text-black'>My Profile</p>
                <p className='cursor-pointer hover:text-black'>Orders</p>
                <p className='cursor-pointer hover:text-black'>Logout</p>
              </div>
            </div>
          </div>
          <Link to={"/cart"} className='relative'>
          <img className='w-5 min-w-5' src={assets.cart_icon} alt="" />
          <p className='absolute bottom-[-5px] right-[-5px] text-center  bg-red-700 text-white w-4 rounded-full loading-4 aspect-square text-[12px]'>0</p>
          </Link>
          <img className='w-5 cursor-pointer sm:hidden' src={assets.menu_icon} alt="" />
        </div>
        
    </div>
  )
}

export default Navbar