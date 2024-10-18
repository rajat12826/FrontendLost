import React from "react";
import { useState } from "react";
import { createFoundAPI, createLostAPI } from "./Api";
import axios from "axios";
function ReportForm(){
    
    const us=JSON.parse(localStorage.getItem("user"));
//    setId(us)
//    console.log(us._id);
   
    const [data,setData]=useState({
       
        location:"",
        category:"",
        brand:"",
        size:"",
        submittedat:"",
        colour:"",
        description:""
      })
      const registerDatachange=(e)=>{
       
        setData({...data,[e.target.name]:e.target.value})
      
    }
    const reportSubmit = async (e) => {
        e.preventDefault();
    
        const reportData = {
            location: data.location,
            category: data.category,
            brand: data.brand,
            size: data.size,
            submittedat: data.submittedat,
            colour: data.colour,
            description: data.description,
            userId:us._id
        };
    console.log(reportData);
    
        try {
            const response = await axios.post(createFoundAPI, reportData);
            localStorage.setItem("user", JSON.stringify(response.data.user));
            console.log(localStorage.getItem('user'));
            
            console.log('Found item created:', response.data);
        } catch (error) {
            console.error('Error creating found item:', error.message);
        }
    };
    
    return(
        <section class="bg-gray-50 h-screen dark:bg-gray-900" >
  <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
         
      Report Found Item  
      </a>
     
      <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                
              </h1>
              <form class="space-y-4 md:space-y-6" action="#" onSubmit={reportSubmit}>
              
                  <div>
                      <label for="text" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Lost At</label>
                      <input type="location" name="location" id="location" class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required="" onChange={registerDatachange}/>
                  </div>
                  <div>
                      <label for="category" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category</label>
                      <input type="category" name="category" id="category" placeholder="" class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" onChange={registerDatachange}/>
                  </div>
                
                  <div>
                      <label for="brand" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Brand</label>
                      <input type="brand" name="brand" id="brand" placeholder="" class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" onChange={registerDatachange}/>
                  </div>
                  <div>
                      <label for="size" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Size</label>
                      <input type="size" name="size" id="size" placeholder="" class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" onChange={registerDatachange}/>
                  </div>
                  <div>
                      <label for="submittedat" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">submittedat</label>
                      <input type="submittedat" name="submittedat" id="submittedat" placeholder="" class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" onChange={registerDatachange}/>
                  </div>
                  <div>
                      <label for="colour" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">colour</label>
                      <input type="colour" name="colour" id="colour" placeholder="" class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" onChange={registerDatachange}/>
                  </div>
                  <div>
                      <label for="description" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">description</label>
                      <input type="description" name="description" id="description" placeholder="" class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" onChange={registerDatachange}/>
                  </div>
                  <button type="submit" class="w-full text-white bg-yellow-600 hover:bg-transparent hover:text-yellow-500 hover:font-bold  rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600">Submit</button>
=
              </form>
          </div>
      </div>
  </div>
</section>
        )
}

export default ReportForm;