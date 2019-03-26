import React, {Component} from 'react';
import './Chats.scss';
import ChatBox from './ChatBox';
import ChatRoomList from "./ChatRoomList";


class Chats extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showChatBox: false,
      chatRoomNumber: 0
    };
  }

  openChatBox = (roomNumber) => {
    this.setState({showChatBox: true, chatRoomNumber: roomNumber});
  };

  closeChatBox = () => {
    this.setState({showChatBox: false});
  };

  render() {
    return (
      <div className="chat-wrapper">
        {this.state.showChatBox ?
          <ChatBox closeChatBox={this.closeChatBox} chatRoomNumber={this.chatRoomNumber}/>
          : null
        }
        <ChatRoomList openChatBox={this.openChatBox}/>
      </div>
    )
  }
}

export default Chats;
