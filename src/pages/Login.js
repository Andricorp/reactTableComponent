import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { signInAction } from '../actions/boundActionCreators/boundAuth';
import { connect } from 'react-redux';

class Login extends Component {
  submit = (values) => {
    console.log(values);
    this.props.signInAction(values, this.props.history);
  }


  errorMessage() {
    if (this.props.errorMessage) {
      return (
        <div className="info-red">
          {this.props.errorMessage}
        </div>
      );
    }
  }


render() {
    const { handleSubmit } = this.props;
    return (
      <div className="form">
        <div className="container">
          <h2>Log In</h2>
          <form onSubmit={ handleSubmit(this.submit) }>
            <Field name="email"
                   component="input"
                   type="text"
                   placeholder="Email" 
            />
            <Field name="password" 
                   component="input"
                   type="password"
                   placeholder="Password" 
            />
            <button type="submit" className="blue">Log In</button>
          </form>
          {this.errorMessage()}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { errorMessage: state.auth.error };
}


const reduxFormLogin = reduxForm({
  form: 'signin'
})(Login);

export default connect(mapStateToProps, {signInAction})(reduxFormLogin);//