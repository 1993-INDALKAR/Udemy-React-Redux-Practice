import React from "react";
import { connect } from "react-redux";
import { signIn, signOut } from "../actions";


class GoogleAuth extends React.Component {
    // state = {
    //     isSignedIn: null
    // };


    async componentDidMount() {
        window.gapi.load("client:auth2", () => {
            window.gapi.client.init({
                clientId: "585089054566-48287cl00mq8le6sje3jpah9t24c93kf.apps.googleusercontent.com",
                scope: "email"
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                console.log(this.auth);
                // this.setState({ isSignedIn: this.auth.isSignedIn.get() });
                this.onAuthChange(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        });
    }

    onAuthChange = (isSignedIn) => {
        if (isSignedIn) {
            this.props.signIn(this.auth.currentUser.get().getId());
            
        }
        else {
            this.props.signOut();
        }
    }

    onSignInClick = () => {
        this.auth.signIn();
    }

    onSignOutClick = () => {
        this.auth.signOut();
    }

    renderAuthButton() {
        if (this.props.isSignedIn === null) {
            return null;
        }
        else if (this.props.isSignedIn) {
            return (
                <button onClick={this.onSignOutClick} className="ui red google button">
                    <i className="google icon"></i>
                    Sign Out
                </button>
            )
        }
        else {
            return (
                <button onClick={this.onSignInClick} className="ui red google button">
                    <i className="google icon"></i>
                    Sign In with Google
                </button>
            )
        }
    }

    render() {
        return <div >{this.renderAuthButton()}</div>;
    }
}

const mapStateToProps = (state) => {
    return { isSignedIn: state.auth.isSigned }
}


export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);