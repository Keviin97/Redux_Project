// React
import React, { Component } from 'react';

// Redux
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";

// Imports
import Post from '../components/post';
import Comment from '../../comments/components/comment';
import * as postsActions from "../../../redux/actions/postActions";

class PostContainer extends Component {
  componentDidMount(){
    this.props.actions.listPosts()
    // console.log(this.props.actions.listPosts())
  }

  render() {
    const posts = this.props.listado

    // console.log('Array vacio: ' + (Object.entries(posts).length === 0))
    // console.log('--------------------------------------------------')

    if (Object.entries(posts).length === 0) {
      return <h1>No hay posts</h1>
    }
    else{
      // console.log("aaaaaaaaa",posts.results)

      return(
        <div>
          {            
            posts.results.map((item, index) => {
              return <Post {...item} key={index}>
                <Comment />
              </Post>
            })
          }
        {/* <h1>--------------------------------------------------</h1> */}
        </div>
      )
    }
  }
}

function mapStateToProps(state, props) {
  return {
    listado: state.reducers.posts
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(postsActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostContainer)