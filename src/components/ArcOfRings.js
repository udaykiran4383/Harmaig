import React from "react";

function ArcOfRings() {
  return (
    <section className="w-full text-center" id="arc-of-rings">
  
      <h2 className="text-3xl font-semibold mb-6">Majestic heritage</h2>
 
      <div className="arcOfRingsphoto bg-cover bg-center h-[90vh] my-6"></div>

      <div className="flex justify-evenly space-x-4 overflow-x-auto scrollbar-hide">
        {/* Add arc items here as needed */}
      </div>
    </section>
  );
}

export default ArcOfRings;
