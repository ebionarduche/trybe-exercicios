import React, {Component} from "react";

class Login extends Component {
  state = {
    email: '',
    password: '',
    buttonDisable: true,
  }

  InputValidation = () => {
    const { password, email } = this.state;
    const re = /\S+@\S+\.\S+/;
    const validPass = password.length >= 6;
    const validEmail = re.test(email);
    const validation = validPass && validEmail;
    validation
    ? this.setState({
        buttonDisable: false
      })
    : this.setState({
        buttonDisable: true
      });
};

  onInputChange = ({target}) => {
    const { name, value } = target;
    this.setState({
      [name]: value
    }, this.InputValidation);
  }


  render() { 
    const { buttonDisable } = this.state;
    const { history } = this.props
    return (
      <form>
        <label htmlFor="">
          Email:
        <input 
          type="email"
          name="email"
          id=""
          onChange={ this.onInputChange }
          data-testid="email-input"
        />
        </label>
        
        <label htmlFor="">
          Senha:
        <input 
        type="password" 
        name="password" 
        id="" 
        onChange={ this.onInputChange }
        data-testid="password-input"
        />
        </label>

      <button
      type="button"
      disabled={buttonDisable}
      onClick={() => history.push('/carteira')}
      >
        Entrar
      </button>
      </form>
    )
  }
}

export default Login
