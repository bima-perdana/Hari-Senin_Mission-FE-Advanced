import logoGoogle from '/src/assets/logos/logos_google-icon.png';
import hidePass from '/src/assets/form/mdi_eye-off.png'; //Icon untuk menutup kata sandi
import showPass from '/src/assets/form/mdi_eye-on.png';   

import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserCrud } from '/src/hooks/useUserCrud';

const FormLogin = () => {


    const { listUsers, fetchUsers} = useUserCrud();
    const [loginUser, setLoginUser] = useState({ email:"" , password:"" });

    useEffect(() => {
        fetchUsers();
    }, []);

    const checkUser = (event) => {      
        event.preventDefault(); 
        const user = listUsers.find((user) => user.email === loginUser.email && user.password === loginUser.password);
        
        if (user) {
            localStorage.setItem('user', JSON.stringify(user));
            navigate('/home');
        } else {
            alert('Email atau Kata Sandi yang Anda masukkan salah!');
        }
    }

    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    }

    return (
        <div className="flex items-center justify-center w-full">
            <div className='flex flex-col bg-white border-form p-9 rounded-[4px] shadow-lg w-[590px] gap-9'>
                <div className='flex flex-col gap-[10px]'>
                    <h3 className='text-center'>Masuk ke Akun</h3>
                    <p className="text-center text-input">Yuk, lanjutin belajarmu di videobelajar</p>
                </div>
                <form onSubmit={checkUser} method="post" className="space-y-4">
                    <div>
                        <label htmlFor="email" className="text-input">
                            <div className='flex gap-1'>
                                E-Mail
                                <p className='text-red-600'>*</p>
                            </div>
                        </label>
                        <input type="email" name="email" id="email" className='input-form' 
                        onChange = {(res) => setLoginUser({...loginUser, email:res.target.value })}
                        />
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
                        onChange = {(res) => setLoginUser({...loginUser, password:res.target.value })}
                        />
                        <img src={showPassword? showPass : hidePass} alt={showPassword ? "Hide password" : "Show password" } 
                        className="absolute right-3 hp:top-6 lg:top-9 cursor-pointer" 
                        onClick={togglePasswordVisibility}
                        />
                    </div>
                    
                    <div className="w-full text-right">
                        <a href="#" className="text-home">Lupa Password?</a>
                    </div>
                    
                    <button type='submit' className="btn-login text-button">
                    Masuk</button>
                    <button type='button' className="btn-register text-button" onClick={() => navigate('/register')}>Daftar</button>
                    <p className="text-input text-center">atau</p>
                    <button type='button' className="btn-google">
                        <div className="flex justify-center gap-2 px-[26px] py-2">
                            <img src={logoGoogle} alt="logo-google" />
                            <p className="text-button text-slate-600">Masuk dengan Google</p>
                        </div>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default FormLogin;
