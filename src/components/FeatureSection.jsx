import {features} from "../constants/index.jsx";
import React from 'react';
const FeatureSection = () => {
    return ( 
        <div className=" relative mt-20 border-b border-neutral-800 min-h-[800px]">
            <div className="text-center">
                <span className="bg-neutral-900 text-red-500 rounded-full text-sm font-medium px-2 py-1" uppercase>
                    Feature
                    </span>
                    <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">
                        Game 
                        <span className="bg-gradient-to-r from-red-500 to-red-800 text-transparent bg-clip-text">
                            {" "}
                            from anywhere </span>
                    </h2>
            </div>
            <div className="flex flex-wrap mt-10 lg:mt-20">
            {features.map((feature, index) => (
  <div key={index} className="w-full sm:w-1/2 lg:w-1/3">
    <div className="p-4 border border-neutral-700 rounded-md">
    <div className="mx-6 h-10 w-10 p-2 flex justify-center items-center text-red-700
         bg-neutral-900 rounded-full"> 
         {feature.icon}
         </div>
         <div>
            <h5 className="mt-1 mb-6 text-xl"> {feature.text}

            </h5>
          
            
            </div>
         <h3 className="text-xl font-bold">{feature.title}</h3>
    
      <p className=" text-neutral-500 text-md p-2 mb-20 ">{feature.description}</p>
    </div>
    
         
  </div>
))}

            </div>
        </div>

    );
};
export default FeatureSection;