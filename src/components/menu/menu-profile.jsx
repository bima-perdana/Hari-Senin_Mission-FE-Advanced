import icon1 from '../../assets/icons/icon-1.png';
import icon2 from '../../assets/icons/icon-2.png';
import icon3 from '../../assets/icons/icon-3.png';

const MenuProfile = () => {

    return (
        <div className='flex flex-col hp:gap-6 lg:gap-6'>
                        <div className='flex flex-col w-full lg:gap-[10px]'>
                            <h5>Ubah Profil</h5>
                            <p className='text-input'>Ubah data diri Anda</p>
                        </div>
                        <div className='flex flex-col hp:w-full lg:w-[292px] border rounded-[10px] hp:p-5 hp:gap-2 lg:gap-2 lg:p-6'>
                            <div className='flex w-full border rounded cursor-pointer p-3 gap-3 bg-orange-100'>
                                <img src={icon1} alt="profil-saya"/>
                                <p className='text-hbanner text-orange-400'>Profil Saya</p>
                            </div>
                            <div className='flex w-full border rounded cursor-pointer p-3 gap-3'>
                                <img src={icon2} alt="kelas-saya"/>                                
                                <p className='text-hbanner'>Kelas Saya</p>
                            </div>
                            <div className='flex w-full border rounded cursor-pointer p-3 gap-3'>
                                <img src={icon3} alt="pesanan-saya"/>
                                <p className='text-hbanner'>Pesanan Saya</p>
                            </div>
                        </div>
                    </div>
    )
}

export default MenuProfile;