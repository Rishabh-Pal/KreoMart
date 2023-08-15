"use client";
import {useEffect} from 'react';
import Hero from "@/components/Hero/Hero";
import { NewArrivals } from "@/components/Categories/NewArrivals";
import Event  from "@/components/Event/Event";
import { Feature } from "@/components/feature/Feature";
import { Sellers } from "@/components/sellerArrival/Seller";
import { Newsletter } from "@/components/newsLetter/NewsLetter";
import Insta from "@/components/Insta/Instapage";
import { useRouter } from "next/navigation";
import { HeroData } from '../../typings';
import Login from '@/components/Form/Login/Login';

const heroData: HeroData[] = [
  {
    id: 1,
    title: 'Amazing discounts',
    image: '/assets/hero_img.png',
    description: 'We started with humble beginnings — Your one-stop shop for trendy products and exclusive deals.',
  },
];

const Home=()=>{
  const router = useRouter();
  let accessToken: string | null = null;

  if (typeof window !== 'undefined') {
    accessToken = localStorage.getItem('access_token');
  }
  useEffect(()=>{
    if (!accessToken) {
      router.push('/login'); // Redirect to login if access token is not present
    }
  }, [accessToken, router]);
  
  if (!accessToken) {
    return <div>
      <Login/>
    </div>;
  }
  return (
    <>
      
      {heroData.map((hero) => (
        <Hero key={hero.id} data={hero} />
      ))}
          <NewArrivals/>
          <Sellers/>
          <Newsletter/>
          <Event/>
          <Insta/>
          <Feature/>
        
    </>
  )
}

export default Home;




