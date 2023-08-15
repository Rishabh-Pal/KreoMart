"use client";

import { cn } from "@/lib/utils";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import Link from "next/link";
import React from "react";
import styles from "./header.module.css";
import Login from "../Form/Login/Login";

import Register from "../Form/Register/Register";

import Image from "next/image";

import Shop from "@/app/shop/page";
import SearchDropdown from "@/app/Search/SearchDropdown";

import { useState } from "react";

import { BsBag } from "react-icons/bs";
import { HiOutlineUser } from "react-icons/hi";
import { CiSearch } from "react-icons/ci";
import Cart from "@/app/Cart/page";

import { useRouter } from "next/navigation";

import { AiOutlineMenuUnfold, AiOutlineMenuFold } from "react-icons/ai";

const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };
  const handleCartClick=()=>{
    router.push('/cart');
  }

  const router = useRouter();
  const handleClick = () => {
    router.push("/Cart");
  };

  return (
    <header className={styles.header}>
      <div className={styles.menu}>
        <Link href="/profile">
          {" "}
          <AiOutlineMenuUnfold size={"1.5rem"} />{" "}
        </Link>
      </div>

      <div className={styles.logo}>
        <Link href="/" className={styles.logo__img}>
          <Image src={"/assets/logo.svg"} fill={true} alt="kreomart-logo" />
        </Link>
      </div>

      <div className={styles.logo__mobo}>
        <Link href="/" className={styles.mobo__img}>
          <Image
            src={"/assets/logo-mobo.svg"}
            fill={true}
            alt="kreomart-logo"
          />
        </Link>
      </div>

      <NavigationMenu className={styles.nav}>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Shop</NavigationMenuTrigger>

            <NavigationMenuContent>
              <Shop />
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link href="/newarrivals" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                New Arrivals
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/bestsellers" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Best Sellers
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/about" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                About
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <div className={`${styles.search} relative`}>
        <CiSearch />
        <input
          type="search"
          onFocus={() => setIsSearchOpen(true)}
          onChange={(e) => {
            if (e.target.value === "") setIsSearchOpen(false);
            else setIsSearchOpen(true);
          }}
          placeholder="Search"
        />
        {isSearchOpen && <SearchDropdown />}
      </div>

      <div className={styles.icons}>
        <button>
          <HiOutlineUser />
        </button>
        <div onClick={handleCartClick}>
          <BsBag/>
        </div>
        {/* <Link href="/cart">
          <BsBag />
        </Link> */}
      </div>
    </header>
  );
};

export default Header;
