interface Product {
  price: number;
  color: any;
  size: any;
  category: any;
  id: string;
  name: string;
  slug: string;
  description: string;
  assets: {
    preview: string;
  }[];
  variants: {
    id: string;
    productId: string;
    price: number;
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
    items: Product[];
  };
}

// interface ProductData{ 
//   data: ProductsType;
//   id:number
// }

interface ProductsType{
  id: number;
  name: string;
  description: string;
  price: string;
  brand: string;
  image: string;
  category: string;
  quantity: number;
}

interface TimeExpires{
  id: number;
  days: number;
  minutes: number;
  seconds: number;
}

interface EventData{
  id: number;
  image: string;
  description: string;
  time: TimeExpires;
}

