import React from 'react';
import {Field, reduxForm} from 'redux-form';

let newPost = (props) => {
  const { handleSubmit } = props
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <Field name="text" required className="form-control" component="textarea" rows="5"/>
      </div>
      <div className="text-right">
        <button type="submit" className="btn btn-primary btn-lg">Publicar</button>
      </div>
    </form>
  )
}

newPost = reduxForm({
  form: 'newPublication'
})(newPost)

export default newPost;