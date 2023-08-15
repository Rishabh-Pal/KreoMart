import React from 'react'
import Single_product from '../../components/BestSeller/Single_product'
import Related_products from '../../components/BestSeller/Related_products'
import Product_detail from '../../components/BestSeller/Product_detail'
// import { useAuth } from '../Auth/AuthContext'
// import About from '../about/page'

const BestSellers = () => {
  // const { accessToken } = useAuth();
  return (
    <div className='sm:px-[50px] md:px-[50px]'>
      {/* {accessToken?
      <div> */}
        <Single_product/>
        <Product_detail/>
        <Related_products/> 
      {/* </div>:
      <div>
        <About/>
      </div>
      } */}
    </div>
  );
};

export default BestSellers;
