import React from "react";
/**
 * @param {className, stylos}{children, etiqueta con titulo}
 * @returns 
 */

export const BadgeO = ({className, children }) => {
    
    return <button className= "w-40 h-10 bg-[#12863A] rounded-[12px] text-white ${className} " >
            {children} 
            </button>;
  };


