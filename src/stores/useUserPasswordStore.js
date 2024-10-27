import { create } from 'zustand';

const useUserPasswordStore = create((set) => ({
    password: '',
    setPassword: (res) => set({ password:res }),
    rePassword: '',
    setRePassword: (res) => set({ rePassword:res })
}))


export default useUserPasswordStore;