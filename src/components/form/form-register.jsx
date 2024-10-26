import logoGoogle from '../../assets/logos/logos_google-icon.png';
import hidePass from '../../assets/form/mdi_eye-off.png';
import showPass from '../../assets/form/mdi_eye-on.png';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const FormRegister = () => {

    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [showRePassword, setShowRePassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    }
    const toggleRePasswordVisibility = () => {
        setShowRePassword(!showRePassword);
    }

    const handleAdd = () => { 
        {
        const newProfile = { ...profile, id: profileList.length + 1 }; 
        setProfileList([...profileList, newProfile]);
        }
    };
    
    

    return (

        <div className="flex items-center justify-center w-full">
            <div className='flex flex-col bg-white border-form p-9 rounded-[4px] shadow-lg w-[590px] gap-9'>
            <form action="" method="post" className="space-y-4">
                <div className='flex flex-col gap-[10px]'>
                    <h3 className="text-center">Pendaftaran Akun</h3>
                    <p className="text-center text-input">Yuk, daftarkan akunmu sekarang juga!</p>
                </div>
                <div>
                    <label htmlFor="fullname" className="text-input">
                        <div className='flex gap-1'>
                        Nama Lengkap
                        <p className='text-red-600'>*</p>
                    </div>
                        </label>
                    <input type="text" name="fullname" className='input-form' id="fullname"/>
                </div>
                <div>
                    <label htmlFor="email" className="text-input">
                    <div className='flex gap-1'>
                        E-Mail
                    <p className='text-red-600'>*</p>
                    </div>
                    </label>
                    <input type="email" name="email" className='input-form' id="email" />                    
                </div>
                <div>
                    <label htmlFor="phone" className="textinput">
                    <div className='flex gap-1'>
                        No.Hp
                    <p className='text-red-600'>*</p>
                    </div>
                    </label>
                    <div className="flex gap-6">
                        <select name="country" id="country">
                            <option value="indonesia">
                                    +62  
                                </option>
                            <option value="singapore">
                                    +65
                            </option>
                            <option value="malaysia">
                                    +60
                            </option>
                        </select>
                        <input type="tel" name="phone" className='input-form' id="phone" />                    
                    </div>
                </div>
                <div className='relative'>
                        <label htmlFor="password" className="text-input">
                            <div className='flex gap-1'>
                                Kata Sandi
                                <p className='text-red-600'>*</p>                     
                            </div>
                        </label>
                        <input type={showPassword ? "text" : "password"} name="password" id="password" 
                        className="input-form pr-10"
                        />
                        <img src={showPassword? showPass : hidePass} alt={showPassword ? "Hide password" : "Show password" } 
                        className="absolute right-3 hp:top-6 lg:top-9 cursor-pointer" 
                        onClick={togglePasswordVisibility}
                        />
                </div>
                <div className="relative">
                    <label htmlFor="confirm_password" className="text-input">
                        <div className='flex gap-1'>
                            Konfirmasi Kata Sandi
                            <div className='text-red-600'>*</div>
                        </div>
                    </label>
                    <input type={showRePassword ? "text" : "password"} name="confirm_password" id="confirm_password" 
                    className="input-form pr-10"/>
                    <img src={showRePassword ? showPass : hidePass} alt={showRePassword ? 'Hide password' : 'Show password'} className="absolute right-3 hp:top-6 lg:top-9 cursor-pointer" 
                    onClick={toggleRePasswordVisibility}/>
                </div>

                <div className="w-full text-right">
                        <a href="#" className="text-home">Lupa Password?</a>
                </div>

                <button className ="btn-register text-button" onClick={() => navigate('/login')}>Daftar</button>
                <button className ="btn-login text-button" onClick={() => navigate('/login')}>Masuk</button>

                <p className="text-input text-center">atau</p>

                <button type='submit' className="btn-google">
                    <div className="flex justify-center gap-2 px-[26px] py-2">
                        <img src={logoGoogle} alt="logo-google" />
                        <p className="text-button text-slate-600">Masuk dengan Google</p>
                    </div>
                </button>
            </form>
        </div>
    </div>

    )
}

export default FormRegister;