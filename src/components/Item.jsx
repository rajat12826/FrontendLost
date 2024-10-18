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
        window.location.reload()
        getLostData();
        getFoundData();

    },[])
    return(
       <>
       {!click? <div id="item " className="sm:flex ">

<div id="lostItems" className="bg-gray-200">
    <h1 className="flex justify-center text-xl font-semibold pt-2">LostItems</h1>
{
    lostdata.map((item)=>{
        return(
            <div>
<Itemcard data={item} click={click} setClick={setClick} data1={data1} setData={setData}/>
            </div>
        )
    })
}
</div>
<div id="foundItems" className="bg-gray-200">
<h1 className="flex justify-center text-xl font-semibold pt-2">FoundItems</h1>
{/* <div id="lostItems"> */}
{
    founddata.map((item)=>{
        return(
            <div>
<Itemcard data={item} click={click} setClick={setClick}  data1={data1} setData={setData}/>
            </div>
        )
    })
}
{/* </div> */}

</div>
</div>:<Match data={data1} userId={userId}/>}
       
       </>
    );
}

export default Item;
