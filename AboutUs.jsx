/* eslint-disable no-unused-vars */
import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Image with Parallax Effect */}
      <div className="bg-[url('./images/bg_upsideUP.webp')] h-80 bg-no-repeat bg-cover bg-center -mt-10 flex items-center rounded-b-2xl">
        <h1 className="mx-auto text-8xl font-semibold text-white text-opacity-50 transform transition duration-1000 hover:text-opacity-100">
          About Us
        </h1>
      </div>

      {/* Welcome Section */}
      <section className="bg-pink-50 py-12 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-pink-800">
          Welcome to Tapovan Escape
        </h1>
        <p className="text-lg md:text-xl text-pink-600 mt-4">
          Experience unparalleled luxury and world-class hospitality in a serene setting surrounded by breathtaking views.
        </p>
        <div className="mt-8">
          <button className="px-6 py-3 bg-pink-600 text-white font-semibold rounded-lg shadow-md hover:bg-pink-700 transform hover:scale-105 transition duration-300">
            Explore More
          </button>
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-pink-800">
            About Tapovan Escape
          </h2>
          <p className="text-lg text-gray-600 mt-4">
            {"Tapovan Escape is more than just a hotel – it's a destination where luxury meets tranquility. Discover a perfect blend of modern elegance and natural beauty that makes every moment unforgettable."}
          </p>
        </div>

        {/* Highlights Section */}
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {[
            { title: "Luxurious Rooms", desc: "Elegant spaces with modern amenities to ensure ultimate comfort." },
            { title: "World-Class Dining", desc: "Savor cuisines crafted by our award-winning chefs." },
            { title: "Relaxing Spa", desc: "Rejuvenate your senses with premium wellness treatments." },
            { title: "Adventurous Activities", desc: "Enjoy trekking, yoga, and river rafting at our prime location." },
            { title: "Panoramic Views", desc: "Immerse yourself in the stunning views of mountains and valleys." },
            { title: "Personalized Service", desc: "Experience hospitality tailored to your preferences." },
          ].map((item, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300"
            >
              <h3 className="text-xl font-semibold text-pink-800">{item.title}</h3>
              <p className="text-gray-600 mt-2">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Vision and Mission Section */}
      <section className="bg-pink-400 text-white py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold">Our Vision & Mission</h2>
          <p className="text-lg mt-4">
            At Tapovan Escape, our vision is to create an oasis of luxury where guests can reconnect with nature while enjoying exceptional comfort. Our mission is to deliver unparalleled hospitality and unforgettable experiences.
          </p>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-pink-50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-pink-800">
            Hear From Our Guests
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[{
              name: "Alice Johnson",
              quote: "A truly magical experience! The rooms, the views, and the hospitality were exceptional.",
            },
            {
              name: "Raj Mehta",
              quote: "Perfect getaway to relax and rejuvenate. The spa and dining were top-notch.",
            },
            {
              name: "Sophia Lee",
              quote: "Loved every moment here. Tapovan Escape feels like a slice of paradise.",
            }].map((testimonial, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300"
              >
                <p className="text-gray-600 italic">{`${testimonial.quote}`}</p>
                <p className="text-pink-800 font-semibold mt-4">- {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="rounded-2xl mx-16 my-5 bg-pink-100 py-16 text-white text-center">
        <h2 className="text-4xl font-bold text-black">Ready to Escape?</h2>
        <p className="text-lg mt-4 text-black">
          Book your stay today and immerse yourself in the ultimate luxury and tranquility at Tapovan Escape.
        </p>
        <button className="mt-8 px-8 py-4 bg-pink-400 text-white font-semibold rounded-lg shadow-md hover:bg-pink-700 transform hover:scale-105 transition duration-300">
          Book Now
        </button>
      </section>
    </div>
  );
};

export default AboutUs;
