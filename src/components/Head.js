import React, { useEffect } from "react";

function Head() {
  useEffect(() => {
    const checkbox = document.querySelector("#menuToggle input");

    const disableScroll = () => {
      document.body.style.overflow = "hidden";
    };

    const enableScroll = () => {
      document.body.style.overflow = "auto";
    };

    const handleMenuChange = (event) => {
      if (event.target.checked) {
        disableScroll();
      } else {
        enableScroll();
      }
    };

    checkbox.addEventListener("change", handleMenuChange);

    return () => {
      checkbox.removeEventListener("change", handleMenuChange);
    };
  }, []);

  const closeMenu = () => {
    const checkbox = document.querySelector("#menuToggle input");
    checkbox.checked = false;
    document.body.style.overflow = "auto"; // Ensure scroll is enabled
  };

  return (
    <header className="flex justify-start items-center p-2.5 px-10 bg-white border-b border-gray-300 h-[8vh] relative z-50 gap-5">
      <div className="flex items-center gap-2">
        <nav role="navigation">
          <div id="menuToggle" className="relative flex flex-col items-start justify-left">
            <input type="checkbox" className="w-4 h-4 absolute z-30 opacity-0 cursor-pointer" />
            <span className="w-full h-1 mb-[18.5%] bg-black relative rounded-md transform transition-transform origin-top-left duration-500 ease-cubic"></span>
            <span className="w-full h-1 mb-[18.5%] bg-black relative rounded-md transform transition-transform origin-top-left duration-500 ease-cubic"></span>
            <span className="w-full h-1 bg-black relative rounded-md transform transition-transform origin-bottom-left duration-500 ease-cubic"></span>
            <ul id="menu" className="absolute top-0 left-0 bg-gray-200 p-10 pt-32 transform -translate-x-full transition-transform duration-500 ease-cubic list-none flex flex-col justify-left items-start">
              <li className="py-2 text-lg">Free of cost</li>
             
              <li className="py-2 text-lg">Additional gold weight</li>
              <li className="py-2 text-lg">billed at current market rate</li>
       
              <div className="text-gray-500">
                <p>Contact Us on:</p>
                <p>+91 70219 20836</p>
              </div>
           
            </ul>
          </div>
        </nav>
      
      </div>
      <div className="absolute left-1/2 transform -translate-x-1/2 text-2xl font-medium tracking-wide">HARMAIG</div>
     
    </header>
  );
}

export default Head;
