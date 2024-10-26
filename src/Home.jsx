
import { Outlet } from 'react-router-dom';
import NavHome  from './components/nav/afterLogin';
const Home = () => {

    return (
        <div className='container mx-auto'>
            <div className='flex flex-wrap'>
                <NavHome/>
                <Outlet/>
            </div>
        </div>
    )
}

export default Home;