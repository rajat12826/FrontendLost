import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

function HomePage() {
    const navigate = useNavigate();

    return (
        <div className="home flex flex-col h-screen justify-between ">
            <div className="mainLanding"></div>
        
  <section class="bg-white py-12">
    <div class="container mx-auto text-center">
      <h2 class="text-4xl font-bold text-indigo-700">Find What You've Lost</h2>
      <p class="mt-4 text-lg text-gray-600">Easily report lost and found items on campus, for your missing belongings.</p>
      
    
    
    </div>
  </section>


  <section class="py-8 bg-gray-100">
    <div class="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
      
      <div class="bg-white p-6 rounded-lg shadow-md">
        <div class="text-center">
          <h3 class="text-2xl font-bold text-indigo-600">Report Lost Item</h3>
          <p class="mt-2 text-gray-600">Lost something? Let the university community help you find it.</p>
          <Link to="/report" class="mt-4 inline-block bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700">Report Now</Link>
        </div>
      </div>

   
      <div class="bg-white p-6 rounded-lg shadow-md">
        <div class="text-center">
          <h3 class="text-2xl font-bold text-indigo-600">Report Found Item</h3>
          <p class="mt-2 text-gray-600">Found something? Help return it to the rightful owner.</p>
          <Link to="/find" class="mt-4 inline-block bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700">Report Now</Link>
        </div>
      </div>
    </div>
  </section>

  
  <footer class="bg-gray-800  h-32   text-white py-10   ">
    <div class="container mx-auto text-center">
      <p class="text-sm">&copy; 2024 Lost & Found RBU University. All Rights Reserved.</p>
    </div>
  </footer>


        </div>
    );
}

export default HomePage;