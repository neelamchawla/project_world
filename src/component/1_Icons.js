import React, { Component } from 'react';
import { IconContext } from 'react-icons'
import { FaFortAwesome } from "react-icons/fa";
import { MdReplay } from "react-icons/md";

// import axios from 'axios';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Pokeball from '../pokeball.png';

class Icons extends Component {

  // state = {
  //   posts: []
  // }
  // componentDidMount() {
  //   axios.get('https://jsonplaceholder.typicode.com/posts')
  //     .then(res => {
  //       console.log(res)
  //       this.setState({
  //         posts: res.data.slice(0,10)
  //       })
  //     })
  // }


  // using redux

  render() {
    console.log("icon props->",this.props)
    // const { posts } = this.state  //wth out redux
    const { posts } = this.props;

    const postList = posts.length
    ? (posts.map (post => {
        // console.log(posts)
        return (
          <div className="post card" key={post.id}>
            <img src={Pokeball} alt="Pokeball" />
            <div className="card-content blue-text">
              {post.id}
              <Link to={'/' + post.id}>
                  <span className="card-title red-text"><h5>{post.title}</h5></span>
              </Link>
              <p>{post.body}</p>
            </div>
          </div>
        )
      })
      )
    : (<div className="center">No posts yet</div>)

      return (
        <IconContext.Provider
        value={{color: 'blue', size: '5rem'}}>
          <div className="icon">
            <header className="container">
              Hello

              {/* after using  IconContext.Provider */}
              <FaFortAwesome  />
      
              {/* not using  IconContext.Provider */}
              <MdReplay color='purple' size='5rem' />
            </header>
          </div>

          <div className="container">
            <h3 style={{color:'red'}}>Fetching data using Axios</h3>
            {postList}
          </div>
        </IconContext.Provider>
      );
  }
}
  
// const mapStateToProps = (state) => {
//   return {
//     posts: state.posts
//   }
// }

// combinnning multiple reducers replacing state with store
const mapStateToProps = (store) => {
  return {
    posts: store.rootReducer.posts
  }
}
  export default connect(mapStateToProps)(Icons);
  