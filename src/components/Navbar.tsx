import * as React from "react";

export interface NavbarProps { 
    compiler: string; 
    framework: string; 
}

export class Navbar extends React.Component<NavbarProps, {}> {
    render() {
        return <div>
                    <h1>HMR should update {this.props.compiler} and {this.props.framework}!</h1>
                    Make a small change and watch everything update.
                </div>;
    }
}