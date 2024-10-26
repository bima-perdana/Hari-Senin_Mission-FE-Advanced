import { useState, useEffect } from 'react';
import ava from '../../assets/ava-photos/ava-profile.png';
import hidePass from '../../assets/form/mdi_eye-off.png';
import showPass from '../../assets/form/mdi_eye-on.png';

const FormProfile = () => {
    const [profile, setProfile] = useState({
        id: 1,
        name: "Jenny Ruby Jane",
        email: "rubyjane@gmail.com",
        phone: { negara: "+62", nomor: "" },
        sex: "Perempuan",
        password: "howyoulikethat",
        rePassword: "howyoulikethat"
    });

    const [savedProfile, setSavedProfile] = useState(profile);
    const [selectedProfile, setSelectedProfile] = useState(profile.id);
    const [profileList, setProfileList] = useState([
        {
            id: 1,
            name: "Jenny Ruby Jane",
            email: "rubyjane@gmail.com",
            phone: { negara: "+62", nomor: "" },
            sex: "Perempuan",
            password: "howyoulikethat",
            rePassword: "howyoulikethat"
        }
    ]);

    const handleAdd = () => { 
        {
        const newProfile = { ...profile, id: profileList.length + 1 }; 
        const updatedProfileList = [...profileList, newProfile];
            setProfileList(updatedProfileList);

            // Update profile dan select ke profile yang baru ditambahkan
            setProfile(newProfile);
            setSelectedProfile(newProfile.id);  
            setSavedProfile(newProfile); 
        }
    };

    const handleSave = () => {
        setProfileList((prevList) => {
            const index = prevList.findIndex(p => p.id === profile.id); 
            if (index !== -1) {
                const updatedList = [...prevList];
                updatedList[index] = profile; 
                return updatedList;
            } else {
                return [...prevList, profile]; 
            }
        });
    
        setSavedProfile(profile);
        setSelectedProfile(profile.id); 
    };
    
    useEffect(() => {
        console.log(profileList);
    }, [profileList]);

    const resetAll = () => {
        setProfile({
            id: profileList.length + 1, 
            name: "",
            email: "",
            phone: { negara: "", nomor: "" },
            sex: "",
            password: "",
            rePassword: ""
        });
    };

    const deleteProfile = (selectedProfile) => {
        const updatedProfileList = profileList.filter(p => p.id !== selectedProfile);
        setProfileList(updatedProfileList);
        
        if (profile.id === selectedProfile) {
            if (updatedProfileList.length > 0) {
                const newProfile = updatedProfileList[0];
                setProfile(newProfile);
                setSavedProfile(newProfile);  // Update savedProfile
            } else {
                resetAll();
                setSavedProfile({
                    id: "",
                    name: "",
                    email: "",
                    phone: { negara: "", nomor: "" },
                    sex: "",
                    password: "",
                    rePassword: ""
                });
            }
        }
    };

    const [showPassword, setShowPassword] = useState(false);
    const [showRePassword, setShowRePassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const toggleRePasswordVisibility = () => {
        setShowRePassword(!showRePassword);
    };

    return (
        <div className='flex flex-col w-full border rounded-[10px] p-6 gap-6'>
            <div className='flex w-full hp:gap-[14px] lg:gap-4'>
                <div className='w-[92px] h-[92px] rounded bg-slate-400'>
                    <img src={ava} alt="ava-profile" />
                </div>
                <div className='flex flex-col w-full lg:gap-4'>
                    <h5>{savedProfile.name}</h5>
                    <p className='text-banner text-black'>{savedProfile.email}</p>
                    <p className='text-button text-orange-600 cursor-pointer'>Ganti Foto Profil</p>
                </div>
                <div className='flex justify-end h-fit'>
                    <div className='hp:hidden lg:block'>
                        <label htmlFor="akun" className="flex textinput justify-center">Daftar Profil</label>
                        <select className='input-form'
                            onChange={(res) => {
                                const selectedId = Number(res.target.value);
                                setSelectedProfile(selectedId);
                                const foundProfile = profileList.find(p => p.id === selectedId);
                                if (foundProfile) {
                                    setProfile(foundProfile); 
                                    setSavedProfile(foundProfile); 
                                }
                            }}
                            value={selectedProfile}>
                            {profileList.map((item, index) => (
                                <option key={index} value={item.id}>
                                    {item.name}
                                </option>
                            ))}
                        </select>

                    </div>
                </div>
            </div>
            <div className='flex w-full hp:flex-col lg:flex-row hp:gap-4 lg:gap-4'>
                <div>
                    <label htmlFor="fullname" className="text-input">Nama Lengkap</label>
                    <input type="text" name="fullname" className="input-form"
                        id="fullname"
                        value={profile.name}
                        onChange={(res) => setProfile({ ...profile, name: res.target.value })} />
                </div>
                <div>
                    <label htmlFor="email" className="text-input">E-Mail</label>
                    <input type="email" name="email" id="email" className='input-form'
                        value={profile.email}
                        onChange={(res) => setProfile({ ...profile, email: res.target.value })} />
                </div>
                <div className='hp:block md:hidden lg:hidden'>
                    <label htmlFor="sex" className="textinput">Jenis Kelamin</label>
                    <div>
                        <select className='w-full input-form appearance-none xl:h-[48px] hp:h-[34px] px-[10px] py-1 border rounded-md'
                            name="sex" id="sex"
                            value={profile.sex}
                            onChange={(res) => setProfile({ ...profile, sex: res.target.value })}>
                            <option value="Laki-laki">Laki-laki</option>
                            <option value="Perempuan">Perempuan</option>
                        </select>
                    </div>
                </div>
                <div>
                    <label htmlFor="phone" className="textinput ml-[80px]">No.Hp</label>
                    <div className="flex gap-6">
                        <select name="country" id="country"
                            value={profile.phone.negara}
                            onChange={(res) =>
                                setProfile({ ...profile, phone: { ...profile.phone, negara: res.target.value } })}>
                            <option value="+62">+62</option>
                            <option value="+65">+65</option>
                            <option value="+60">+60</option>
                        </select>
                        <div>
                            <input type="tel" name="phone" className='input-form' id="phone"
                                value={profile.phone.nomor}
                                onChange={(res) =>
                                    setProfile({ ...profile, phone: { ...profile.phone, nomor: res.target.value } })} />
                        </div>
                    </div>
                </div>
                <div className='relative hp:block md:hidden lg:hidden'>
                    <label htmlFor="password" className="text-input">Kata Sandi</label>
                    <input type={showPassword ? "text" : "password"} name="password" id="password" className="input-form pr-10"
                        value={profile.password}
                        onChange={(res) => setProfile({ ...profile, password: res.target.value })} />
                    <img src={showPassword ? showPass : hidePass}
                        alt={showPassword ? "Hide password" : "Show password"}
                        className="absolute right-3 hp:top-7 lg:top-9 cursor-pointer"
                        onClick={togglePasswordVisibility} />
                </div>
                <div className="relative hp:block md:hidden lg:hidden">
                    <label htmlFor="confirm_password" className="text-input">Konfirmasi Kata Sandi</label>
                    <input type={showRePassword ? "text" : "password"} name="confirm_password" id="confirm_password" className="input-form pr-10"
                        value={profile.rePassword}
                        onChange={(res) => setProfile({ ...profile, rePassword: res.target.value })} />
                    <img src={showRePassword ? showPass : hidePass}
                        alt={showRePassword ? "Hide confirm password" : "Show confirm password"}
                        className="absolute right-3 hp:top-7 lg:top-9 cursor-pointer"
                        onClick={toggleRePasswordVisibility} />
                </div>
            </div>
                <div className='flex hp:flex-col xl:flex-row xl:justify-between hp:gap-4 xl:gap-40'>
                    <div className='w-full flex justify-start hp:hidden xl:block'>
                        <button className="btn-register" onClick={handleAdd}>Tambah</button>
                    </div>
                    <div className='w-full flex justify-end hp:flex-col xl:flex-row gap-4'>
                        <button className="btn-login" onClick={handleSave}
                        >Simpan</button>                
                        <button className="btn-register" onClick={resetAll}>Reset</button>
                        <button className="btn-login bg-red-500 hover:bg-red-700 hp:hidden xl:block" 
                        onClick={() => deleteProfile(selectedProfile)}>Hapus</button>
                    </div>
            </div>
        </div>
    );
};

export default FormProfile;
