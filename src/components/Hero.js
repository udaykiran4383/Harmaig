import React from "react";

function Hero() {
  return (
    <section
      className="hero h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/images/arcof.jpeg')" }}
    >
      <div className="hero-content text-center p-4 md:p-8 bg-white bg-opacity-60 rounded-lg w-full max-w-lg mx-auto mt-2 md:mt-6">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-800">
          Discover the new Elegance
        </h1>

        <div className="flex justify-center mt-4"> {/* Centering wrapper */}
          <a
            href="https://drive.google.com/drive/folders/1LACVRVsy7Vv-tvMuxBvzs2aoydKZ1Xl4"
            data-aos="fade-right"
            data-aos-delay="200"
            className="bg-black relative h-10 w-40 md:h-12 md:w-44 rounded-lg text-white font-medium shadow-2xl transition-all duration-200 hover:text-black hover:bg-white flex items-center justify-center"
          >
            <span className="relative z-10 font-bold tracking-wider text-sm sm:text-base md:text-lg">
              Catalogue
            </span>
            <span className="absolute inset-0 m-auto h-0 w-0 bg-white transition-all duration-300 ease-out hover:h-full hover:w-full opacity-80"></span>
          </a>
        </div>

      </div>
    </section>
  );
}

export default Hero;
