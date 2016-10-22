import '../style.scss';
import * as React from "react";
import * as ReactDOM from "react-dom";

import { Navbar } from "./components/Navbar";

ReactDOM.render(
    <Navbar compiler="TypeScript" framework="React" />, document.getElementById("example")
);