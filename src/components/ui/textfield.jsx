import React from "react"

export const Textfield =({className,placeholder,type,icon})=>{
    return(
        <input className={className} placeholder={placeholder} type={type} icon={icon}></input>
    )
}