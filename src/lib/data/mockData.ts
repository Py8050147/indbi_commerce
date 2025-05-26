import { Product, Category, Testimonial, FAQ } from "@/types";
import { ShoppingBag, Laptop, Home, ShoppingCart, Tag } from 'lucide-react';


// Mock Categories
export const categories: Category[] = [
    { 
        id: 'electronics', 
        name: 'Electronics', 
        productCount: 42,
        icon: Laptop,
      },
      { 
        id: 'clothing', 
        name: 'Clothing', 
        productCount: 56,
        icon: ShoppingBag,
      },
      { 
        id: 'home', 
        name: 'Home & Living', 
        productCount: 38,
        icon: Home,
      },
      { 
        id: 'groceries', 
        name: 'Groceries', 
        productCount: 24,
        icon: ShoppingCart,
      },
      { 
        id: 'beauty', 
        name: 'Beauty', 
        productCount: 31,
        icon: Tag,
      },
      { 
        id: 'toys', 
        name: 'Toys & Games', 
        productCount: 19,
        icon: ShoppingBag,
      },
];

// Mock Products
export const products: Product[] = [
  {
    id: '1',
    name: 'Wireless Bluetooth Headphones',
    description: 'High-quality wireless headphones with noise cancellation and long battery life.',
    price: 129.99,
    image: '/headphone.png',
    // // category: 'Electronics',
    // categoryId: 'electronics',
    // rating: 4.5,
    // reviewCount: 127,
    // discount: 19,
    // inStock: true
  },
  {
    id: '2',
    name: 'Smart Watch with Fitness Tracker',
    description: 'Track your fitness goals with this advanced smartwatch. Features heart rate monitor and GPS.',
    price: 89.99,
    // originalPrice: 99.99,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=500',
    // category: 'Electronics',
    // categoryId: 'electronics',
    // rating: 4,
    // reviewCount: 98,
    // discount: 10,
    // inStock: true
  },
  {
    id: '3',
    name: 'Cotton Casual T-Shirt',
    description: 'Comfortable cotton t-shirt perfect for daily wear. Available in multiple colors.',
    price: 24.99,
    image: 'https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=500',
    // category: 'Clothing',
    // categoryId: 'clothing',
    // rating: 4.2,
    // reviewCount: 156,
    // discount: 0,
    // inStock: true
  },
  {
    id: '4',
    name: 'Modern Coffee Table',
    description: 'Elegant coffee table with minimalist design, perfect for any living room.',
    price: 149.99,
    // originalPrice: 199.99,
    image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=500',
    // category: 'Home & Living',
    // categoryId: 'home',
    // rating: 4.7,
    // reviewCount: 42,
    // discount: 25,
    // inStock: true
  },
  {
    id: '5',
    name: 'Organic Tea Set',
    description: 'Selection of premium organic teas in an elegant gift box.',
    price: 34.99,
    image: 'https://images.unsplash.com/photo-1523920290228-4f321a939b4c?auto=format&fit=crop&w=500',
    // category: 'Groceries',
    // categoryId: 'groceries',
    // rating: 4.8,
    // reviewCount: 73,
    // discount: 0,
    // inStock: true
  },
  {
    id: '6',
    name: 'Natural Face Cream',
    description: 'Hydrating face cream made with natural ingredients for all skin types.',
    price: 29.99,
    // originalPrice: 39.99,
    image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&w=500',
    // category: 'Beauty',
    // categoryId: 'beauty',
    // rating: 4.3,
    // reviewCount: 89,
    // discount: 25,
    // inStock: true
  },
  {
    id: '7',
    name: 'Educational Building Blocks',
    description: 'Fun and educational building blocks for children ages 3+.',
    price: 19.99,
    image: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=500',
    // category: 'Toys & Games',
    // categoryId: 'toys',
    // rating: 4.6,
    // reviewCount: 112,
    // discount: 0,
    // inStock: true
  },
  {
    id: '8',
    name: 'Professional Chef Knife',
    description: 'High-quality stainless steel chef knife for professional cooking.',
    price: 79.99,
    // originalPrice: 99.99,
    image: 'https://images.unsplash.com/photo-1593618998160-e34014e67546?auto=format&fit=crop&w=500',
    // category: 'Home & Living',
    // categoryId: 'home',
    // rating: 4.9,
    // reviewCount: 67,
    // discount: 20,
    // inStock: true
  }
];

// Mock Testimonials
export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    avatar: 'https://images.unsplash.com/photo-1517308883849-ceac3c24681e?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    rating: 5,
    comment: 'I absolutely love shopping here! The products are high quality and the customer service is exceptional. Will definitely be a returning customer.',
    location: 'New York, USA'
  },
  {
    id: '2',
    name: 'Michael Chen',
    avatar: 'https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    rating: 4,
    comment: 'Great selection of products at competitive prices. The shipping was faster than I expected and everything arrived in perfect condition.',
    location: 'Toronto, Canada'
  },
  {
    id: '3',
    name: 'Emma Wilson',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    rating: 5,
    comment: 'The quality of the items I purchased exceeded my expectations. The website is also very easy to navigate, making shopping a breeze!',
    location: 'London, UK'
  }
];

// Mock FAQs
export const faqs: FAQ[] = [
  {
    id: '1',
    question: 'How long does shipping take?',
    answer: 'Domestic shipping typically takes 3-5 business days. International shipping may take 7-14 business days depending on the destination country.'
  },
  {
    id: '2',
    question: 'What is your return policy?',
    answer: 'We offer a 30-day return policy for most items. Products must be in original condition with tags attached and original packaging. Some exceptions apply for hygiene products.'
  },
  {
    id: '3',
    question: 'Do you offer international shipping?',
    answer: 'Yes, we ship to most countries worldwide. Shipping costs and delivery times vary based on the destination. You can see the shipping options during checkout.'
  },
  {
    id: '4',
    question: 'How can I track my order?',
    answer: 'Once your order ships, you will receive a confirmation email with a tracking number. You can use this number on our website or the carrier\'s website to track your package.'
  },
  {
    id: '5',
    question: 'Are there any discounts for bulk orders?',
    answer: 'Yes, we offer special discounts for bulk purchases. Please contact our customer service team for more information about bulk pricing.'
  }
];
