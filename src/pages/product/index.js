import React from "react";


export default class App extends React.Component {

    static async getInitialProps(ctx) {
        let title = "PRODUCT"
        let subLink = [{
            path: '/',
            label: 'View All'
        },
        {
            path: '/user',
            label: 'Add New Product'        
        }];

        return {path: ctx.asPath, title, subLink};
    }

    render() {
        return(<div>this is product!</div>)
    }
}