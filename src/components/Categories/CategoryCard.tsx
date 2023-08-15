import { ProductsType } from '../../../typings';
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'

interface CategoryCardProps {
  products: ProductsType[];
}

const CategoryCard: React.FC<CategoryCardProps> = ({ products })=>{
    return (
      <div className=' keen-slider__slide flex flex-col gap-5 px-12 h-96 justify-evenly items-center  bg-[#F9F9FB]'>
         {products.map((product) => (
        <div key={product.id}>
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          {/* Display other product details */}
        </div>
      ))}
        {/* <img src={products.image} alt='bag' />
        <button className='border bg-[#fff] rounded-none w-44 p-2 text-[#030822] text-lg font-medium'>American Turistor</button> */}
      </div>
  
    )
  }

export default CategoryCard;