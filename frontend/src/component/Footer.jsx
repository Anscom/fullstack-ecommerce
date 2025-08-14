import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-white py-16 px-6 border-t border-gray-200">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Solutions */}
          <div>
            <h3 className="font-semibold text-gray-900 text-lg mb-6">Pages</h3>
            <ul className="space-y-4">
              <li><a href="/" className="text-gray-600 hover:text-gray-900 transition-colors">Home</a></li>
              <li><a href="/product" className="text-gray-600 hover:text-gray-900 transition-colors">Product</a></li>
              <li><a href="/about" className="text-gray-600 hover:text-gray-900 transition-colors">About Us</a></li>
              <li><a href="/contact" className="text-gray-600 hover:text-gray-900 transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-gray-900 text-lg mb-6">Support</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">FAQ</a></li>

            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-gray-900 text-lg mb-6">Company</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Jobs</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-gray-900 text-lg mb-6">Legal</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Terms of service</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Privacy policy</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">License</a></li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-gray-500 text-sm">© 2025 Anscom, Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer