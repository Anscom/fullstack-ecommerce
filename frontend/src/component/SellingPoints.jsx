import { AiFillTruck , AiFillThunderbolt , AiOutlineReload , AiOutlineSafety } from 'react-icons/ai'

const SellingPoints = () => {
  return (
    <div className="p-8 bg-gray-50 flex items-center justify-center space-x-3">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Free Shipping */}
        <div className="flex items-center space-x-3">
          <div className="flex-shrink-0">
            <AiFillTruck className="w-8 h-8 text-blue-600" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 text-sm mb-1">FREE SHIPPING</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Enjoy free shipping on all orders above $100
            </p>
          </div>
        </div>

        {/* Support 24/7 */}
        <div className="flex items-center space-x-3">
          <div className="flex-shrink-0">
            <AiFillThunderbolt className="w-8 h-8 text-blue-600" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 text-sm mb-1">SUPPORT 24/7</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Our support team is there to help you for queries
            </p>
          </div>
        </div>

        {/* 30 Days Return */}
        <div className="flex items-center space-x-3">
          <div className="flex-shrink-0">
            <AiOutlineReload className="w-8 h-8 text-blue-600" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 text-sm mb-1">30 DAYS RETURN</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Simply return it within 30 days for an exchange.
            </p>
          </div>
        </div>

        {/* 100% Payment Secure */}
        <div className="flex items-center space-x-3">
          <div className="flex-shrink-0">
            <AiOutlineSafety className="w-8 h-8 text-blue-600" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 text-sm mb-1">100% PAYMENT SECURE</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Our payments are secured with 256 bit encryption
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SellingPoints