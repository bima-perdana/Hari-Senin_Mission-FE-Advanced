import { useEffect } from "react";
import FormRegister from './components/form/index.jsx';


const register = () => {

    
        useEffect(() => {
                document.title = "Register - videobelajar"; //untuk judul tab browser
        },[]);

        return (

        <div className='container mx-auto'>
            <div className='flex flex-wrap'>
                <div className='flex flex-col w-full hp:px-5 hp:py-7 hp:gap-6 lg:px-[120px] lg:py-20 lg:gap-9'>
                    <FormRegister/> {/* Untuk form-register */}
                </div>
            </div>
            
        </div>
    )
}

export default register;