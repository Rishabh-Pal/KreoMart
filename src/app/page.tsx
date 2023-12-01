import { Category } from "@/components/Home/CategorySection/Category";
import Event from "@/components/Home/OfferSection/OfferSection";
import { Feature } from "@/components/FeatureSection/Feature";
import { FeaturedProducts } from "@/components/Home/FeaturedProducts/FeaturedProducts";
import { HeroData } from "../../typings";
import { BannerOne } from "@/components/Home/Banner/BannerOne";
import { Newsletter } from "@/components/Home/ContactSection/Contact";
import { HeroSection } from "@/components/Home";

const heroData: HeroData[] = [
  {
    id: 1,
    title: "Amazing discounts",
    image: "/assets/Trending.jpg",
    description:
      "We started with humble beginnings — Your one-stop shop for trendy products and exclusive deals.",
  },
  {
    id: 2,
    title: "Amazing Offers",
    image: "/assets/bannerBag.jpg",
    description:
      "We started with humble beginnings — Your one-stop shop for trendy products and exclusive deals.",
  },
  {
    id: 3,
    title: "New Sales of Friday",
    image: "/assets/1.jpg",
    description:
      "We started with humble beginnings — Your one-stop shop for trendy products and exclusive deals.",
  },
  {
    id: 4,
    title: "Thursday Market Offers",
    image: "/assets/2.jpg",
    description:
      "We started with humble beginnings — Your one-stop shop for trendy products and exclusive deals.",
  },
  {
    id: 5,
    title: "KreoMart Magical Offers",
    image: "/assets/ts4.PNG",
    description:
      "We started with humble beginnings — Your one-stop shop for trendy products and exclusive deals.",
  },
];

const Home = () => {
  return (
    <>
      <HeroSection data={heroData} />
    <div className="px-8 mx-auto max-w-screen-3xl">
      <Category />
      <BannerOne />
      <FeaturedProducts />
      <Newsletter />
      <Event />
      <Feature />
    </div>
    </>
  );
};

export default Home;
