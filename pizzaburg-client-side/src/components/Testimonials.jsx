
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const testimonials = [
  {
    id: 1,
    name: "Aisha Khan",
    review: "Amazing service and super delicious food. Will order again!",
    role: "Food Blogger",
  },
  {
    id: 2,
    name: "Zahid Rahman",
    review: "I loved the presentation and quick delivery. 10/10.",
    role: "Customer",
  },
  {
    id: 3,
    name: "Shima Akter",
    review: "Best food ordering experience ever. Highly recommend!",
    role: "Entrepreneur",
  },
];

const Testimonials = () => {
  return (
    <div className="py-16 bg-[#fffaf5] text-center px-4">
      <h2 className="text-4xl font-bold mb-10 text-orange-600">What People Say</h2>

      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="max-w-xl mx-auto"
      >
        {testimonials.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="bg-white shadow-lg rounded-xl p-6 text-gray-800">
              <p className="text-lg italic mb-4">“{item.review}”</p>
              <h4 className="font-semibold text-xl">{item.name}</h4>
              <span className="text-sm text-gray-500">{item.role}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
