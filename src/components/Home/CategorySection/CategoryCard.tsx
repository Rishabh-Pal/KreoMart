import Link from "next/link";
import { ProductsType } from "../../../../typings";
// import { useKeenSlider } from 'keen-slider/react'
// import 'keen-slider/keen-slider.min.css'
import { CategoryType } from "./CategorySection";
import Image from "next/image";
import route from "@/routes";
interface CategoryCardProps {
  products: CategoryType;
}
const CategoryCard: React.FC<CategoryCardProps> = ({ products }) => {
  return (
    <div className=" bg-white p-10 relative  flex flex-col items-center justify-center gap-8 text-center text-lg text-primary font-semibold">
      <div
        key={products.id}
        className=" h-[235px]  aspect-square flex  items-center justify-center  box-border gap-[32px]"
      >
        <Image
          className=" object-cover w-full h-full "
          src={products.image}
          alt={products.name}
          height={260}
          width={260}
        />
      </div>
      <div className="rounded-sm flex  items-center justify-center ">
        <Link
          href={route.Products}
          className="relative tracking-[-0.4px] leading-[130%] text-xl font-normal inline-block w-16"
        >
          {products.name}
        </Link>
      </div>
    </div>
  );
};
export default CategoryCard;
