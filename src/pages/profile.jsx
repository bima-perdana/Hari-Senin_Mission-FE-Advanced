
import FormProfile from '../components/form/form-profile.jsx';
import MenuProfile from '../components/menu/menu-profile.jsx';
import Footer from '../components/footer/index.jsx';
import {useEffect} from 'react'

const Profile = () => {

    useEffect(() => {
        document.title = "Profile - videobelajar"; //untuk judul tab browser
    },[]);


    return (
        <div className="container mx-auto">
            <div className="flex flex-wrap">
                <div className='flex w-full hp:flex-col lg:flex-row hp:pt-28 hp:pb-[28px] hp:px-5 hp:gap-6 lg:px-[120px] lg:py-16 lg:gap-9'>
                    <MenuProfile/>
                    <FormProfile/>
                </div>
                <div className='w-full border lg:py-[60px] lg:px-[120px] lg:gap-5 hp:px-5 hp:gap-6 hp:py-[28px]'> 
                    <Footer/>
                </div>
            </div>  
        </div>
    )
}

export default Profile;