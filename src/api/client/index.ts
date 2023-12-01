import axios, { AxiosInstance,AxiosError,AxiosResponse } from "axios";
import { CartDetail, CartItem, Category, Navigation, PostCartData, PRODUCT, ProductDetail, SingleCartDetail } from "../../../typings";
import { resourceUsage } from "process";


interface Filters {
    navigation_header?: number;
    category?: number[];
    sub_category?: number[];
    name?: string;
}


const api_root = process.env.NEXT_PUBLIC_API_ROOT ||  'https://kreomart.onrender.com/api/';

console.log('api_root', api_root)



class API {
    protected api = axios.create({
        baseURL: api_root,
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        }
    });  
}


class GetApis extends API {
    constructor() {
        super()
    }

    // get navigations
    async getNavigations(): Promise<Navigation[] | undefined > {
        try {
            const response: AxiosResponse<Navigation[]> = await this.api.get('/navigation/');
            return response.data;
        } catch (error) {
            // if (error instanceof AxiosError) this.handleApiError(error);
            // You can return a default value, throw a custom error, or handle the error differently
            // throw new Error('Failed to fetch navigations');
        }
    }

    // get categories with subcategories
     async getCategories():Promise<Category[] | undefined> {

        try {
            const response: AxiosResponse<Category[]> = await this.api.get('/categories/');
            return response.data;
        } catch (error) {
            // if (error instanceof AxiosError) this.handleApiError(error);
            // You can return a default value, throw a custom error, or handle the error differently
            // throw new Error('Failed to fetch categories');
        }
    }

    


    // get products 
    getProducts(filters:Filters):Promise<PRODUCT | undefined>{
        console.log(filters, "filters")
        const cur = new URLSearchParams();
        
        const category = filters.category?.map((item)=> cur.append('category', item.toString()))
        const sub_category = filters.sub_category?.map((item)=> cur.append('sub_category', item.toString()))

        console.log(category, "category")
        console.log(sub_category, "sub_category")

       
        return this.api.get(`/products/?${cur.toString()}`,{
            params:{
                navigation_header: filters.navigation_header,
                name: filters.name,        
            },

        }).then((response) => response.data) 
    }

    

    // get product detail by slug 
    async getProductDetail(slug:string):Promise<ProductDetail | undefined>   {
        try {
            const response: AxiosResponse = await this.api.get('/product/'+slug+'/');
            return response.data;
        } catch (error) {
            // if (error instanceof AxiosError) this.handleApiError(error);
            // You can return a default value, throw a custom error, or handle the error differently
            // throw new Error('Failed to fetch product detail');
        }
    }



    // get cart
    async getCartDetail():Promise<CartDetail | undefined>   {
        try {
            const token = localStorage.getItem("access_token");
            const headers = {
                Authorization: `Bearer ${token}`,
            };
            const response: AxiosResponse = await this.api.get('/cart/', {headers});
            return response.data;
        } catch (error) {
            // if (error instanceof AxiosError) this.handleApiError(error);
        }
    }

    // get individual cart detail by id
    async getSingleCartDetail(id: number):Promise<SingleCartDetail | undefined>   {
        try {
            const token = localStorage.getItem("access_token");
            const headers = {
                Authorization: `Bearer ${token}`,
            };
            const response: AxiosResponse = await this.api.get('/cart/'+id+'/', {headers});
            return response.data;
        } catch (error) {
            // if (error instanceof AxiosError) this.handleApiError(error);
        }
    }
    

    // get my profile

    // get my orders


    // get hero banners
    async getHeroBanners():Promise<any | undefined>   {
        try {
            const response: AxiosResponse = await this.api.get('/herobanners/');
            return response.data;
        } catch (error) {
            // if (error instanceof AxiosError) this.handleApiError(error);
        }
    }
}
export class PostApis extends API {
    constructor() {
        super()
    }

    // post login

    // post register

    // verify email

    // post forgot password

    // post add to cart
    async postCartDetail(cartData: PostCartData):Promise<SingleCartDetail | undefined>{
        try {
            const postData = {
                product_variant: cartData.product_variant,
                quantity: cartData.quantity,
            };
            const token = localStorage.getItem("access_token");
            const headers = {
                Authorization: `Bearer ${token}`,
            };
            const response: AxiosResponse = await this.api.post('/cart/',postData , {headers});
            return response.data;
        } catch (error) {
            // if (error instanceof AxiosError) this.handleApiError(error);
        }
    }

    // post remove from cart

    // post adjust quantity

    // post checkout

}
export class UpdateApis extends API{
    constructor() {
        super()
    }
    // Update the cart
    async updateCartDetail(cartData: PostCartData, id:number):Promise<SingleCartDetail | undefined>{
        try {
            const updateData = {
                product_variant: cartData.product_variant,
                quantity: cartData.quantity,
            };
            const token = localStorage.getItem("access_token");
            const headers = {
                Authorization: `Bearer ${token}`
            };
            const response: AxiosResponse = await this.api.put('/cart/'+id+'/update/',updateData , {headers});
            return response.data;
        } catch (error) {
            // if (error instanceof AxiosError) this.handleApiError(error);
        }
    }
}
export class DeleteApis extends API{
    constructor() {
        super()
    }
    // delete the cart
     async deleteCartDetail(id:number){
        try {
            const token = localStorage.getItem("access_token");
            const headers = {
                Authorization: `Bearer ${token}`,
            };
            const response: AxiosResponse = await this.api.delete(`/cart/${id}/delete/`, {headers});
            return response;
        } catch (error) {
            return error;
        }
    }

    async deleteAllCartDetail():Promise<SingleCartDetail | undefined>{
        try {
            const token = localStorage.getItem("access_token");
            const headers = {
                Authorization: `Bearer ${token}`,
            };
            const response: AxiosResponse = await this.api.delete('/cart/' , {headers});
            return response.data;
        } catch (error) {
            // if (error instanceof AxiosError) this.handleApiError(error);
        }
    }
}



export const getApis=new GetApis();
export const postApis=new PostApis();
export const updateApis= new UpdateApis();
export const deleteApis= new DeleteApis();
