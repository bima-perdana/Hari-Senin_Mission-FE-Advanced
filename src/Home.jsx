
import { Outlet } from 'react-router-dom';
import NavHome from './components/nav/afterLogin';
const Home = () => {
    return (
        <>
            <NavHome/>
            <Outlet/> 
        </>
    );
}

export default Home;