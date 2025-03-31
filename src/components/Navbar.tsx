import '../styles/Navbar.css'
import { CiUser } from "react-icons/ci";
import { HiOutlineBars3BottomRight } from "react-icons/hi2";

function Navbar(): React.JSX.Element{
  return (
    <nav className='navbar'>
        <div className='navbar_left'>
            <span>Luxurycar.cars</span>
        </div>
        <div className='navbar_middle'>
            <span>Home</span>
            <span>Collection</span>
            <span>contact</span>
        </div>
        <div className='navbar_right'>
            <CiUser/>
            <span>|</span>
            <HiOutlineBars3BottomRight/>
        </div>
    </nav>
    )
}

export default Navbar