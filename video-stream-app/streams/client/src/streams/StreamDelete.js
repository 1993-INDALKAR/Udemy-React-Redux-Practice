import React from 'react';
import Modal from "../components/modal";
import history from "../history";
import { connect } from "react-redux";
import { fetchStream, deleteStream } from "../actions/index";
import { Link } from "react-router-dom";

class StreamDelete extends React.Component {



    componentDidMount() {
        // console.log("Hello" + this.props);

        this.props.fetchStream(this.props.match.params.id);
    }

    deleteStream = () => {

        this.props.deleteStream(this.props.match.params.id);

        
    }

    renderActions() {
        return (
            <>
                <button onClick={this.deleteStream} className="ui button negative">Delete</button>
                <Link to="/" className="ui button cancel button">Cancel</Link>
            </>
        );
    }


    render() {

        if (!this.props.stream) {
            return <div>Loading...</div>
        }


        return (
            <div>Stream Delete
                <Modal title="Delete Stream"
                    description={`Are you sure you want to Delete ${this.props.stream.title}`}
                    actions={this.renderActions()}
                    onDismiss={() => history.push("/")} />
            </div>
        )
    }


}

const mapStateToProps = (state, ownProps) => {
    // console.log("props" + ownProps.match.params.id);
    return { stream: state.streams[ownProps.match.params.id] }
}

export default connect(mapStateToProps, { fetchStream, deleteStream })(StreamDelete);