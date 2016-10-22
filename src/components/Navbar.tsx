import * as React from "react";

export interface NavbarProps { 
    compiler: string; 
    framework: string; 
}

export class Navbar extends React.Component<NavbarProps, {}> {
    render() {
        return <h1>HMR should update {this.props.compiler} and {this.props.framework}!</h1>;
    }
}