import React from 'react';
import styled from 'styled-components';
import {Flex, Image} from '@chakra-ui/react';
import logo from '../../images/logo.svg';
import {useHistory} from 'react-router-dom';

const BrandedHeader = () => {
    const history = useHistory();
    return (
        <Flex w = '100%' direction = 'row' align = 'center' justify = 'center' padding = '1rem'>
            <StyledLogo onClick = {() => history.push('/')} _hover = {{opacity: '.8', cursor: 'pointer'}}src = {logo}></StyledLogo>
        </Flex>
    )
}

export default BrandedHeader;

const StyledLogo = styled(Image)``;
