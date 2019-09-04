import React from 'react';

const newPost = (props) => (
  <div className="container">
    <div className="row mt-3">
      <div className="col-md-2"></div>
      <div className="col-md-8">
      <div className="card">
        <div className="card-body">
          <h3 className="card-title text-center">Nueva Publicación</h3>
          <hr/>
          <form>
            <div className="form-group">
              <textarea className="form-control" id="publication" name="publication" rows="5"></textarea>
            </div>
          </form>
          <div className="text-right">
            <a href="#" className="btn btn-primary btn-lg">Publicar</a>
          </div>
        </div>
      </div>
      </div>
      <div className="col-md-2"></div>
    </div>
  </div>
)

export default newPost;