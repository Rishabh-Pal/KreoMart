import { getApis } from "@/api/client";
import { useQuery } from "@tanstack/react-query"


interface Filters {
    navigation_header?: number;
    category?: number[];
    sub_category?: number[];
    name?: string;
}



const useProducts = (filters:Filters) => {
    console.log(filters, 'filters in use products')
    return useQuery({ queryKey: ['products', filters], queryFn: () => getApis.getProducts(filters), staleTime:5*60*1000} )

}


export default useProducts