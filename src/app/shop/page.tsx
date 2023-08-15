"use client";
import { NavigationMenu, NavigationMenuLink } from '@/components/ui/navigation-menu'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'




interface SubCategoryProps {
  title: string;
  link: string;
}

interface CategoryProps {
  title: string;
  img: string;
  sublinks: SubCategoryProps[];
}

const navigationMenuList: { banner: string; links: CategoryProps[] }[] =[
  {
  banner:"/assets/Banner.svg",
  links:[
  {
    title:"Kitchen Accessories",
    img:"/assets/Kitchen accessories.svg",
    sublinks:[
      {
        title:"Skinny jeans",
        link:'kl'
      },
      {
        title:"Spray on jeans",
        link:'kl'
      },
      {
        title:"Slim jeans",
        link:'kl'
      },
      {
        title:"Relaxed jeans",
        link:'kl'
      },
      {
        title:"Shop All",
        link:'kl'
      }
    ]

  },
  {
    title:"Tshirts",
    img:"/assets/Tshirts.svg",
    sublinks:[
      {
        title:"Skinny jeans",
        link:""
      },
      {
        title:"Spray on jeans",
        link:""
      },
      {
        title:"Slim jeans",
        link:""
      },
      {
        title:"Relaxed jeans",
        link:""
      },
      {
        title:"Shop All",
        link:""
      }
    ]
  },
  {
    title:"Footware",
    img:"/assets/Footware.svg",
    sublinks:[
      {
        title:"Skinny jeans",
        link:""
      },
      {
        title:"Spray on jeans",
        link:""
      },
      {
        title:"Slim jeans",
        link:""
      },
      {
        title:"Relaxed jeans",
        link:""
      },
      {
        title:"Shop All",
        link:""
      }
    ]
  }]
}
]

const Shop: React.FC = () => {
  return (
    <NavigationMenu>
    <ul className=" flex gap-2 p-6 md:w-[400px] lg:w-[500px] "> 
      {navigationMenuList[0].links.map((item, index) => {
        return (
          <NavigationMenuLink asChild key={index}>
            <ListItem img={item.img} category={item.title} subCategory={item.sublinks} />
          </NavigationMenuLink>
        )
      })}
      <NavigationMenuLink asChild>
        <Image src={navigationMenuList[0].banner} alt="" />
      </NavigationMenuLink>
    </ul>
   
    </NavigationMenu>
  )
}

export default Shop;


interface ListItemProps {
  img: string;
  category: string;
  subCategory: SubCategoryProps[];
}

const ListItem: React.FC<ListItemProps> = ({ img, category, subCategory }) => {
  return (
    <div className=''>
      <div className="img">
        <img src={img} alt="" />
      </div>
      <div className="category">
        <h1 className='text-lg font-bold' >{category}</h1>

        {subCategory.map((item, index) => {
          return (
            <div key={index} className="subCategory">
              <Link href={item.link}>
                {item.title}
              </Link>
            </div>
          )
        })}

      </div>

    </div>
  )
}