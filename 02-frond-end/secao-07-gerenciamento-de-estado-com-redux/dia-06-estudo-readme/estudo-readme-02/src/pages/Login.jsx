import React, { Component } from "react";

class Login extends Component {
  state = {
    name: '',
    email: '',
    isDisabled: true,
  }

  inputValidation = () => {
    const { name, email } = this.state
    const one = 1
    const emailShape = /\S+@\S+\.\S+/;
    const emailValid = emailShape.test(email)
    const nameValid = name.length >= one;
    const validation = emailValid && nameValid;
    
    if(validation) {
      this.setState({
        isDisabled: false,
      });
    } else {
      this.setState({
        isDisabled: true,
      });
    }
  };

  onInputChange = ({ target }) => {
    const { name, value} = target;
    this.setState({
      [name]: value,
    }, this.inputValidation)
  }
  
  
  render() {
    const { isDisabled } = this.state
    return (
      <div>

        <label htmlFor="">    
        Email:
          <input
            autoComplete="off"
            placeholder="Digite seu email"
            type="email"
            name="email"
            id="" 
            onChange={ this.onInputChange }
            />
        </label>

        <label htmlFor="">
          Name:
          <input
            autoComplete="off"
            placeholder="Digite seu nome"
            type="text"
            name="name"
            id=""
            onChange={ this.onInputChange }
          />
        </label>

        <button 
        type="submit"
        disabled={ isDisabled }
        >
          Play
        </button>

        <button 
        type="button"
        >
          Settings
        </button>
      </div>
    )
  }
}

export default Login;
