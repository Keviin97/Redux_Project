import React from 'react';

const navStyle = {
  backgroundColor: '#3C5C9C',
};

const NavBar = props => 
(
  <div className="text-white">
    <nav className="navbar navbar-expand-lg navbar-dark text-white" style={navStyle}>
      <div className="container text-white">
        <a className="navbar-brand" href="#">
            <img src="https://cdn.icon-icons.com/icons2/1099/PNG/512/1485482214-facebook_78681.png" width={27} height={27} className="d-inline-block align-top" alt=""/>
        </a>                
        <div className="text-right">
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <div>
                <li className="nav-item">
                  <a className="navbar-brand" href="#">
                      <img src="" width={25} height={25} className="rounded-circle d-inline-block align-top" alt=""/>
                  </a>
                </li>
              </div>
              <li className="nav-item">
                  <a className="nav-link disabled" href="#"><i className="fas fa-grip-lines-vertical"></i></a>
              </li>
              <li className="nav-item">
                  <a className="nav-link" href="#"><b>Inicio</b></a>
              </li>
              <li className="nav-item">
                  <a className="nav-link disabled" href="#"><i className="fas fa-grip-lines-vertical"></i></a>
              </li>
              <li className="nav-item">
                  <a className="nav-link" href="#"><b>Crear</b></a>
              </li>
              <li className="nav-item">
                  <a className="nav-link disabled" href="#"><i className="fas fa-grip-lines-vertical"></i></a>
              </li>
              <li className="nav-item">
                  <a className="nav-link disabled" href="#"><i className="fas fa-user-friends"></i></a>
              </li>
              <li className="nav-item">
                  <a className="nav-link disabled" href="#"><i className="fab fa-facebook-messenger"></i></a>
              </li>
              <li className="nav-item">
                  <a className="nav-link disabled" href="#"><i className="fas fa-bell"></i></a>
              </li>
              <li className="nav-item">
                  <a className="nav-link disabled" href="#"><i className="fas fa-grip-lines-vertical"></i></a>
              </li>
              <li className="nav-item dropdown dropleft ">
                  <a className="nav-link" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i className="fas fa-caret-down"></i>
                  </a>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <h6 className="dropdown-header">Kevin Gómez</h6>
                    <a className="dropdown-item" href="#"><small>Cerrar sesion</small></a>
                  </div>
              </li>
            </ul>
          </div>
        </div> 
      </div>
    </nav>
  </div>
)

export default NavBar;