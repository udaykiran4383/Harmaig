import React from "react";

export default function Explore() {
  const items = [
    { src: "images/Ring.jpg", alt: "Rings", label: "Rings" },
    { src: "images/2.png", alt: "Necklace", label: "Necklace" },
    { src: "images/7.jpeg", alt: "Earrings", label: "Earrings" },
    { src: "images/5.png?height=208&width=240", alt: "Pins", label: "Pins" },
    { src: "images/4.png?height=208&width=240", alt: "Bracelet", label: "Bracelet" },
    { src: "images/3.png?height=208&width=240", alt: "Chains", label: "Chains" },
    { src: "images/6.png?height=208&width=240", alt: "Bangels", label: "Bangels" },
    { src: "images/1.png?height=208&width=240", alt: "Mens", label: "Mens" },
  ];

  return (
    <section className="py-10 px-4 text-center">
      <h2 className="text-xl md:text-2xl font-semibold mb-6 md:mb-8">Explore a selection of the special movement</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
        {items.map((item, index) => (
          <div key={index} className="flex flex-col items-center space-y-2">
            <img src={item.src} alt={item.alt} className="w-full max-w-[240px] h-[208px] object-cover rounded-lg shadow-md" />
            <p className="text-sm md:text-base">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}