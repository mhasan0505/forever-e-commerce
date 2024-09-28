import { NavLink } from 'react-router-dom'
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
        
        
    </div>
  )
}

export default Navbar