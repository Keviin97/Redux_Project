// React
import React, { Component } from 'react';

// Redux
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";

// Imports
import NewPostForm from '../components/new_post';
import * as postActions from '../../../redux/actions/postActions';


class newPostContainer extends Component {
  submit = values => {
    console.log(values)
    this.props.actions.newPublication(values)
  }
  render() {
    return (
      <div className="container">
        <div className="row mt-3">
          <div className="col-md-2"></div>
          <div className="col-md-8">
            <div className="card">
              <div className="card-body">
                <h3 className="card-title text-center">Nueva Publicación</h3>
                <hr />
                <NewPostForm onSubmit={this.submit} />
              </div>
            </div>
          </div>
          <div className="col-md-2"></div>
        </div>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(postActions, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(newPostContainer)