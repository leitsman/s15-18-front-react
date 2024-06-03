
import React from 'react'
import { IconType } from 'react-icons';
export const CustomButtonIcon = ({className,text,icon:Icon}) => {
  return (
    <button className={className}>
    {text}
    <Icon />
    </button>
  )
}