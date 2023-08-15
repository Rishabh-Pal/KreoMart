import React from "react";
import Products from '@/components/BestSeller/Products';
import Pagination from "@/components/BestSeller/Pagination";


const Related_products= ()=>{
    return(
        <main>
            <div className="flex justify-between">
                <div className="font-semibold text-[32px] py-10">Related Products</div>
                <div className="py-14 text-[32px]"><Pagination/></div>       
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                <Products/>
                <Products/>
                <Products/>
                <Products/>
            </div>

        </main>
    )
};

export default Related_products;