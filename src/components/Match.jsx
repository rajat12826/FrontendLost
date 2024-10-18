import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { getMatchAPI } from './Api';
import Itemcard from './Itemcard';

function Match({ data, userId }) {
  const [lost, setLost] = useState(null); 
  const [found, setFound] = useState([]); 
    const[isclick,setclick]=useState(true)
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
    </>
  );
}

export default Match;
