import React from 'react'
import { Product } from '@/types'
import { Card, CardContent, CardFooter } from './ui/card'
import { Button } from './ui/button'
import { ShoppingCart } from 'lucide-react'
import Image from 'next/image'

interface FeaturedProductsProps {
  products: Product[];
}

const Featured = ({ products }: FeaturedProductsProps) => {
  return (
    <>
      <section className="py-16 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-10">
            <div>
              <h2 className="text-3xl font-bold mb-2 dark:text-gray-100">Featured Products</h2>
              <p className="text-gray-600 dark:text-gray-400">Discover our most popular items loved by customers</p>
            </div>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
              View All
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products?.map((product) => (
              <Card key={product.id} className="overflow-hidden transition-all duration-300 hover:shadow-lg dark:bg-gray-800 dark:border-gray-700">
                <div className="relative pb-[100%] overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={300}
                    height={300}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                  {/* {product.discount > 0 && (
                <div className="absolute top-2 right-2 bg-primary text-white text-xs font-bold px-2 py-1 rounded">
                  {product.discount}% OFF
                </div>
              )} */}
                </div>

                <CardContent className="pt-4">
                  {/* <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">{product.category}</div> */}
                  <h3 className="font-semibold text-lg mb-1 line-clamp-2 dark:text-white">{product.name}</h3>
                  <div className="flex items-center space-x-2">
                    <span className="font-bold text-lg dark:text-white">${product.price.toFixed(2)}</span>
                    {/* {product.originalPrice && (
                  <span className="text-gray-500 dark:text-gray-400 line-through text-sm">${product.originalPrice.toFixed(2)}</span>
                )} */}
                  </div>

                  {/* <div className="flex items-center mt-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg 
                      key={i} 
                      className={`w-4 h-4 ${i < product.rating ? 'text-yellow-400' : 'text-gray-300 dark:text-gray-600'}`}
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-xs text-gray-500 dark:text-gray-400 ml-1">({product.reviewCount})</span>
              </div> */}
                </CardContent>

                <CardFooter className="pt-0">
                  <Button className="w-full bg-primary hover:bg-primary-dark gap-2">
                    <ShoppingCart className="h-4 w-4" /> Add to Cart
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Featured
