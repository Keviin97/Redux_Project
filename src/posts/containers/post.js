import React, { Component } from 'react';
import {apiGet} from '../../utility/api';
import Posts from '../components/post.js';


class Post extends Component{

  constructor(props){
    super(props);
    this.state = {
      data: {}
    }
  }

  componentDidMount (){
    this.state = {
      data: apiGet(),
    }
  }

  render() {
    return (
      <Posts {...this.state.data} />
    );
  }
}

export default Post;