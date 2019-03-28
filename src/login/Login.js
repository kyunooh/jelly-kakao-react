import React, {Component} from 'react';
import {withRouter} from "react-router";
import jr from "../jr";

class Login extends Component {
  usernameInput = null;

  constructor(props) {
    super(props);
    this.state = {
      username: ''
    }
  }

  componentDidMount() {
    this.usernameInput.focus();
  }

  setUsername = (e) => {
    this.setState({username: e.target.value})
  };

  login = (e) => {
    e.preventDefault();
    jr("http://localhost:3000/users", "POST", {
      nickname: this.state.username
    }).then((res) => res.json())
      .then((user) => {
      localStorage.setItem("user", JSON.stringify(user));
      this.props.history.push('/friends')
    })
  };

  render() {
    const boxStyle = {
      margin: "auto"
    }
    const inputStyle = {
      "fontSize": "4em"
    }

    const buttonStyle = {
      "margin": "auto",
       "fontSize": "2em",
       "width": "180px",
       "height": "60px"
    }
    return (
      <div style={boxStyle}>
        <form>
          <input type="text" autoCorrect="off" autoCapitalize="none" name="username"
                 style={inputStyle}
                 value={this.state.username}
                 onChange={this.setUsername}
                 ref={ref => this.usernameInput = ref}/>
          <button type="submit" onClick={this.login}
                  style={buttonStyle}>로그인</button>
        </form>
      </div>);
  }
}

const LoginWithRouter = withRouter(Login);

export default LoginWithRouter;