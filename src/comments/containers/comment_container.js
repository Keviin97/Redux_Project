// React
import React, { Component } from 'react';

// Redux
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";

// Imports
import Comment from '../components/comment';
import * as postsActions from "../../../redux/actions/postActions";

class CommentContainer extends Component {
  constructor(props){
    super(props)
  }
  componentDidMount(){
    this.props.actions.listCommentsPost(this.props.id)
  }
  render() {
    const posts = this.props.listado
    console.log('Array vacio: ' + (Object.entries(posts).length === 0))
    console.log('--------------------------------------------------')

    if (Object.entries(posts).length === 0) {
      return <h1>No hay posts</h1>
    }
    else{
      console.log("aaaaaaaaa",posts.results)
      return(
        <div>
          {            
            posts.results.map((item, index) => {
              return <Post {...item} key={index}>
                <Comment />
              </Post>
            })
          }
        </div>
      )
    }
  }
}


function mapStateToProps(state, props) {
  console.log('STATE PROPS')
  console.log(state);
  return {
    listado: state
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(postsActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentContainer)