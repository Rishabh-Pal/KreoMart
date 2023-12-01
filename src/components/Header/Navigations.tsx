"use client";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuLink,
} from "../ui/navigation-menu";
import Image from "next/image";
import { Category, Navigation } from "../../../typings";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "../ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import route from "@/routes";
import Icon from "../shared/Icon";
import React from "react";

interface NavigationsProps {
  navMenus: Navigation[];
  categories: Category[];
}

interface ListItemProps {
  image: string;
  navMenu?: Navigation;
  category: Category;
  subCategory: {
    id: number;
    name: string;
  }[];
}

interface CategoriesProps {
  navMenu: Navigation;
  menus: Category[];
  nav: {
    id: number;
    name: string;
  }[];
  img: string;
}

export const DesktopNavigations = ({
  navMenus,
  categories,
  className,
}: {
  navMenus: Navigation[];
  categories: Category[];
  className?: string;
}) => {
  return (
    <NavigationMenu className={`${className}`}>
      <NavigationMenuList className=" items-baseline  ">
        {navMenus?.map((menu: Navigation, menuIndex: number) => (
          <NavigationMenuItem key={menuIndex} className="">
            <NavigationMenuTrigger className="bg-background  text-base lg:text-lg  flex flex-row items-start justify-start lg:px-8 md:px-0 px-0 ">
              {menu?.name}
            </NavigationMenuTrigger>

            <NavigationMenuContent className="bg-background  w-full">
              <div className="w-full">
                <Categories
                  navMenu={menu}
                  menus={categories}
                  nav={menu.categories}
                  img={menu.image}
                />
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};


const Categories: React.FC<CategoriesProps> = ({navMenu, menus, nav, img }) => {
  console.log(menus, "menus"); // all categories
  console.log(nav, "nav"); // categories in navigation

  const filteredCategories = menus?.filter((category: Category) => nav.some((item:{id:number, name:string}) => item.id === category.id));

  console.log(filteredCategories, "filteredCategories");
  return (
    <div className="bg-white h-fit max-h-screen w-screen overflow-auto max-w-screen-3xl flex gap-6 justify-between items-start p-20 ">
      <div className="flex gap-6  flex-1 justify-between flex-wrap  text-base text-primary  ">
        {filteredCategories?.map((item: Category, index: number) => {
          return (
            <div key={index} className="flex max-w-fit   flex-col gap-2 ">
              <div className="mb-4">
                <Image
                  src={`${item?.image || "/assets/placeholder.png"}`}
                  alt={"wood"}
                  width={262}
                  height={100}
                  className="object-bottom object-cover aspect-video"
                  placeholder="blur"
                  blurDataURL="/assets/placeholder.png"
                />
              </div>

              <ListItem
                navMenu={navMenu}
                image={item?.image}
                category={item}
                subCategory={item?.sub_categories}
              />

            </div>
          );
        })}
      </div>

         <Image
        src={`${img || "/assets/placeholder.png"}`}
        alt={"banner"}
        height={269}
        width={259}
        className="object-contain aspect-auto"
        placeholder="blur"
        blurDataURL="/assets/placeholder.png"
      />

     
    </div>
  );
};

const ListItem: React.FC<ListItemProps> = ({
  navMenu,
  image,
  category,
  subCategory,
}) => {

  console.log(category, 'category')

  return (
    <div>
      <Link href={{
        pathname:`${route.Products}/${navMenu?.id}`,
        query:{cg: category.id},
        }}>
        <NavigationMenuLink>
          <span className="text-lg font-bold">{category.name}</span>
        </NavigationMenuLink>
      </Link>
      {subCategory?.map((item, index) => {
        return (
          <div key={index}>
            <Link href={{
              pathname:`${route.Products}/${navMenu?.id}/`,
              query: {
                cg: category.id,
                sc: item.id
              },
              }}
              prefetch={false}
              >
              <NavigationMenuLink>{item?.name}</NavigationMenuLink>
            </Link>
          </div>
        );
      })}
    </div>
  );
};



// mobile navigation

export const MobileNavigation = ({
  navMenus,
  categories,
}: {
  navMenus: Navigation[];
  categories: Category[];
}) => {

  const navSheetClose = React.useRef<HTMLButtonElement>(null);


  // create a click event listener for the sheet close button
  const closeNavSheet = () => {
      // click the close button
      navSheetClose.current?.click();
  }

  const MobileCategories: React.FC<CategoriesProps> = ({navMenu, menus, nav }) => {
    const filteredCategories = menus.filter((category: Category) => {
      return nav.some((item:{id:number, name:string}) => item.id === category.id)
    });
    return (
      <div className="m-4 pr-4  bg-white">
        <Accordion type="single" collapsible className="w-full ">
          {filteredCategories.map((item: Category) => {
            return (
              <AccordionItem
                value={item.name}
                key={item.name}
                className="text-xl text-primary"
              >
                <AccordionTrigger className="text-xl text-primary ml-8">
                  {item.name}
                </AccordionTrigger>
                <AccordionContent className="text-xl">
                  <MobileListItem
                    subCategory={item.sub_categories}
                    navMenu={navMenu}
                    image={item.image}
                    category={item}
                  />
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>
    );
  };
  
  
  const MobileListItem: React.FC<ListItemProps> = ({ subCategory, navMenu, category }) => {
    const handleClickdialog = () => {
      return DialogPrimitive.Close;
    };
    return (
      <div>
        <div>
          {subCategory.map((item, index) => {
            return (
              <div key={index}>
                <div
                  className="bg-gray-100 border rounded hover:bg-white ml-8 p-2 my-1 hover:shadow cursor-pointer"
                  onClick={handleClickdialog}
                > 
                    <SheetClose onClick={closeNavSheet}>
                    <Link href={`${route.Products}/${navMenu?.id}?cg=${category.id}&sc=${item.id}`}>
                      {item.name}
                    </Link>
                    </SheetClose>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };



  return (
    <div className="lg:hidden mr-3 items-center">
      <Sheet>
        <SheetTrigger>
          <div className="relative w-12 h-12 mt-3">
            <Icon
              name={"menu"}
              size={30}
              // src={"/assets/menu.svg"}
              // width={30}
              // height={30}
              // alt="mobo-menu"
            />
          </div>
        </SheetTrigger>
        <SheetContent side="left">
          <div className=" items-center flex justify-between  mb-12">
            <Link href="/" className="relative w-36 min-w-20 h-8  mr-12 flex">
              <Image src={"/assets/logo.svg"} fill={true} alt="kreomart-logo" />
            </Link>
            <SheetClose ref={navSheetClose}>
              <Icon name='Close' size={25}/>
            </SheetClose>
          </div>
          <div className="text-xl">Shop by</div>
          <div className="p-2 mt-5 bg-gray-100 flex flex-col gap-2 rounded-lg ">
            {navMenus?.map((menu: Navigation, menuIndex: number) => (
              <div
                className="bg-white border  text-center cursor-pointer rounded-lg justify-between"
                key={menuIndex}
              >
                <Sheet>
                  <SheetTrigger className="flex justify-between w-full p-4 text-xl items-center  text-primary">
                  
                      <div className="flex-item"> {menu.name}</div>
                      <div className="flex-item">
                        <Icon
                        name="ArrowRight"
                        size={20}
                        />
                      </div>
                  </SheetTrigger>
                  <SheetContent side="left" className="text-[20px]">
                    <div className="flex gap-4 h-[40px] items-center ">
                     <SheetClose>
                     <Icon
                        name="arrow-left"
                        size={20}
                      />
                     </SheetClose>
                      <div className="text-xl text-primary">{menu.name}</div>
                    </div>
                    <MobileCategories
                      navMenu={menu}
                      menus={categories}
                      nav={menu.categories}
                      img={""}
                    />
                  </SheetContent>
                </Sheet>
              </div>
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};




