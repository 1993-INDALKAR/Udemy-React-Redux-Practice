import React from "react";
import UserCreate from "./UserCreate";
import LanguageContect from "../context/LanguageContext";
import LanguageSelector from "./LanguageSelector";

class App extends React.Component {

    state = { language: "english" };


    onLanguageChange = (language) => {
        // console.log(language);

        this.setState({ language: language });
    }

    render() {
        return (
            <div className="ui container">
                
                <LanguageSelector></LanguageSelector>

                <LanguageContect.Provider value={this.state.language}>
                    <UserCreate></UserCreate>
                </LanguageContect.Provider>

            </div>
        )
    }
}

export default App;