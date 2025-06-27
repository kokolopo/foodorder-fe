import axios from 'axios'
import Cookies from 'js-cookie';
import { create } from "zustand";

const useHistory = create((set, get) => ({
    histories: [],
    loading: false,
    error: null,

    getHistories: async () => {
        set({ loading: true });
        try {
            const res = await axios.get(`${import.meta.env.VITE_API_URL}/history-orders`, {
                headers: {
                    Authorization: `Bearer ${Cookies.get("token")}`,
                },
            });
            set({ histories: res.data.history_orders });
            set({ loading: false });
        } catch (error) {
            set({ error: error });
            console.log(error);
        }
    },
}))

export default useHistory