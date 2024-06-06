import React from "react";
/**
 * @param {className, stylos}{children, etiqueta con titulo}
 * @returns 
 */

export const BadgeC = ({className, children }) => {
    
    return <button className= "w-40 h-10 bg-[#289008] rounded-[12px] text-white ${className} " >
            {children} 
            </button>;
  };