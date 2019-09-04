import React from 'react';

const Post = (props) => (
  <div className="container">
    <div className="row mt-3">
      <div className="col-md-3"></div>
      <div className="col-md-6">        
        <div className="card">
          <div className="card-body">
            <div className="mb-1">
              <div className="row">
                <div className="col-9">
                  <img src="https://images.vexels.com/media/users/3/137047/isolated/preview/5831a17a290077c646a48c4db78a81bb-perfil-de-usuario-icono-azul-by-vexels.png" width="25" height="25" className="rounded-circle d-inline-block align-top" alt="" />
                  <a href="#" className="text-dark"><h5 className="card-title d-inline-block align-middle">{props.user.first_name +' '+ props.user.last_name}</h5></a>
                </div>
                <div className="col-3">
                  <div className="text-right">
                    <div className="dropdown btn-sm ">
                      <button className="btn btn-link " type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i className="fas fa-ellipsis-h fa-xs"></i>
                      </button>
                      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <h6 className="dropdown-header">Opciones</h6>
                        <a className="dropdown-item" href="#">Editar</a>
                        <a className="dropdown-item" href="#">Eliminar</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <small className="card-subtitle text-muted text-right mb-2">Publicado el: {props.created_date}</small>
              </div>
            </div>
            <p className="card-text">{props.text}</p>
            <hr />
            <div className="row">
              <div className="col-4">
                <a href="#" className="btn btn-outline-primary btn-sm btn-block">{props.likes} <i className="fas fa-thumbs-up"></i></a>
              </div>
              <div className="col-4">
                <a href=""></a>
                <button type="button" className="btn btn-outline-danger btn-sm btn-block">{props.unlikes} <i className="fas fa-thumbs-down"></i></button>
              </div>
              <div className="col-4">
                <a href="#" className="btn btn-outline-success btn-sm btn-block">Comentar</a>
              </div>
            </div>
            <hr />
            <small className="text-muted text-right mb-2">Comentarios: </small>
            {props.children}
          </div>
        </div>
      </div>
      <div className="col-md-3"></div>
    </div>
  </div>
);

export default Post;