import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const SidebarStyled = styled.div`
    height: 100vh;
    width: 200px;
    background: #428E65;
    display: block;
    padding-top: 30px;
    position: fixed;
    > .title {
        margin-left: 20px;
        color: #fff;
    }
    .links {
        display: flex;
        flex-direction: column;
        margin-top: 20px;
        > a {
            padding-top: 10px;
            padding-left: 20px;
            padding-bottom: 10px;
            color: #fff;
            text-decoration: none;

            &:hover {
                background: rgb(255, 255, 255, 0.2);
            }
        }

        
    }
`

export const Sidebar = ({hide, title, links}) => {

  let createLinks = () => {
      let l;
      if(links) {
        l = links.map((i,k) => {
            return <Link href={i.path} prefetch key={k}><a>{i.label}</a></Link>
        })
      }

      return l;
  }
  return (
    <SidebarStyled hide={hide}>
        <div className="title">{title}<br/>MANAGEMENT</div>
        <div className="links">
            {
                createLinks()
            }
        </div>
    </SidebarStyled>)}
