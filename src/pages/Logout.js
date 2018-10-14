import {UNAUTHENTICATED} from '../constants'
export default function signOutAction() {
  localStorage.clear();
  return {
    type: UNAUTHENTICATED
  };
}



// // import React, { Component } from 'react';
// // // import './App.css';
// // import { connect } from 'react-redux';
// // import { setUser } from '../actions/actions'

// // class Login extends Component {
// //     render() {
// //         // this.componentWillMount()
// //         return (
// //             <section>
// //                 <input ref={r => this.name = r}></input>
// //                 <input ref={r => this.passw = r}
                
// //                 // onInput={ () => {console.log(this.input.value); return this.props.setTable(this.input.value)}}
// //                 />
// //                 <button onClick={() => { console.log(this.input.value); return this.props.setUser(this.name.value, this.passw.value) }}>search</button>
// //                 {/* {()=>{setTable()}} */}
// //             </section>
// //         )
// //     }
// // }

// // Login = connect(null
// //     , { setUser }
// // )(Login)

// // export default Login


// import React, { Component } from 'react';
// import { Field, reduxForm } from 'redux-form';
// import { signInAction } from '../actions/actions';
// import { connect } from 'react-redux';

// class Logout extends Component {
//   submit = (values) => {
//     console.log(values);
//     this.props.signInAction(values, this.props.history);
//   }


//   errorMessage() {
//     if (this.props.errorMessage) {
//       return (
//         <div className="info-red">
//           {this.props.errorMessage}
//         </div>
//       );
//     }
//   }



// //   render() {
// //     const { handleSubmit } = this.props;
// //     return (
// //       <div className="form">
// //         <div className="container">
// //           <h2>Sign In</h2>
// //           <form onSubmit={ handleSubmit(this.submit) }>
// //             <Field name="email"
// //                   component="input"
// //                   type="text"
// //                   placeholder="Email" 
// //             />
// //             <Field name="password" 
// //                   component="input"
// //                   type="password" 
// //                   placeholder="Password" 
// //             />
// //             <button type="submit" className="blue">Sign In</button>
// //           </form>
// //         </div>
// //       </div>
// //     );
// //   }
// // }

// // export default reduxForm({
// //   form: 'signin'
// // })(Signin);

// render() {
//     const { handleSubmit } = this.props;
//     return (
//       <div className="form">
//         {/* <div className="container">
//           <h2>Sign In</h2>
//           <form onSubmit={ handleSubmit(this.submit) }>
//             <Field name="email"
//                    component="input"
//                    type="text"
//                    placeholder="Email" 
//             />
//             <Field name="password" 
//                    component="input"
//                    type="password"
//                    placeholder="Password" 
//             />
//             <button type="submit" className="blue">Sign In</button>
//           </form>
//           {this.errorMessage()}
//         </div> */}
//         <hi>You are logged out</hi>
//       </div>
//     );
//   }
// }



// // function mapStateToProps(state) {
// //   return { errorMessage: state.auth.error };
// // }


// // const reduxFormSignin = reduxForm({
// //   form: 'signin'
// // })(Signout);

// // export default connect(mapStateToProps, {signInAction})(reduxFormSignin);//
// export default Logout