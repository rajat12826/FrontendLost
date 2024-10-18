import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { getMatchAPI } from './Api';
import Itemcard from './Itemcard';

function Match({ data, userId }) {
  const [lost, setLost] = useState(null); 
  const [found, setFound] = useState([]); 
    const[isclick,setclick]=useState(true)
    const[loading,setloading]=useState(true)
  async function getData() {
    try {
      const data1 = await axios.post(getMatchAPI, {
        userId,
        lostItemId: data,
      });

      console.log('Found Items:', data1.data.foundItems);

      setLost(data1.data.lostItem);  
      await getMatch(data1.data.lostItem, data1.data.foundItems); 
      console.log(found);
      
    } catch (error) {
      console.error('Error fetching match data:', error);
    }
  }

  async function getMatch(lost, found) {
    console.log(found, lost);

    if (!lost || found.length === 0) return;  

    for (let i = 0; i < found.length; i++) {
      let a1 = `${lost.brand},${lost.size},${lost.colour},${lost.description}`;
      let a2 = `${found[i].brand},${found[i].size},${found[i].description}`;

      const dataForSimilarity = {
        data: [[i, a1, a2]],
      };

      try {
        const response = await axios.post(
            'https://shloaknioding.us-east-2.aws.modelbit.com/v1/similarity/latest',
            dataForSimilarity,  
            {
              headers: {
                'Content-Type': 'application/json',
              },
            }
        );

        console.log('Similarity Response:', response.data);
        let re = {
            similarity: response.data.data[0][1],
            data: found[i],
        };
        console.log(re);
        
        // Update the found state
        setFound(prevFound => {
          const updatedFound = [...prevFound, re];
          console.log('Found items after update:', updatedFound); // This will show the updated state
          console.log('Found items after update:', updatedFound.length);
          return updatedFound;
        });
        setloading(false)
       
      } catch (error) {
        console.error('Error calling similarity API:', error);
        return(<h1 className='text-2xl font-bold'>No Item Found </h1>)
      }
    }
  }

  useEffect(() => {
    getData();
  }, []);  

  return (
    <>
    {
         loading?<div>
        
       
         <div className='flex justify-center place-items-center  mt-64 font-karla '>
   <div role="status  place-center">
     <svg aria-hidden="true" className="w-24 h-24 text-gray-200 animate-spin fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
         <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
         <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
     </svg>
     <span className="sr-only">Loading...</span>
   </div>
   </div></div>:
      <div className='h-full '>
        {/* {lost ? <Itemcard data={lost} /> : <p>Loading lost item...</p>} */}
        {
            found?<div >
                {
            found.map((item)=>{
                console.log(found.length);
                
                return <Itemcard data={item.data} key={item.similarity} isclick={isclick}setclick={setclick}  />
            })
        }
                </div>:<p>Loading lost item...</p>
        }
        {found.length==0?<p className='text-xl font-bold flex justify-center items-center place-content-center  '>No Matching Items Found</p>:null}
      </div>
}
    </>
  );
}

export default Match;
