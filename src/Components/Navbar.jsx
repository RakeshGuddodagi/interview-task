import React, { useRef, useState, useEffect } from 'react'
import '../styles/Navbar.css'
import { FiMenu } from 'react-icons/fi';
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowMenu(false);
      }
    };

    if (showMenu) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [showMenu]);
  return (
    <div >
      <div onClick={() => setShowMenu(!showMenu)} ref={menuRef} className='navbar'>
        <FiMenu />
      </div>
      {showMenu ?
        <div>
          <ul className='menu-list'>
            <li>Login</li>
            <li>Logout</li>
          </ul>
        </div>
        : null
      }

    </div>
  )
}

export default Navbar

