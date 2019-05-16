import React, {Component} from 'react';
import jr from "../jr";



class ChatBox extends Component {
  chatContents = null;

  constructor(props) {
    super(props);
    this.state = {
      chats: [],
      message: ""
    };
  }

  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.sendChat();
    }
  }

  componentDidMount() {
    fetch(`http://localhost:3000/chat_rooms/${this.props.chatRoomNumber}/chats/`)
      .then(res => res.json())
      .then((chats) => this.setState({chats}))
      .then(() => this.scrollEnd());

  }

  sendChat = () => {
    jr("http://localhost:3000/chats/", "POST", {
        token: JSON.parse(localStorage.getItem("user"))["token"],
        chat_room_id: this.props.chatRoomNumber,
        message: this.state.message
      }
    ).then(() => {
      this.setState({message: ""});
      return fetch(`http://localhost:3000/chat_rooms/${this.props.chatRoomNumber}/chats/`)
    }).then(res => res.json())
      .then((chats) => {
        this.setState({chats});
        this.scrollEnd();
      })
  }

  scrollEnd = () => {
    this.chatContents.scrollTo(0, this.chatContents.scrollHeight);
  }

  setMessage = (e) => {
    this.setState({message: e.target.value});
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
            {c.user.nickname}
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
          <div id="chat-contents" ref={ref => {
            this.chatContents = ref
          }}>
            {chats}
          </div>
          <div className="chat-input">
            <textarea name="chat-input"
                      id="chat-input"
                      value={this.state.message}
                      onChange={this.setMessage}
                      onKeyPress={this.handleKeyPress}
                      cols="30"
                      rows="10"/>
            <div className="send-button-wrapper">
              <div id="send-button" onClick={this.sendChat}>Send</div>
            </div>
          </div>
        </div>
      </div>
    )

  }
}


export default ChatBox;