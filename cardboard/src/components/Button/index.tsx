import React from 'react';
import {chakra} from '@chakra-ui/react';


type ButtonProps = {
  type: "primary" | "secondary" | "outlined",
  children: React.ReactNode,
  onClick?: () => void | {},
}

const Button = ({type, children, onClick}: ButtonProps) => {
  if(type === 'secondary'){
    return (
      <chakra.button onClick = {onClick} _hover = {{opacity: '.8'}} bg = 'white' paddingLeft = '1.4rem' paddingTop = '.4rem' paddingBottom = '.4rem' borderRadius = '5px' paddingRight = '1.4rem' color = 'purple.100'>{children}</chakra.button>
    )
  }else if(type === 'outlined'){
    return (
      <chakra.button onClick = {onClick} _hover = {{opacity: '.8'}} paddingTop = '.4rem' paddingBottom = '.4rem' bg = 'transparent' border = "1px solid" borderColor = 'purple.200' borderRadius = '5px' paddingLeft = '1.4rem' paddingRight = '1.4rem' color = 'white'>{children}</chakra.button>
    )
  }else {
    return (
      <chakra.button onClick = {onClick} _hover = {{opacity: '.8'}} bg = 'gradient.200' paddingTop = '.4rem' paddingBottom = '.4rem' paddingLeft = '1.4rem' borderRadius = '5px' paddingRight = '1.4rem' color = 'white'>{children}</chakra.button>
    )
  }
}

export default Button;