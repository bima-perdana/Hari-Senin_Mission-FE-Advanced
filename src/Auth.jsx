
import { Outlet } from 'react-router-dom';
import Nav from './components/nav/beforeLogin/index.jsx';
const Auth = () => {
    return (
        <>
            <Nav/>
            <Outlet/> 
        </>
    );
}

export default Auth;