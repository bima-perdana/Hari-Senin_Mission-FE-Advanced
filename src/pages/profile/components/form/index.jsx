import { useState, useEffect } from 'react';
import ava from '/src/assets/ava-photos/ava-profile.png';
import hidePass from '/src/assets/form/mdi_eye-off.png';
import showPass from '/src/assets/form/mdi_eye-on.png';
import { useNavigate } from 'react-router-dom';
import { useUserCrud } from '/src/hooks/useUserCrud';
import { useUserPassword } from '/src/hooks/useUserPassword'

const FormProfile = () => {
    const { fetchUsers, updateUser, deleteUser } = useUserCrud();
    const {password, rePassword, setPassword, setRePassword, checkPassword } = useUserPassword(); 
    const navigate = useNavigate();
    const [profile, setProfile] = useState({});
    const [tempProfile, setTempProfile] = useState({
        name: "",
        email: "",
        country: "indonesia",
        number: "",
        password: "",
    });
    const [showPassword, setShowPassword] = useState(false);
    const [showRePassword, setShowRePassword] = useState(false);

    useEffect(() => {
        fetchUsers();
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            const parsedUser = JSON.parse(storedUser);
            setProfile(parsedUser);
            setTempProfile({
                ...parsedUser,
                country: "indonesia",
                number: parsedUser.number || "" 
            });
            
            setPassword(parsedUser.password || "");
            setRePassword(parsedUser.password || ""); 
        }
    }, []);

    const togglePasswordVisibility = () => setShowPassword(!showPassword);
    const toggleRePasswordVisibility = () => setShowRePassword(!showRePassword);

    const handleInputChange = (res) => {
        const { name, value } = res.target;

        setTempProfile({
            ...tempProfile,
            [name]: value
        });
    };

    const handleSave = () => {
        if(!checkPassword()) return;
        const updatedTempProfile = { ...tempProfile, password, rePassword};
        setProfile(updatedTempProfile);
        localStorage.setItem('user', JSON.stringify(updatedTempProfile));
        updateUser(profile.id, updatedTempProfile);
        alert('Profile updated successfully!');
    };

    const handleDelete = () => {
        deleteUser(profile.id);
        localStorage.removeItem('user');
        navigate('/');
    };

    return (
        <div className='flex flex-col w-full border rounded-[10px] p-6 gap-6'>
            <div className='flex w-full hp:gap-[14px] lg:gap-4'>
                <div className='w-[92px] h-[92px] rounded bg-slate-400'>
                    <img src={ava} alt="ava-profile" />
                </div>
                <div className='flex flex-col w-full lg:gap-4'>
                    <h5>{profile.name}</h5>
                    <p className='text-banner text-black'>{profile.email}</p>
                    <p className='text-button text-orange-600 cursor-pointer'>Ganti Foto Profil</p>
                </div>
            </div>
            <div className='flex w-full hp:flex-col lg:flex-row hp:gap-4 lg:gap-4'>
                <div>
                    <label htmlFor="fullname" className="text-input">Nama Lengkap</label>
                    <input 
                        type="text" 
                        name="name" 
                        className="input-form"
                        id="fullname"
                        value={tempProfile.name || ""} 
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label htmlFor="email" className="text-input">E-Mail</label>
                    <input 
                        type="email" 
                        name="email" 
                        id="email" 
                        className='input-form'
                        value={tempProfile.email || ""}
                        onChange={handleInputChange}
                    />
                </div>
                <div className='hp:block md:hidden lg:hidden'>
                    <label htmlFor="sex" className="text-input">Jenis Kelamin</label>
                    <select 
                        className='w-full input-form appearance-none xl:h-[48px] hp:h-[34px] px-[10px] py-1 border rounded-md'
                        name="sex" 
                        id="sex"
                        value={tempProfile.sex || ""}
                        onChange={handleInputChange}
                    >
                        <option value="Laki-laki">Laki-laki</option>
                        <option value="Perempuan">Perempuan</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="phone" className="text-input ml-[80px]">No.Hp</label>
                    <div className="flex gap-6">
                        <select 
                            name="country" 
                            id="country"
                            value={tempProfile.country}
                            onChange={handleInputChange}
                        >
                            <option value="indonesia">+62</option>
                            <option value="singapore">+65</option>
                            <option value="malaysia">+60</option>
                        </select>
                        <input 
                            type="tel" 
                            name="number" 
                            className='input-form' 
                            id="number"
                            value={tempProfile.number || ""}
                            onChange={handleInputChange}
                        />
                    </div>
                </div>
                <div className='relative hp:block md:hidden lg:hidden'>
                    <label htmlFor="password" className="text-input">Kata Sandi</label>
                    <input 
                        type={showPassword ? "text" : "password"} 
                        name="password" 
                        id="password" 
                        className="input-form pr-10"
                        value={password || ""}
                        onChange={(res) => setPassword(res.target.value)}
                    />
                    <img 
                        src={showPassword ? showPass : hidePass}
                        alt={showPassword ? "Hide password" : "Show password"}
                        className="absolute right-3 hp:top-7 lg:top-9 cursor-pointer"
                        onClick={togglePasswordVisibility} 
                    />
                </div>
                <div className="relative hp:block md:hidden lg:hidden">
                    <label htmlFor="confirm_password" className="text-input">Konfirmasi Kata Sandi</label>
                    <input 
                        type={showRePassword ? "text" : "password"} 
                        name="confirm_password" 
                        id="confirm_password" 
                        className="input-form pr-10"
                        value={rePassword || ""}
                        onChange={(res) => setRePassword(res.target.value)}
                    />
                    <img 
                        src={showRePassword ? showPass : hidePass}
                        alt={showRePassword ? "Hide confirm password" : "Show confirm password"}
                        className="absolute right-3 hp:top-7 lg:top-9 cursor-pointer"
                        onClick={toggleRePasswordVisibility} 
                    />
                </div>
            </div>
            <div className='flex hp:flex-col xl:flex-row xl:justify-end gap-4'>
                <div className='xl:w-5/12 flex hp:flex-col xl:flex-row gap-4'>
                    <button type='submit' 
                    className="btn-login"
                    onClick={handleSave}>
                    Simpan</button>                
                    <button type='button' 
                    className="btn-login bg-red-500 hover:bg-red-700"
                    onClick={handleDelete}>
                    Hapus Akun</button>
                </div>
            </div>
        </div>
    );
};

export default FormProfile;
