import create from 'zustand';
import api from './api';
import { list } from 'postcss';

const userUserStore = create ((set) => ({
    listUsers: [],
    setListUsers: (listUsers) => set({ listUsers }),
    //GET USER
    fetchUsers: async () => {
        set({ isLoading: true });
        try {
            const res = await api.get('/users');
            set({ listUsers: res.data });
        } catch (error) {
            console.log(error);
        } finally {
            set({ isLoading: false });
        }
    },

    //POST USER
    addUser: async (newUser) => {
        try {
            const res = await api.post('/users', newUser);
            set((state) => ({
                listUsers: [...state.listUsers, res.data]}));
        } catch (error) {
            console.error(error);
        }
    },

    //UPDATE USER
    updateUser: async (id, updatedUser) => {
        try {
            const res = await api.put(`/users/${id}`, updatedUser);
            set((state) => ({
                listUsers: state.listUsers.map((user) =>
                    user.id === id ? res.data : user
                ),
            }));
        } catch (error) {
            console.error(error);
        }
    },

    //DELETE USER
    deleteUser: async (id) => {
        try {
            await api.delete('/users/${id}');
            set((state) => ({
                users: state.listUser.filter((user) => user.id !== id),
            }));
        } catch (error) {
            console.error(error);
        }
    },
}));

export default userUserStore;