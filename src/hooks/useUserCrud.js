import useUserStore from '../stores/useUserStore';

export const useUserCrud = () => {
    const listUser = useUserStore((state) => state.listUser);
    const setListUser = useUserStore((state) => state.setListUser);

    const fetchUser = useUserStore((state) => state.fetchUser);
    const addUser = useUserStore((state) => state.addUser);
    const updateUser = useUserStore((state) => state.updateUser);
    const deleteUser = useUserStore((state) => state.deleteUser);

    return { listUser, setListUser, fetchUser, addUser, updateUser, deleteUser };
}