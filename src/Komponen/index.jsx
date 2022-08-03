import React from "react";
import Bodynya from "./Bodynya/Bodynya";
import Navbarnya from "./Navbarnya/Navbarnya";


export default class Komponen extends React.Component {
    render() {
        return(
            <div>
                <Navbarnya/>
                <Bodynya/>
            </div>
        )
    }
}