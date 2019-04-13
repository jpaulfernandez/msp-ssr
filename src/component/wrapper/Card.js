import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const CardStyled = styled.div`
        /* box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24); */
        transition: all 150ms ease-in-out;
        position: relative;
        display: flex;
        flex-direction: column;
        min-width: 0;
        word-wrap: break-word;
        background-color: #fff;
        background-clip: border-box;
        /* border: 1px solid rgba(0, 0, 0, 0.125); */
        /* border-radius: 0.25rem; */
        padding: 15px;
        margin-top: 15px;
    `
const CardHead = styled.div`
        background: #fbfaf9;
        padding: 15px;
`

const CardFooter = styled.div`
        transition: all 150ms ease-in-out;
        position: relative;
        display: flex;
        flex-direction: column;
        min-width: 0;
        word-wrap: break-word;
        background-color: #fff;
        background-clip: border-box;
        border-top: 1px solid rgba(0, 0, 0, 0.125);
        padding: 15px;
        margin-top: 15px;
`

// export const Card = {
//     Head: ({children}) => <CardHead>{children}</CardHead>,
//     Body: ({children}) => <CardStyled>{children}</CardStyled>
// }

export class Card extends React.Component{

    static Body({children}) {
        return (<CardStyled>{children}</CardStyled>)
    }

    static Head({children}) {
        return (<CardHead>{children}</CardHead>)
    }

    static Footer({children}) {
        return (<CardFooter>{children}</CardFooter>)
    }

    render() {
        let {children} = this.props;
        return (<div className="card">
                    {children}
                </div>)
    }
}