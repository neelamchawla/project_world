import React, { Component } from 'react';
// import axios from 'axios';
import { connect } from 'react-redux';

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

    handleClick = () => {
      this.props.deletePost(this.props.posts.id);
      this.props.history.push('/Icons');
    }

    render() {
      // console.log("props",this.props)
      // console.log("props post",this.props.posts)
      // console.log("props post id",this.props.posts.body)

    // const post = this.state.post
    // after removing state replace all state with props
    const post = this.props.posts
    ? (<div className="post">
        <h4 className="red-text">
          {`${this.props.posts.id}) `}
          {this.props.posts.title}
        </h4>
        <h5 className="blue-text">{this.props.posts.body}</h5>
        <div className="center">
        <button className="btn grey" onClick={this.handleClick}>
          Delete Post
        </button>
        </div>

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


//multiple reducer replacing state with store
const mapStateToProps = (store, ownProps) => {
  // console.log(ownProps.match.params.postId)
  // console.log("post state",state.posts[0].id);
  console.log("post ownProps",ownProps.match);
  console.log("id", typeof(ownProps.match.params.postId));
  const id = parseInt(ownProps.match.params.postId);
  return {
    // posts: state.posts.find(res => res.id === id)
    posts: store.rootReducer.posts.find(res => res.id === id) //multiple reducer replacing state with store
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deletePost: (id) => { dispatch ({type: 'DELETE_POST', id: id })}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);
