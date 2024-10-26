import profile from '../../../assets/nav/Avatar.png';
import vector from '../../../assets/nav/Vector.png';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logos from '../../../assets/nav/logo-videobelajar.png';

const NavHome = () => {

    const [isDropdownOpen, setIsDropdownOpen] = useState(false); //Memakai hook useState untuk membuat dropdown

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen); //Mengubah state
    };

    const navigate = useNavigate();

{/* Untuk Navbar pada Home */}
return (

        <div className="hp:fixed md:static hp:top-0 hp:left-0 hp:z-50 bg-white flex w-full hp:px-6 hp:py-4 sm:px-[30px] sm:py-3 sm:gap-6 lg:px-[120px] lg:gap-9 shadow-md">
            <div className="flex justify-between items-center w-full">
                <img src={logos} alt="logo-videobelajar" className='cursor-pointer' onClick={() => navigate('/home')}/>
                <a className='text-home hidden lg:block sm:block hp:hidden'>Kategori</a>
                {/* Dropdown ditaruh di image vector yang terdapat khusus pada layar mobile */}
                <img src={vector} alt="vector" className='block lg:hidden sm:hidden hp:block cursor-pointer' onClick={toggleDropdown}/> 
            </div>
                <img src={profile} alt="profile" className='cursor-pointer hidden hp:hidden sm:block lg:block' onClick={()=> navigate('/profile')}/>

                {/* Dropdown */}
                {isDropdownOpen && (
            <ul className="absolute text-home top-full right-0 bg-white shadow-lg rounded-md py-2 w-[200px]">
                <li>
                    <a className="block py-2 px-4 hover:bg-gray-100 hover:text-orange-500" onClick={() => navigate('/profile')}>Profile</a>
                </li>
                <li>
                    <a className="block py-2 px-4 hover:bg-gray-100 hover:text-orange-500" href="#">Kategori</a>
                </li>
                <li>
                    <a className="block py-2 px-4 hover:bg-gray-100 hover:text-orange-500" onClick={() => navigate('/login')}>Sign Out</a>
                </li>
            </ul>
        )}
        </div>
    
)
}

export default NavHome;