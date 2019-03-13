import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const NavbarStyled = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-content: center;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    background: #fff;
    position: fixed;
    margin-bottom: 80px;
    z-index: 1030;
    top: 0;
    left: 0;
    right: 0;
    .nav-brand {
        padding: 12px;
        margin-left: 50px;
    }
    .nav--link {
        width: 100%;
        display: flex;
        flex-direction: row;
        align-content: center;
        margin-left: 80px;
        & > a {
            margin-right: 20px;
            text-decoration: none;
            color: rgba(0,0,0,0.5);
            padding: 20px;

            &:hover {
                color: #428E65;
            }

            > strong {
                font-family: 'Roboto-bold';
            }
        }
        > a.active {
            border-bottom: 2px solid #428E65;
            color: #428E65;
        }
    }
`

export const Navbar = ({path}) => {
    console.log(path, 'path in navbar');
    return (
    <NavbarStyled>
        <Link  href="/">
            <a className="nav-brand"><img src="http://pluspng.com/img-png/user-png-icon-big-image-png-2240.png" width="50px" height="50px"/></a>
        </Link>
        <div className="nav--link">
            <Link href="/"><a className={path=="/"? 'active':''}><strong>Home</strong> <br/> Dasboard</a></Link>
            <Link href="/branch" prefetch><a className={path.includes("/branch") ? 'active':''}><strong>Branch</strong> <br/> Management</a></Link>
            <Link href="/customer" prefetch><a className={path.includes("/customer") ? 'active':''}><strong>Customer</strong> <br/> Management</a></Link>
            <Link href="/product" prefetch><a className={path.includes("/product") ? 'active':''}><strong>Product</strong> <br/> Management</a></Link>
            <Link href="/transaction" prefetch><a className={path.includes("/transaction") ? 'active':''}><strong>Transaction</strong> <br/> Management</a></Link>
        </div>
    </NavbarStyled>)

}
    