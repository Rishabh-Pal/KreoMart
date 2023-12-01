export interface ProductItem {
  id: number;
  category: string;
  name: string;
  slug: string;
  description: string;
  preview_image: string;
  product_variant: {
    id: number;
    price: number;
    discount_price: number;
    quantity: number;
  }[];
}
export interface PRODUCT {
  count: number;
  next: string;
  previous: number | null;
  results: ProductItem[];
}

export interface ProductDetail {
  id: number;
  slug: string;
  name: string;
  description: string;
  additional_information: string;
  preview_image: string;
  assets: string[];
  category: string;
  product_variant: {
    id: number;
    color: string;
    size: string;
    price: number;
    discount_price: number;
    quantity: number;
    assets: string[];
    preview_image: string;
  }[];
}

export interface HeroData {
  id: number;
  title: string;
  image: string;
  description: string;
}

interface ProductListResponse {
  products: {
    items: PRODUCT[];
  };
}

interface ProductsType {
  id: number;
  name: string;
  description: string;
  price: string;
  brand: string;
  image: string;
  category: string;
  quantity: number;
}

interface PriceOptions {
  500: string;
  5000: string;
  // 10000: string;
  // range_min: string;
}

interface CategoryOptions {
  tshirt: boolean;
  bag: boolean;
  umbrella: boolean;
  bottle: boolean;
}

interface Filterdata {
  category: CategoryOptions;
  priceRange: PriceOptions;
  sizes: string;
  colors: string;
}

interface TimeExpires {
  id: number;
  days: number;
  minutes: number;
  seconds: number;
}

interface EventData {
  id: number;
  image: string;
  description: string;
  time: TimeExpires;
}

// ----------------------------
export interface Navigation {
  id: number;
  name: string;
  categories: {
    id: number;
    name: string;
  }[];
  image: string;
}

export interface Category {
  id: number;
  name: string;
  image: string;
  sub_categories: SubCategory[];
}

export interface SubCategory {
  id: number;
  name: string;
}

export interface CartDetail {
  cart_item: CartItem[];
  total_cart_items: number;
  total_price: number;
  user: number;
  cart_id: any;
}
export interface CartItem {
  id: number;
  cart: any;
  product_variant: {
    id: number;
    price: number;
    discount_price: number;
    assets: string[];
    preview_image: string;
  };
  quantity: number;
}

export interface SingleCartDetail {
  id: number;
  variant_id: number;
  quantity: number;
}
export interface PostCartData {
  product_variant: number;
  quantity: number;
}

export interface slideItem {
  img: string;
  description: string;
  dis_price: string;
  price: string;
}
