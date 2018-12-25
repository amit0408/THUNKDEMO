import React, { Component } from 'react';
import { fetchPostsAndUsers } from '../actions/index.js';   //HOOKING UP REACT AND REDUX--BRIDGING
import { connect } from 'react-redux';
import UserHeader from './UserHeader';

class PostList extends Component {



    componentDidMount() {

        this.props.fetchPostsAndUsers();
    }

    renderList() {

        return this.props.posts.map((post => {
            return (
                <div className="item" key={post.id}>
                    <i className="large middle aligned icon user" />
                    <div className="content">
                        <div className="description">
                            <h2>{post.title}</h2>
                            <p>{post.body}</p>
                        </div>
                        <UserHeader userId={post.userId} />
                    </div>
                </div>

            );

        }))
    }


    render() {
        console.log(this.props.posts);
        return (
            <div className="ui relaxed divided list">
                {this.renderList()}
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return { posts: state.posts };
}

export default connect(mapStateToProps,
    { fetchPostsAndUsers: fetchPostsAndUsers }) //hooking up the action creator to the component thru connect function
    (PostList);