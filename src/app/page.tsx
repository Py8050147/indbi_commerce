
import Faq from "@/components/faq";
import Featured from "@/components/featured";
import Hero from "@/components/hero";
import Testimonial from "@/components/testimonial";
import { faqs, products, testimonials } from "@/lib/data/mockData";



export default function Home() {
  return (
    <>
      <div className=" container px-2 py-10 w-full min-h-screen">

        <Hero />
        <Featured products={products} />
        <Testimonial testimonials={testimonials} />
        <Faq faqs={faqs} />
      </div>
    </>
  
  );
}
