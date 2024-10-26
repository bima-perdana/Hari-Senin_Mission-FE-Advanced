import logos from '../../../assets/nav/logo-videobelajar.png';
const Nav = () => {
    {/* Untuk Navbar pada Login dan Register */}
    return (

        <div className='flex w-full hp:px-0 hp:py-4 lg:py-3 lg:px-[100px]'>
                <img src={logos} alt="logo-videobelajar" className='cursor-pointer'/>
        </div>
        
    )
}


export default Nav;
