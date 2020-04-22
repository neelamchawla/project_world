import React, { Component } from 'react';
import { connect } from 'react-redux';
// import axios from 'axios';

class Post extends Component {
    // BEFORE ADDING REDUX
    // state = {
    //     // id: null
    //     post: null
    // }

    // componentDidMount() {
    //     console.log(this.props);
    //     let id = this.props.match.params.postId;

    //     // --- axios ---
    //     axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
    //     .then(res => {
    //     // console.log(res)
    //     this.setState({
    //       post: res.data
    //     })
    //     console.log(res)
    //   })

    //     // before adding axios
    //     // this.setState({
    //     //     id: id
    //     // })
    // }

    render() {
      console.log(this.props)
      console.log(this.props.posts)
    // const post = this.state.post
    // after removing state replace all state with props

    const post = this.props.posts
    ? (<div className="post">
        <h4 className="red-text">
          {`${this.props.posts.id}) `}
          {this.props.posts.title}
        </h4>
        <p className="blue-text">{this.props.posts.body}</p>
        </div>)
    : ( <div className="center">Loading post...</div>)

    return (
      <div className="container">
          <h3>Route param</h3>
          {/* <p>{this.state.id}</p> */}
          {post}
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  // console.log(ownProps.match.params.postId)
  // console.log("post state",state)
  // console.log("post ownProps",ownProps.match)
  let id = ownProps.match.params.postId;
  return {
    posts: state.posts.find(post => post.id === id
      // {
        // console.log("post.id",post.id)
        // console.log("id",id)
        // console.log("state",state)
      //   return post.id === id
      // }
      )
  }
}

export default connect(mapStateToProps)(Post);
