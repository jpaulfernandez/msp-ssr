import App, {Container} from 'next/app';
import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import { Navbar, Sidebar} from '../component/common';


export default class MainApp extends App {
    static async getInitialProps ({ Component, router, ctx }) {
      let pageProps = {}
      if (Component.getInitialProps) {
        pageProps = await Component.getInitialProps(ctx);
      }
      return {pageProps}
    }
  
    render () {
      const {Component, pageProps} = this.props;      
      let hideSidebar = pageProps.path == '/';
      return (
        <Container>
          <Head>
          </Head>
          <Navbar path={pageProps.path}/>
          {hideSidebar?<div></div>:<Sidebar title={pageProps.title} links={pageProps.subLink}/>}
          <Component {...pageProps} />
        </Container>
      )
    }
  }