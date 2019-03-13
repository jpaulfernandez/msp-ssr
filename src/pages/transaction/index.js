import React from "react";


export default class App extends React.Component {

    static async getInitialProps(ctx) {
        let title = "TRANSACTION"
        let subLink = [{
            path: '/',
            label: 'Make Payment'
        }];

        return {path: ctx.asPath, title, subLink};
    }

    render() {
        return(<div>this is tx!</div>)
    }
}