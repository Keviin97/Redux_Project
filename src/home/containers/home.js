import React, {Component} from 'react';
import HomeLayout from '../components/home-layout';
import Post from '../../posts/containers/post';
import Comment from '../../comments/components/comment';
import NavBar from '../../navBar/components/navBar';

class Home extends Component {
  render() {
    return (
      <HomeLayout>
        <NavBar />
        <Post>
          <Comment />
        </Post>
      </HomeLayout>
    );
  }
}

export default Home;