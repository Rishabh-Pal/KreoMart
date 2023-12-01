import { Category, Navigation } from "../../../typings";
const api_root = process.env.NEXT_PUBLIC_API_ROOT || 'http://localhost:8000/api';
const revalidateNavigation = 60*60; //  60 seconds * 60 minutes = 1 hour



const GetApis={

    getNavigations:async (): Promise<Navigation[] | undefined > => {
        try {
            const response = await fetch(`${api_root}/navigation/`,{
                cache: 'no-cache',
            });
            if (!response.ok) {
                throw new Error('Failed to fetch navigations');
            }
            return await response.json();
        } catch (error) {
            // throw new Error('Failed to fetch navigations');
            // if (error instanceof AxiosError) this.handleApiError(error); 
            // You can return a default value, throw a custom error, or handle the error differently
            // throw new Error('Failed to fetch navigations');
        }
    },
    getCategories:async ():Promise<Category[] | undefined> => {
             
            try {
                const response = await fetch(`${api_root}/categories/`,{
                    cache: 'no-cache',
                });
                if (!response.ok) {
                    throw new Error('Failed to fetch categories');
                }
                return await response.json();
            } catch (error) {
                // if (error instanceof AxiosError) this.handleApiError(error);
                // You can return a default value, throw a custom error, or handle the error differently
                // throw new Error('Failed to fetch categories');
            }
    }

}


export default GetApis;