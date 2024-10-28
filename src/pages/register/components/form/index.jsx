import logoGoogle from '/src/assets/logos/logos_google-icon.png';
import hidePass from '/src/assets/form/mdi_eye-off.png';
import showPass from '/src/assets/form/mdi_eye-on.png';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserCrud } from '/src/hooks/useUserCrud';
import { useUserPassword } from '/src/hooks/useUserPassword'

const FormRegister = () => {
    const { fetchUsers, addUser } = useUserCrud();
    const {password, setPassword, setRePassword, checkPassword } = useUserPassword(); 
    const [addUserForm, setAddUserForm] = useState({
        name: "",
        email: "",
        country: "+62",
        number: "",
        password: "",
    });

    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [showRePassword, setShowRePassword] = useState(false);

    const togglePasswordVisibility = () => setShowPassword(!showPassword);
    const toggleRePasswordVisibility = () => setShowRePassword(!showRePassword);

    useEffect(() => {
        fetchUsers();
    }, []);

    const handleRegister = (event) => {
        event.preventDefault();
        
        if(!checkPassword()) return;

        const updatedUserForm = { ...addUserForm, password: password };
        addUser(updatedUserForm);

    
        navigate('/');
    };

    return (
        <div className="flex items-center justify-center w-full">
            <div className='flex flex-col bg-white border-form p-9 rounded-[4px] shadow-lg w-[590px] gap-9'>
                <form className="space-y-4" onSubmit={handleRegister}>
                    <div className='flex flex-col gap-[10px]'>
                        <h3 className="text-center">Pendaftaran Akun</h3>
                        <p className="text-center text-input">Yuk, daftarkan akunmu sekarang juga!</p>
                    </div>
                    <div>
                        <label htmlFor="fullname" className="text-input">
                            <div className='flex gap-1'>Nama Lengkap<p className='text-red-600'>*</p></div>
                        </label>
                        <input type="text" name="fullname" className='input-form' id="fullname" 
                            onChange={(res) => setAddUserForm({...addUserForm, name: res.target.value})} 
                            required/>
                    </div>
                    <div>
                        <label htmlFor="email" className="text-input">
                            <div className='flex gap-1'>E-Mail<p className='text-red-600'>*</p></div>
                        </label>
                        <input type="email" name="email" className='input-form' id="email" 
                            onChange={(res) => setAddUserForm({...addUserForm, email: res.target.value})}
                            required/>                    
                    </div>
                    <div>
                        <label htmlFor="phone" className="textinput">
                            <div className='flex gap-1'>No.Hp<p className='text-red-600'>*</p></div>
                        </label>
                        <div className="flex gap-6">
                            <select name="country" id="country"
                                value={addUserForm.country}
                                onChange={(res) => setAddUserForm({ ...addUserForm, country: res.target.value })}>
                                <option value="indonesia">+62</option>
                                <option value="singapore">+65</option>
                                <option value="malaysia">+60</option>
                            </select>
                            <input type="tel" name="number" className='input-form' id="number" 
                                onChange={(res) => setAddUserForm({ ...addUserForm, number: res.target.value })}
                                required/>                    
                        </div>
                    </div>
                    <div className='relative'>
                        <label htmlFor="password" className="text-input">
                            <div className='flex gap-1'>Kata Sandi<p className='text-red-600'>*</p></div>
                        </label>
                        <input type={showPassword ? "text" : "password"} name="password" id="password" 
                            className="input-form pr-10" onChange={(res) => setPassword(res.target.value)}
                            required/>
                        <img src={showPassword ? showPass : hidePass} alt={showPassword ? "Hide password" : "Show password" } 
                            className="absolute right-3 hp:top-6 lg:top-9 cursor-pointer" 
                            onClick={togglePasswordVisibility}/>
                    </div>
                    <div className="relative">
                        <label htmlFor="confirm_password" className="text-input">
                            <div className='flex gap-1'>Konfirmasi Kata Sandi<div className='text-red-600'>*</div></div>
                        </label>
                        <input type={showRePassword ? "text" : "password"} name="confirm_password" id="confirm_password" 
                            className="input-form pr-10" onChange={(res) => setRePassword(res.target.value)}
                            required/>
                        <img src={showRePassword ? showPass : hidePass} alt={showRePassword ? 'Hide password' : 'Show password'} 
                            className="absolute right-3 hp:top-6 lg:top-9 cursor-pointer" 
                            onClick={toggleRePasswordVisibility}/>
                    </div>
                    <div className="w-full text-right">
                        <a href="#" className="text-home">Lupa Password?</a>
                    </div>
                    <button type='submit' className="btn-register text-button">Daftar</button>
                    <button type='button' className="btn-login text-button" onClick={() => navigate('/')}>Masuk</button>
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
    )
}

export default FormRegister;
