import React, { Component } from 'react';
import { connect } from 'react-redux';
//import { fetchUser } from '../actions/index';      --REMOVED AS IT WAS FETCHING THE OWN DATA RESULTING IN MULTIPLE REDUNDSNT REQUESTS

class UserHeader extends Component {

    // componentDidMount() {                        --REMOVED AS IT WAS FETCHING THE OWN DATA RESULTING IN MULTIPLE REDUNDSNT REQUESTS
    //     this.props.fetchUser(this.props.userId);
    // }

    render() {
       const {user}=this.props;
        
        if (!user){
            return null;
        }
        return (
            <div className="header">
                {user.name}
            </div>
        );
    }
}
//ownProps used as the props are available only inside the class and we want to use outside
//ownProps is a reference to the props object passed and can be used as second argument to be used elsewhere

const mapStateToProps = (state,ownProps) => {
    return { user: state.users.find(user=>user.id===ownProps.userId) }


};


export default connect(mapStateToProps)
    // { fetchUser }
    (UserHeader);

//no mapStateToProps so it is 