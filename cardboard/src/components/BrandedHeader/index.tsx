import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';

const BrandedHeader = () => {
    return (
        <StyledLogo></StyledLogo>
    )
}

export default BrandedHeader;

const StyledLogo = styled(Logo)``;
