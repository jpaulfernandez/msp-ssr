import App, {Container} from 'next/app';
import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';


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
      return (
        <Container>
          <Head>
          </Head>
          <Component {...pageProps} />
        </Container>
      )
    }
  }