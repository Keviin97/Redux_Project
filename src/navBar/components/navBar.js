import React from 'react';
import face from '../../images/face.png';
import profileImage from '../../images/user.png';
import {BrowserRouter, Route, NavLink, Link} from 'react-router-dom';
import PostContainer from '../../posts/containers/post_container';
import newPostContainer from '../../posts/containers/new_post_container';


const navStyle = {
  backgroundColor: '#3C5C9C',
};

const NavBar = props => 
(
  <BrowserRouter>
    <div className="text-white">
      <nav className="navbar navbar-expand-lg navbar-dark text-white" style={navStyle}>
        <div className="container text-white">
          <NavLink className="navbar-brand" to="/">
              <img src={face} width={27} height={27} className="d-inline-block align-top" alt=""/>
          </NavLink>                
          <div className="text-right">
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <div>
                  <li className="nav-item">
                    <NavLink className="navbar-brand" to="/">
                        <img src={profileImage} width={25} height={25} className="rounded-circle d-inline-block align-top" alt=""/>
                    </NavLink>
                  </li>
                </div>
                <li className="nav-item">
                    <NavLink className="nav-link disabled" to="/"><i className="fas fa-grip-lines-vertical"></i></NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/"><b>Inicio</b></NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link disabled" to="/"><i className="fas fa-grip-lines-vertical"></i></NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/new_post"><b>Crear</b></NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link disabled" to="/"><i className="fas fa-grip-lines-vertical"></i></NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link disabled" to="/"><i className="fas fa-user-friends"></i></NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link disabled" to="/"><i className="fab fa-facebook-messenger"></i></NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link disabled" to="/"><i className="fas fa-bell"></i></NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link disabled" to="/"><i className="fas fa-grip-lines-vertical"></i></NavLink>
                </li>
                <li className="nav-item dropdown dropleft ">
                    <NavLink className="nav-link" to="/" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <i className="fas fa-caret-down"></i>
                    </NavLink>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                      <h6 className="dropdown-header">Kevin Gómez</h6>
                      <Link className="dropdown-item" to="/"><small>Cerrar sesion</small></Link>
                    </div>
                </li>
              </ul>
            </div>
          </div> 
        </div>
      </nav>
    </div>


    <Route path="/" exact component={PostContainer} />
    <Route path="/new_post/" component={newPostContainer} />
  </BrowserRouter>
)
export default NavBar;