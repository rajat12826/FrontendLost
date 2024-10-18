import React, { useState } from 'react'

function Itemcard({ data, click, setClick, data1, setData }) {
    console.log("items", data);
  
    let submittedAt = "";
    if (data && data.submittedAt !== undefined) {
        submittedAt = data.submittedAt;
    }

    return (
        <>
            <div className="text-gray-900 h-full w-full" onClick={() => { 
                setClick(!click);
                setData(data?._id);
            }}>
                <div className="bg-gray-200 p-8 flex items-center justify-center px-5 w-full">
                    <div className="bg-white rounded-lg overflow-hidden shadow-2xl xl:1/5 lg:w-full md:w-1/3 sm:w-1/2 h-full">
                        <img className="w-full object-cover object-end" src="https://content.presspage.com/uploads/633/f560a24d-88da-446a-9746-31ac89eb5d9e/1920_gp-ln-23-007-pixel7a-6-48-master-full-uk-blue-240323.png?10000" alt="Home in Countryside" />
                        <div className="px-6 py-2">
                            <div className="flex items-baseline">
                                <span className={`inline-block bg-${data?.colour || "white"}-500 text-white py-1 px-4 text-xs rounded-full uppercase font-semibold tracking-wide`}>
                                    {data?.colour}
                                </span>
                                <div className="ml-2 text-gray-600 text-xs uppercase font-semibold tracking-wide">
                                    Category: {data?.category || "N/A"}
                                </div>
                            </div>
                            <h4 className="mt-2 font-semibold text-lg leading-tight truncate">Brand: {data?.brand || "N/A"}</h4>
                            <div className="mt-1">
                                <span>Description: {data?.description || "No description"}</span>
                            </div>
                            <div className="mt-2 flex flex-col">
                                <span className="ml- text-gray-600 text-sm">Location: {data?.location || "N/A"}</span>
                                {submittedAt && (
                                    <span className="ml- text-gray-600 text-sm">Submitted At: {submittedAt}</span>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Itemcard;
