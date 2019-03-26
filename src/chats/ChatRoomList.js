import React, {Component} from 'react';


class ChatRoomList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chatRooms: []
    };
  }

  componentDidMount() {
    fetch("http://localhost:3000/chat_rooms")
      .then(res => res.json())
      .then(chatRooms => this.setState({chatRooms}));
  }

  render() {
    const chatRoomCells = this.state.chatRooms.map(c => {
      return (<div className="chat-cell" key={c.id} onClick={this.props.openChatBox}>
        <div className="chat-image-wrapper">
          <img className="image"
               src="https://images.pexels.com/photos/126407/pexels-photo-126407.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
               alt="Black cat behind tree"/>
        </div>
        <div className="right-side">
          <div className="name">
            {c.name}
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
      <main id="contents">
        <header>
          <span id="chats-text">Chats</span>
          <ion-icon name="add"></ion-icon>
        </header>
        {chatRoomCells}
      </main>
    )
  }
}

export default ChatRoomList;