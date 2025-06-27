import axios from "axios";
import { create } from "zustand";

const useMenu = create((set) => ({
  data: null,
  totalPages: 0,
  loading: false,
  error: null,
  responsePost: null,
  product: null,
  categories: null,
  setData: (newData) => set({ data: newData }),

  fetchMenu: async () => {
    set({ loading: true });

    try {
      const data = await axios.get(`${import.meta.env.VITE_API_URL}/products`);
      set({ loading: false });

      set({ data: await data.data.products });
    } catch (error) {
      console.log(error);
      set({ error: error });
    }
  },

  fetchMenuByID: async (id) => {
    set({ loading: true });

    try {
      const data = await axios.get(
        `${import.meta.env.VITE_API_URL}/products/${id}`
      );
      set({ loading: false });

      set({ product: await data.data.product });
    } catch (error) {
      console.log(error);
      set({ error: error });
    }
  },

  fetchCategories: async () => {
    set({ loading: true });

    try {
      const data = await axios.get(
        `${import.meta.env.VITE_API_URL}/categories`
      );

      set({ categories: await data.data });
      set({ loading: false });
    } catch (error) {
      console.log(error);
      set({ error: error });
    }
  },
}));

export default useMenu;
