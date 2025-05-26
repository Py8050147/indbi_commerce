import React from 'react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import Link from 'next/link'
const Footer = () => {
  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white">
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <h3 className="text-lg font-bold mb-4">ShopEase</h3>
          <p className="text-gray-300 mb-4">Your one-stop destination for all your shopping needs with the best prices and quality products.</p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-300 hover:text-white">
              <span className="sr-only">Facebook</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              <span className="sr-only">Instagram</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465.668.25 1.235.6 1.8 1.163.562.562.913 1.128 1.163 1.8.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 3.987-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.163 1.8c-.562.563-1.123.913-1.8 1.163-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-3.987-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.8-1.163c-.563-.562-.913-1.123-1.163-1.8-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427.25-.669.6-1.235 1.163-1.8.562-.562 1.128-.913 1.8-1.163.636-.247 1.363-.416 2.427-.465C9.576 2.013 9.974 2 12.315 2zm0 1.802h-.63c-2.22 0-2.551.011-3.449.057-.915.041-1.41.194-1.741.323-.466.181-.8.398-1.151.748a3.15 3.15 0 00-.748 1.15c-.129.33-.282.826-.323 1.742-.046.893-.057 1.22-.057 3.448s.011 2.555.057 3.449c.041.914.194 1.41.323 1.74.177.467.394.8.748 1.152.35.35.682.566 1.15.748.33.129.826.282 1.742.323.898.046 1.224.057 3.449.057s2.551-.01 3.449-.057c.915-.041 1.41-.194 1.741-.323a3.14 3.14 0 001.152-.748c.35-.35.566-.683.748-1.151.128-.33.283-.826.323-1.742.046-.893.057-1.224.057-3.448 0-2.224-.01-2.555-.057-3.448-.04-.915-.195-1.41-.323-1.742a3.137 3.137 0 00-.748-1.15 3.15 3.15 0 00-1.151-.748c-.33-.129-.826-.283-1.742-.323-.898-.046-1.229-.057-3.449-.057zm0 12.993a4.46 4.46 0 110-8.92 4.46 4.46 0 010 8.92zm0-11.326a6.865 6.865 0 100 13.73 6.865 6.865 0 000-13.73zm6.181.106a1.604 1.604 0 11-3.208 0 1.604 1.604 0 013.208 0z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              <span className="sr-only">Twitter</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="text-gray-300 hover:text-white">Home</Link>
            </li>
            <li>
              <a href="/products" className="text-gray-300 hover:text-white">Shop</a>
            </li>
            <li>
              <a href="/categories" className="text-gray-300 hover:text-white">Categories</a>
            </li>
            <li>
              <a href="/about" className="text-gray-300 hover:text-white">About Us</a>
            </li>
            <li>
              <a href="/contact" className="text-gray-300 hover:text-white">Contact</a>
            </li>
          </ul>
        </div>

        {/* Customer Service */}
        <div>
          <h3 className="text-lg font-bold mb-4">Customer Service</h3>
          <ul className="space-y-2">
            <li>
              <a href="/faq" className="text-gray-300 hover:text-white">FAQ</a>
            </li>
            <li>
              <a href="/shipping" className="text-gray-300 hover:text-white">Shipping Policy</a>
            </li>
            <li>
              <a href="/returns" className="text-gray-300 hover:text-white">Returns & Refunds</a>
            </li>
            <li>
              <a href="/privacy" className="text-gray-300 hover:text-white">Privacy Policy</a>
            </li>
            <li>
              <a href="/terms" className="text-gray-300 hover:text-white">Terms & Conditions</a>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-bold mb-4">Subscribe to Our Newsletter</h3>
          <p className="text-gray-300 mb-4">Get the latest updates, deals, and exclusive offers directly to your inbox.</p>
          <form className="flex flex-col space-y-2">
            <Input type="email" placeholder="Your Email Address" className="bg-gray-800 border-gray-700 focus:border-primary text-white" />
            <Button className="bg-primary hover:bg-primary-dark">Subscribe</Button>
          </form>
        </div>
      </div>

      <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
        <p className="text-gray-400 text-sm mb-4 md:mb-0">&copy; {new Date().getFullYear()} ShopEase. All rights reserved.</p>
        <div className="flex items-center space-x-4">
          <a href="/privacy" className="text-gray-400 text-sm hover:text-white">Privacy Policy</a>
          <span className="text-gray-600">|</span>
          <a href="/terms" className="text-gray-400 text-sm hover:text-white">Terms of Service</a>
          <span className="text-gray-600">|</span>
          <a href="/sitemap" className="text-gray-400 text-sm hover:text-white">Sitemap</a>
        </div>
      </div>
    </div>
  </footer>
  )
}
export default Footer
