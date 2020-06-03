import React from "react";

class LanguageSelector extends React.Component {
    render() {
        return (
            <div>
                <h2> 
                        Select Language:
                        <i className="flag us" 
                           onClick={() => this.onLanguageChange("english")} />
                        <i className="flag india" 
                           onClick={() => this.onLanguageChange("hindi")} />
                </h2>
            </div>
        )
    }
}