const PromoCards = () => {
  return (
    <div className="p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {/* Peace of Mind Card */}
        <div className="bg-black text-white p-12 flex flex-col items-center text-center min-h-[300px] justify-center">
          <h2 className="text-3xl font-bold mb-6">PEACE OF MIND</h2>
          <p className="text-gray-300 text-sm leading-relaxed mb-8 max-w-sm">
            A one-stop platform for all your fashion needs.
            <br />
            hassle-free. Buy with a peace of mind.
          </p>
          <button className="bg-white text-black px-8 py-3 text-sm font-semibold hover:bg-gray-100 transition-colors">
            BUY NOW
          </button>
        </div>

        {/* Buy 2 Get 1 Free Card */}
        <div className="bg-black text-white p-12 flex flex-col items-center text-center min-h-[300px] justify-center">
          <h2 className="text-3xl font-bold mb-6">BUY 2 GET 1 FREE</h2>
          <p className="text-gray-300 text-sm leading-relaxed mb-8 max-w-sm">
            End of season sale. Buy any 2 items of your choice
            <br />
            and get 1 free.
          </p>
          <button className="bg-white text-black px-8 py-3 text-sm font-semibold hover:bg-gray-100 transition-colors">
            BUY NOW
          </button>
        </div>
      </div>
    </div>
  )
}

export default PromoCards