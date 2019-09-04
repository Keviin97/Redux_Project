import React, {Component} from 'react';
import HomeLayout from '../components/home-layout';
import PostContainer from '../../posts/containers/post_container';
import NavBar from '../../navBar/components/navBar';

class Home extends Component {
  render() {
    return (
      <HomeLayout>
        <NavBar />
        <PostContainer>
        </PostContainer>
      </HomeLayout>
    );
  }
}

export default Home;