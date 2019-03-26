import React, {Component} from 'react';


class ChatBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chats: []
    }
  }

  componentDidMount() {
    fetch("http://localhost:3000/chat_rooms/1/chats/")
      .then(res => res.json())
      .then((chats) => this.setState({chats}));
  }

  render() {
    const chats = this.state.chats.map(c =>
      <div className="chat">
        <div className="profile-image">
          <img className="image"
               src="https://images.pexels.com/photos/126407/pexels-photo-126407.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
               alt="Black cat behind tree"/>
        </div>
        <div className="right-side">
          <div className="user-name">
            {c.user.name}
          </div>
          <div className="message">
            {c.message}
          </div>
        </div>
      </div>
    );
    return (
      <div className="chat-box-wrapper">
        <div id="dim" onClick={this.props.closeChatBox}></div>
        <div id="chat-box">
          <div className="header">
            <div className="profile-image">
              <img className="image"
                   src="https://images.pexels.com/photos/126407/pexels-photo-126407.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                   alt="Black cat behind tree"/>
            </div>
            <div className="user-name">
              Jelly
            </div>
          </div>
        </div>
        <div id="chat-box">
          <div className="header">
            <div className="profile-image">
              <img className="image"
                   src="https://images.pexels.com/photos/126407/pexels-photo-126407.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                   alt="Black cat behind tree"/>
            </div>
            <div className="user-name">
              Jelly
            </div>
            <div className="message">
              Jelly
            </div>
          </div>
          <div id="chat-contents">
            {chats}
          </div>
          <div className="chat-input">
            <textarea name="chat-input" id="chat-input" cols="30" rows="10"></textarea>
            <div className="send-button-wrapper">
              <div id="send-button">Send</div>
            </div>
          </div>
        </div>
      </div>
    )

  }
}


export default ChatBox;