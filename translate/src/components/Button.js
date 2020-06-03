import React from "react";
import LanguageContext from "../context/LanguageContext";

class Button extends React.Component {

    // static contextType = LanguageContext; for this.context

    render() {


        // const text = this.context === "english" ? "Submit" : "Bhejo";

        return (

            <button className="ui button primary">
                <LanguageContext.Consumer>
                    {(value) => value === "english" ? "Submit" : "Bhejo"}
                </LanguageContext.Consumer>
            </button>
        )
    }
}

export default Button;
