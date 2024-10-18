import React, { useState } from 'react';

function Itemcard({ data, click, setClick, data1, setData }) {
    console.log("items", data);

    let submittedAt = "";
    if (data && data.submittedAt !== undefined) {
        submittedAt = data.submittedAt;
    }

    return (
        <>
            <div className="py-2 text-gray-900 h-full w-fit transition-transform transform hover:scale-105" onClick={() => { 
                setClick(!click);
                setData(data?._id);
            }}>
                <div className="bg-gray-300 p-6 flex items-center justify-center w-full shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="bg-gray-00 rounded-lg overflow-hidden  w-full">
                    
                        <div className="py-4 px-6">
                            <div className="flex items-baseline">
                                <span className={`inline-block bg-green-500 text-white py-1 px-4 text-xs rounded-full uppercase font-semibold tracking-wide`}>
                                    {data?.colour}
                                </span>
                                <div className="ml-2 text-blue-600 text-xs uppercase font-semibold tracking-wide">
                                    Category: {data?.category || "N/A"}
                                </div>
                            </div>
                            <h4 className="mt-2 font-bold text-xl leading-tight truncate">{data?.brand || "N/A"}</h4>
                            <div className="mt-1">
                                <span className="text-gray-700">Description: {data?.description || "No description"}</span>
                            </div>
                            <div className="mt-2 flex flex-col">
                                <span className="text-gray-600 text-sm">Location: {data?.location || "N/A"}</span>
                                {submittedAt && (
                                    <span className="text-gray-600 text-sm">Submitted At: {submittedAt}</span>
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