import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Testimonial } from '@/types';
import Image from 'next/image';

interface TestimonialSectionProps {
    testimonials: Testimonial[];
}


const Testimonial = ({ testimonials }: TestimonialSectionProps) => {
    return (
        <>
            <section className="py-16 bg-gradient-to-b from-white to-purple-50 dark:from-gray-900 dark:to-gray-800">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-2 text-center dark:text-white">What Our Customers Say</h2>
                    <p className="text-gray-600 dark:text-gray-400 mb-10 text-center max-w-xl mx-auto">
                        Don't just take our word for it - hear from some of our satisfied customers!
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {testimonials.map((testimonial) => (
                            <Card key={testimonial.id} className="bg-white dark:bg-gray-800 border-none shadow-md">
                                <CardContent className="p-6">
                                    <div className="flex items-center mb-4">
                                        {[...Array(5)].map((_, i) => (
                                            <svg
                                                key={i}
                                                className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300 dark:text-gray-600'}`}
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                            >
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        ))}
                                    </div>

                                    <p className="text-gray-700 dark:text-gray-300 mb-6 italic">"{testimonial.comment}"</p>

                                    <div className="flex items-center">
                                        <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
                                            <Image
                                                src={testimonial.avatar}
                                                alt={testimonial.name}
                                                width={48}
                                                height={48}
                                                className="h-full w-full object-cover"
                                            />
                                        </div>
                                        <div>
                                            <h4 className="font-medium dark:text-white">{testimonial.name}</h4>
                                            <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.location}</p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Testimonial
