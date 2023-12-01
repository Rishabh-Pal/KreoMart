import { create } from "zustand";
import { devtools, persist, createJSONStorage } from "zustand/middleware";
import { getApis, postApis, updateApis, deleteApis } from "@/api/client";
import {
  CartDetail,
  CartItem,
  PostCartData,
  SingleCartDetail,
} from "../../typings";

type Props = {
  applyCart: any;
  cart: CartDetail;
  getAllCart: () => Promise<CartDetail | undefined>;
  getSingleCart: (cartItemId: number) => Promise<SingleCartDetail | undefined>;
  addToCart: (items: PostCartData) => Promise<SingleCartDetail | undefined>;
  remOneCart: (cartItemId: number) => void;
  updateCart: (
    updatedItem: PostCartData,
    id: number
  ) => Promise<SingleCartDetail | undefined>;
  deleteAllCart:()=>void;
};



export const UseCartStore = create<Props>()(
  devtools(
    persist(
      (set) => ({
        cart: {
          cart_item: [],
          total_cart_items: 0,
          total_price: 0,
          user: 0,
          cart_id: undefined
        },
        getAllCart: async () => {
          const response = await getApis.getCartDetail();
          set({ cart: response });
          return response;
        },
        getSingleCart: async (cartItemId: number) => {
          const response = await getApis.getSingleCartDetail(cartItemId);
          return response;
        },
        addToCart: async (items: PostCartData) => {
          const response = await postApis.postCartDetail(items);
          return response;
        },
        remOneCart:async (cartItemId:number) => {
          const response = await deleteApis.deleteCartDetail(cartItemId);  
          return response;
        },
        updateCart: async (updatedItem: PostCartData, id: number) => {
          const response = await updateApis.updateCartDetail(updatedItem, id);
          return response;
        },
        deleteAllCart: async () => {
          const response = await deleteApis.deleteAllCartDetail(); 
        }, 
        // getProducts: async (filters: string) => {
        //   const response = await getApis.getProducts(filters);
        //   return response;
        // },
        getNavigations: async () => {
          const response = await getApis.getNavigations();
          return response;
        },
        getCategories: async () => {
          const response = await getApis.getCategories();
          return response;
        },
        getProductDetail: async (slug: string) => {
          const response = await getApis.getProductDetail(slug);
          return response;
        },
        applyCart: ()=>{
          return false;
        }
      }),
      {
        name: "food-storage",
        storage: createJSONStorage(() => sessionStorage),
      }
    )
  )
);


