import React from 'react'
import Aguy from '../assets/aguy.jpg'
import Asecondguy from '../assets/asecondguy.jpg'
import Agirl from '../assets/agirl.jpg'

const Testimonials = () => {
  const testimonials = [
    {
      name: "Stacy",
      message:
        "Once we ordered some accessories items and we got the products delivered in our doorstep, the customer support was super helpful and they answered all my queries.",
      image: Aguy,
    },
    {
      name: "Tiffany",
      message:
        "I ordered 5 shirts from them and received them in no time. The customer support was awesome!",
      image: Agirl,
    },
    {
      name: "James",
      message:
        "I got a wrong shirt so I contacted them and they happily offered me a refund. I will surely shop from them again.",
      image: Asecondguy,
    },
  ];

  return (
    <section className="py-12 px-4 max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold text-center mb-10">Testimonials</h2>
      <div className="space-y-12">
        {testimonials.map((item, index) => (
          <div key={index} className="flex items-start gap-6">
            <img
              src={item.image}
              alt={item.name}
              className="w-20 h-20 rounded-full object-cover"
            />
            <div>
              <p className="text-lg text-gray-800 font-serif mb-2">
                <span className="text-3xl leading-none text-black mr-2">“</span>
                {item.message}
              </p>
              <p className="font-semibold text-gray-700">{item.name}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;