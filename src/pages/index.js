import React from "react";
import {Navbar, Footer} from '../component';
import Camera from 'react-html5-camera-photo';
import Webcam from 'react-webcam';


export default class App extends React.Component {
    
    static async getInitialProps(ctx) {
        return {path: ctx.asPath};
    }

    render() {
        console.log(this.props);
        return(<div>
            {/* <Camera isFullscreen={true}/> */}
            <Webcam />
        </div>)
    }
}