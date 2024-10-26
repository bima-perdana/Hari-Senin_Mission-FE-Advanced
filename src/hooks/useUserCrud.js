import useUserStore from '../stores/useUserStore';

export const useUserCrud = () => {
    const listUsers = useUserStore((state) => state.listUsers);
    const setListUsers = useUserStore((state) => state.setListUsers);

    const fetchUsers = useUserStore((state) => state.fetchUsers);
    const addUser = useUserStore((state) => state.addUser);
    const updateUser = useUserStore((state) => state.updateUser);
    const deleteUser = useUserStore((state) => state.deleteUser);

    return { listUsers, setListUsers, fetchUsers, addUser, updateUser, deleteUser };
}
