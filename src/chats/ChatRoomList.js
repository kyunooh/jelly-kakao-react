import React, {Component} from 'react';
import NewChat from "./NewChat";
import jr from "../jr";


class ChatRoomList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chatRooms: [],
      showCreateRoom: false
    };
  }

  componentDidMount() {
    jr(`http://localhost:3000/chat_rooms?token=${JSON.parse(localStorage.getItem("user"))["token"]}`)
      .then(res => res.json())
      .then(chatRooms => this.setState({chatRooms}));
  }

  newRoom = () => {
    this.setState({showCreateRoom: true})
  };

  exitNewRoom = () => {
    this.setState({showChatBox: false});
  };

  render() {
    if(this.state.showCreateRoom) {
      return <NewChat exitNewRoom={this.exitNewRoom}/>
    }

    const chatRoomCells = this.state.chatRooms.map(cr => {
      return (<div className="chat-cell" key={cr.id} onClick={() => this.props.openChatBox(cr.id)}>
        <div className="chat-image-wrapper">
          <img className="image"
               src="https://images.pexels.com/photos/126407/pexels-photo-126407.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
               alt="Black cat behind tree"/>
        </div>
        <div className="right-side">
          <div className="name">
            {cr.name}
          </div>
          <div className="recent-message">
            Jelly is happy!
            Jelly is happy!
            Jelly is happy!
            Jelly is happy!
            Jelly is happy!
            Jelly is happy!
            Jelly is happy!
            Jelly is happy!
            Jelly is happy!
            Jelly is happy!
            Jelly is happy!
            Jelly is happy!
          </div>
        </div>
      </div>)
    });

    return (
      [
        <header key="0">
          <span id="chats-text">Chats</span>
          <span onClick={this.newRoom}><ion-icon name="add"  /></span>
        </header>
        ,
        chatRoomCells
      ]
    )
  }


}

export default ChatRoomList;