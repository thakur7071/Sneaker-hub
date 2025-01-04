import './Navbar.css'
import cart_icon from '../Assets/cart_icon.png'
import mainlogo from '../Assets/mainlogo.jpg'
import { useRef, useState } from 'react'
import { Link, } from 'react-router-dom'
import loginicon from '../Assets/loginicon.png'
import navdropdown from '../Assets/navdropdown-icon.png'
const Navbar = ({setShowLogin}) => {

  document.querySelectorAll('.nav-menu li').forEach(item => {
    item.addEventListener('click', () => {
        // Remove active class from all list items
        document.querySelectorAll('.nav-menu li').forEach(el => el.classList.remove('active'));
        
        // Add active class to the clicked item
        item.classList.add('active');
    });
});


    const [menu,setMenu] = useState("")
    const menuRef = useRef();

    const dropdown_toggle = (e) =>{
       menuRef.current.classList.toggle('nav-menu-visible');
       e.target.classList.toggle('open');
    }
  return (
    <div className='navbar'>
      <div className='nav-logo'>
       <Link to='/'> <img src={mainlogo} alt=''/></Link>
      </div>
      <img className='nav-dropdown' onClick={dropdown_toggle} src={navdropdown} alt=''/>
      <ul ref={menuRef} className='nav-menu'>
        <li onClick={()=>{setMenu("home")}}><Link style={{textDecoration: 'none'}} to='/'>Home</Link>{menu==="home"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("mens")}}><Link style={{textDecoration: 'none'}} to='/mens'>Mens</Link>{menu==="mens"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("womens")}}><Link style={{textDecoration: 'none'}} to='/womens'>Womens</Link>{menu==="womens"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("kids")}}><Link style={{textDecoration: 'none'}} to='/kids'>Kids</Link>{menu==="kids"?<hr/>:<></>}</li>
      </ul>
      <div  className="nav-login-cart">
       <img className='loginicon' onClick={()=>setShowLogin(true)} src={loginicon} alt='loginicon'/>
              <Link to='/cart'> <img src={cart_icon} alt=''/></Link>
      </div>
    </div>
  )
}

export default Navbar
