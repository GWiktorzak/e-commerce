import React from 'react';

import FormInput from '../form-input/form-input.componetn';
import CustomButton from '../custom-button/custom-button.component';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

import './sign-in.styles.scss';

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      passwordd: ''
    }
  }

  handleSubmit = async event => {
    event.preventDefault()

    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: '', password: '' });
    } catch (error) {
      console.log(error);
    }
  };

  handleChange = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value })
  }

  render() {
    return(
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit="sign-in">
        <FormInput name="email" type="email" label="email" onChange={this.handleChange} value={this.state.email} required />
        <FormInput name="password" type="password"  label="password" onChange={this.handleChange} value={this.state.password} required />
        <div className="buttons">
        <CustomButton type='submit' onClick={this.handleSubmit}>Sign in</CustomButton>
        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign in with Google</CustomButton>
        </div>
        </form>
      </div>
    )
  }
}

export default SignIn;