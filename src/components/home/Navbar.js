import { FaSearch } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";
import { Link } from "react-router-dom";


export default function Navbar({productsName,handleModal}) {

  return (
    <div>
      <nav className='flex justify-between pt-3'>
        <div className="ml-4">
          <Link to='/'>
          <h1 className='font-extrabold text-2xl '>FURNITURE</h1>
          <span>SHOP</span>
          </Link>
        </div>
        <div>
          <ul className='flex p-4'>
            <Link className="hover:scale-110 cursor-pointer hover:duration-100 hover:text-[#c19a83] "to={'/shopall'}>Shop All</Link>
           {productsName.map(categ=><Link className="pl-4 hover:scale-110 hover:duration-100 cursor-pointer hover:text-[#c19a83] focus:text-[#c19a83]" to={`/shopall/${categ.category}`} >{categ.category}</Link>)}
            <li className="pl-4 hover:scale-110 cursor-pointer "><FaSearch/></li>
          </ul>
        </div>
        <div>
          <ul className='flex p-4 mr-3 cursor-pointer'>
            <Link className="hover:scale-110 text-sm cursor-pointer hover:duration-100 hover:text-[#c19a83]" to='/story'>STORY</Link>
            <Link className='pl-4 text-sm hover:scale-110 cursor-pointer hover:duration-100 hover:text-[#c19a83]'to='/contact'>CONTACT</Link>
            <Link className='pl-4 text-sm hover:scale-110 cursor-pointer hover:duration-100 hover:text-[#c19a83]' to='/trackorder'>TRACK ORDER</Link>
            <Link className='pl-4 text-sm hover:scale-110 cursor-pointer hover:duration-100 hover:text-[#c19a83]'to='/help'>HELP</Link>
            <li className='pl-4 text-sm hover:scale-110 cursor-pointer hover:duration-100'>Log in</li>
            <li className="pl-4 text-2xl text-[#c19a83]" onClick={() => handleModal(true)}><FaCartPlus/></li>
          </ul>
        </div>
      </nav>
    </div>
  )
}
