import React from 'react'
import { Button } from './ui/button'
import Image from 'next/image'

const Hero = () => {
    return (
        <section className="relative bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-gray-900 dark:to-indigo-950 py-20">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center justify-between">
                    <div className="md:w-1/2 mb-10 md:mb-0">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight dark:text-white">
                            Discover <span className="text-indigo-600/70">Amazing</span> Products for Your Lifestyle
                        </h1>
                        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-lg">
                            Explore our curated collection of high-quality products designed to enhance your everyday life. From fashion to electronics, we've got you covered.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Button size="lg" className="bg-primary hover:bg-primary-dark">
                                Shop Now
                            </Button>
                            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 dark:text-primary-light dark:border-primary-light">
                                View Categories
                            </Button>
                        </div>
                    </div>
                    <div className="md:w-1/2 relative">
                        <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
                            <Image
                                src={"/hero.png"}
                              alt="Commerce Logo"
                              width={500}
                              height={400}
                              className="w-full h-auto object-cover"
                            />
                        </div>
                        <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-primary/10 dark:bg-primary/5 rounded-full -z-10"></div>
                        <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/20 dark:bg-primary/10 rounded-full -z-10"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
