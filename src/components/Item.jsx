import React, { useEffect, useState } from "react";
import Itemcard from "./Itemcard";
import Match from "./Match";

function Item(){
    const [lostdata,setlostData]=useState([]);
    const [founddata,setfoundData]=useState([]);
    const[data1,setData]=useState()
    const[click,setClick]=useState(false)
    const[userId,setuserid]=useState()
    function getLostData(){
     
        const user=JSON.parse(localStorage.getItem("user"));
        setuserid(user._id)
        console.log(user);
        
        {
            
           setlostData(user.lostItems)
        }
        console.log(user);
        
    }
    function getFoundData(){
        const user=JSON.parse(localStorage.getItem("user"));
        // console.log(user);
        setuserid(user._id)
        
            
            setfoundData(user.foundItems)
        
        console.log(user);
        
        
    }
    useEffect(()=>{
  
        getLostData();
        getFoundData();

    },[])
    return(
       <>
      <div className="flex justify-center bg-gray-00">

      {!click? <div id="item " className=" sm:flex justify-center bg-white   ">

<div id="lostItems" className="bg-gray-200 px-16">
    <h1 className="flex justify-center text-xl font-semibold pt-2">Lost Items</h1>
{
    lostdata.map((item)=>{
        return(
            <div className="flex justify-center items-center">
<Itemcard data={item} click={click} setClick={setClick} data1={data1} setData={setData}/>
            </div>
        )
    })
}
</div>
<div id="foundItems" className="bg-gray-200 w-full ">
<h1 className="flex justify-center text-xl font-semibold pt-2 w-full ">Found Items</h1>
{/* <div id="lostItems"> */}
{
    founddata.map((item)=>{
        return(
            <div className="flex justify-center items-center pointer-events-none ">
<Itemcard data={item} click={click} setClick={setClick}  data1={data1} setData={setData}/>
            </div>
        )
    })
}
{/* </div> */}

</div>
</div>:<Match data={data1} userId={userId}/>}
      </div>
       
       </>
    );
}

export default Item;
