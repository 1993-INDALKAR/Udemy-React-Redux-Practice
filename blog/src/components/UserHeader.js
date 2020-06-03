import React from 'react';
import { connect } from 'react-redux';
// import { fetchUser, fetchPostsAndUsers } from '../actions';


class UserHeader extends React.Component {

    // componentDidMount() {
    //     // console.log("abc"+this.props.userId);
    //     // this.props.fetchUser(this.props.userId);
    //     this.props.fetchPostsAndUsers(this.props.userId);
    // }

    render() {


        // console.log(this.props.users);
        // const user = this.props.users.find((user) =>{
        // // console.log(user.id)
        //    return  user.id === this.props.userId
        // }
        // );

        // console.log(user);

if(!this.props.user){
    return null;
}

        // return <div>user name</div>
        return <div className="header">{this.props.user.name}</div>
    }
}

const mapStateToProps = (state,ownProps) => {
    // console.log(state.users);
    return { user: state.users.find(user=>{ return user.id === ownProps.userId}) };
};

export default connect(mapStateToProps)(UserHeader);