import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const ContainerStyled = styled.div`
        margin-left: 200px;
        margin-top: 80px;
        padding-top: 70px;
        padding-left: 35px;
        padding-right: 35px;
    `

export const Container = ({children}) => <ContainerStyled>{children}</ContainerStyled>