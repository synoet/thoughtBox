import React from 'react';
import {chakra} from '@chakra-ui/react';


type ButtonProps = {
  type: "primary" | "secondary" | "outlined",
  children: React.ReactChild,
  onClick?: () => {}
}

const Button = ({type, children, onClick}: ButtonProps) => {
  if(type === 'secondary'){
    return (
      <chakra.button onClick = {onClick} _hover = {{opacity: '.9'}} bg = 'white' paddingLeft = '1.3rem' paddingTop = '.5rem' paddingBottom = '.5rem' borderRadius = '5px' paddingRight = '1.3rem' color = 'purple.100'>{children}</chakra.button>
    )
  }else if(type === 'outlined'){
    return (
      <chakra.button onClick = {onClick} _hover = {{opacity: '.9'}} paddingTop = '.5rem' paddingBottom = '.5rem' bg = 'transparent' border = "1px solid linear-gradient(89.99deg, #BA4BF2 0.53%, #A052F4 47.15%, #6635E6 100%)" borderRadius = '5px' paddingLeft = '1.3rem' paddingRight = '1.3rem' color = 'white'>{children}</chakra.button>
    )
  }else {
    return (
      <chakra.button onClick = {onClick} _hover = {{opacity: '.9'}} bg = 'gradient.200' paddingTop = '.5rem' paddingBottom = '.5rem' paddingLeft = '1.3rem' borderRadius = '5px' paddingRight = '1.3rem' color = 'white'>{children}</chakra.button>
    )
  }
}

export default Button;