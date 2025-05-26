import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQ } from '@/types';

interface FAQSectionProps {
  faqs: FAQ[];
}

const Faq = ({ faqs }: FAQSectionProps) => {
  return (
    <section className="py-16 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2 text-center dark:text-white">Frequently Asked Questions</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-10 text-center max-w-xl mx-auto">
          Find answers to the most common questions about our products and services.
        </p>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq) => (
              <AccordionItem key={faq.id} value={faq.id} className="dark:border-gray-700">
                <AccordionTrigger className="text-lg font-medium dark:text-white">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 dark:text-gray-400">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}

export default Faq
