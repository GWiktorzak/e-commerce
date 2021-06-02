import React from 'react';

import './sign-in.styles.scss';

import FormInput from '../form-input/form-input.componetn';

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      passwordd: ''
    }
  }

  handleSubmit = event => {
    event.preventDefault()

    this.state.setState({ email: '', password: '' })
  }

  handleChange = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value })
  }

  render() {
    return(
      <div className={this.handleSubmit}>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit="sign-in">
        <FormInput name="email" type="email" label="email" onChange={this.handleChange} value={this.state.email} required />
        <FormInput name="password" type="password"  label="password" onChange={this.handleChange} value={this.state.password} required />
        <input type="submit" value="Submit Form"/>
        </form>
      </div>
    )
  }
}

export default SignIn;