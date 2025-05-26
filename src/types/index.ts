import { ComponentType, SVGProps } from "react";
export interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  price: number;
}

export interface DeliverPerson {
  id: string;
  name: string;
  phone: string;
  warehouseId: number;
}

export interface Warehouse {
  id: string,
  name: string,
  pincode: number
}

export interface Inventories {
  id: number;
  sku: string;
  warehouse: string;
  product: string;
}

export interface InventoryData {
  sku: string;
  warehouseId: number;
  productId: number;
}

// export interface Product {
//     id: string;
//     name: string;
//     description: string;
//     price: number;
//     originalPrice?: number;
//     image: string;
//     category: string;
//     categoryId: string;
//     rating: number;
//     reviewCount: number;
//     discount: number;
//     inStock: boolean;
//   }

export interface Category {
  id: string;
  name: string;
  productCount: number;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
}

export interface Testimonial {
  id: string;
  name: string;
  avatar: string;
  rating: number;
  comment: string;
  location: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}
