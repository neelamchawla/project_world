import React, { Component } from 'react';
import { IconContext } from 'react-icons'
import { FaFortAwesome } from "react-icons/fa";
import { MdReplay } from "react-icons/md";
import axios from 'axios';


class Icons extends Component {

  state = {
    posts: []
  }
  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(res => {
        console.log(res)
        this.setState({
          posts: res.data.slice(0,10)
        })
      })
  }

  render() {

    const { posts } = this.state
    const postList = posts.length ?
    (posts.map (post => {
      return (
        <div className="post card" key={post.id}>
          <div className="card-content">
            {post.id}
            <span>.<h5>{post.title}</h5></span>
            <p>{post.body}</p>
          </div>
        </div>
      )
    })) : 
    (<div className="center">No posts yet</div>)
    return (
      <IconContext.Provider value={{color: 'blue', size: '5rem'}}>
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
  
  export default Icons;
  