import useUserPasswordStore from '../stores/useUserPasswordStore'

export const useUserPassword = () => 
{
    const password = useUserPasswordStore((state) => state.password)
    const setPassword = useUserPasswordStore((state) => state.setPassword)
    const rePassword = useUserPasswordStore((state) => state.rePassword)
    const setRePassword = useUserPasswordStore((state) => state.setRePassword)

    const checkPassword = () => {
        if (password !== rePassword) {
            alert("Password tidak sama");
            return false;
        }
        return true;
    } 

    return { password, setPassword, rePassword, setRePassword, checkPassword }
}