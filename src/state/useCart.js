import axios from "axios";
import Cookies from "js-cookie";
import { create } from "zustand";

const useCart = create((set, get) => ({
  carts: [],
  loading: false,
  error: null,
  setCarts: (carts) => set({ carts }),
  paymentURL: null,

  addToCart: async (inp) => {
    set({ loading: true });
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/cart`,
        inp,
        {
          headers: {
            Authorization: `Bearer ${Cookies.get("token")}`,
          },
        }
      );
      set({ loading: false });
    } catch (error) {
      set({ error: error });
      console.log(error);
    }
  },

  getCart: async () => {
    set({ loading: true });
    try {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/cart`, {
        headers: {
          Authorization: `Bearer ${Cookies.get("token")}`,
        },
      });
      set({ loading: false });
      set({ carts: res.data.value.menus });
    } catch (error) {
      set({ error: error });
      console.log(error);
    }
  },

  onChange: async (idx, updateData) => {
    set((state) => {
      const updatedCarts = state.carts.map((cart, index) =>
        index === idx ? { ...cart, ...updateData } : cart
      );
      return { carts: updatedCarts };
    });

    try {
      setTimeout(() => {
        axios.put(
          `${import.meta.env.VITE_API_URL}/cart`,
          { menus: get().carts },
          {
            headers: {
              Authorization: `Bearer ${Cookies.get("token")}`,
            },
          }
        );
      }, 1500);
      set({ loading: false });
    } catch (error) {
      console.log(error);
    }
  },

  removeFromCart: async (idx) => {
    set((state) => ({
      carts: state.carts.filter((_, i) => i !== idx),
    }));

    set({ loading: true });
    try {
      const res = await axios.put(
        `${import.meta.env.VITE_API_URL}/cart`,
        { menus: get().carts },
        {
          headers: {
            Authorization: `Bearer ${Cookies.get("token")}`,
          },
        }
      );
      set({ loading: false });
    } catch (error) {
      set({ error: error });
      console.log(error);
    }
  },

  removeAllCart: async () => {
    set({ loading: true });
    try {
      const res = await axios.delete(`${import.meta.env.VITE_API_URL}/cart`, {
        headers: {
          Authorization: `Bearer ${Cookies.get("token")}`,
        },
      });
      set({ loading: false });
    } catch (error) {
      set({ error: error });
      console.log(error);
    }
  },

  checkout: async (inp) => {
    set({ loading: true });
    try {
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/orders`, inp, {
        headers: {
          Authorization: `Bearer ${Cookies.get("token")}`,
        },
      });
      await axios.delete(`${import.meta.env.VITE_API_URL}/cart`, {
        headers: {
          Authorization: `Bearer ${Cookies.get("token")}`,
        },
      });
      set({ loading: false });
      set({ carts: [] });
      set({ paymentURL: await res.data.payment_link });
    } catch (error) {
      set({ error: error });
      console.log(error);
    }
  },
}));

export default useCart;
